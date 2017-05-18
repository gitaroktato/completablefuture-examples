package completablefuture

import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class GetHelloSimulationSlowly extends Simulation {

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
		exec(http("hello_sync")
			.get("/hello_sync")
			.headers(headers)).pause(125 milliseconds)
	}
	val helloAsyncLegacy = repeat(times, "n") {
		exec(http("hello_async_oldtimer")
				.get("/hello_async_oldtimer")
				.headers(headers)).pause(125 milliseconds)
	}
    val helloAsync = repeat(times, "n") {
        exec(http("hello_async")
                .get("/hello_async")
                .headers(headers)).pause(125 milliseconds)
    }
	val sync = scenario("Get Hello").exec(helloSync);
    val async = scenario("Get Hello Async").exec(helloAsync);
    val asyncLegacy = scenario("Get Hello Async Legacy").exec(helloAsyncLegacy);

	setUp(
        sync.inject(rampUsers(5) over (15 seconds)),
        async.inject(rampUsers(5) over (15 seconds)),
        asyncLegacy.inject(rampUsers(5) over (15 seconds))
	).protocols(httpProtocol)
}