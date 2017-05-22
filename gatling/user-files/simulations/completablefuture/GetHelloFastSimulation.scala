package completablefuture

import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class GetHelloFastSimulation extends Simulation {

	val httpProtocol = http
		.baseURL("http://localhost:8080")
		.inferHtmlResources()
		.acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")
		.acceptEncodingHeader("gzip, deflate")
		.acceptLanguageHeader("en-US,en;q=0.5")
		.userAgentHeader("Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:50.0) Gecko/20100101 Firefox/50.0")

	val headers = Map("Upgrade-Insecure-Requests" -> "1")

	val times = 5000
	val numUsers = 125
	val rampUpDuration = 30
	//
	val helloSync = repeat(times, "n") {
		exec(http("hello_sync_fast")
			.get("/hello_sync_fast")
			.headers(headers))
	}
    val helloAsync = repeat(times, "n") {
        exec(http("hello_async_fast")
                .get("/hello_async_fast")
                .headers(headers))
    }
	val sync = scenario("Get Hello").exec(helloSync);
	val async = scenario("Get Hello Async").exec(helloAsync);

	setUp(
        sync.inject(rampUsers(numUsers) over (rampUpDuration seconds))
        //async.inject(rampUsers(numUsers) over (rampUpDuration seconds))
	).protocols(httpProtocol)
}