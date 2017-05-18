package completablefuture

import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._
import java.util.concurrent.TimeUnit

class GetHelloFlakySimulationSlowly extends Simulation {

	val httpProtocol = http
		.baseURL("http://localhost:8080")
		.inferHtmlResources()
		.acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")
		.acceptEncodingHeader("gzip, deflate")
		.acceptLanguageHeader("en-US,en;q=0.5")
		.userAgentHeader("Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:50.0) Gecko/20100101 Firefox/50.0")

	val headers = Map("Upgrade-Insecure-Requests" -> "1")

	val times = 125
	val helloSync = repeat(times, "n") {
		exec(http("hello_flaky_sync")
			.get("/hello_flaky_sync")
			.headers(headers)).pause(500 milliseconds)
	}
    val helloAsync = repeat(times, "n") {
        exec(http("hello_flaky_async")
                .get("/hello_flaky_async")
                .headers(headers)).pause(500 milliseconds)
    }
	val sync = scenario("Get Hello").exec(helloSync);
    val async = scenario("Get Hello Async").exec(helloAsync);

	setUp(
        sync.inject(rampUsers(75) over (3 seconds)),
        async.inject(rampUsers(75) over (3 seconds))
	).protocols(httpProtocol)
}