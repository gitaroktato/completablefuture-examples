package completablefuture

import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class GetHelloSimulation extends Simulation {

	val httpProtocol = http
		.baseURL("http://localhost:8080")
		.inferHtmlResources()
		.acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")
		.acceptEncodingHeader("gzip, deflate")
		.acceptLanguageHeader("en-US,en;q=0.5")
		.userAgentHeader("Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:50.0) Gecko/20100101 Firefox/50.0")

	val headers_0 = Map("Upgrade-Insecure-Requests" -> "1")

	val getHello = repeat(25, "n") {
		exec(http("get_hello")
			.get("/hello_async_oldtimer")
			.headers(headers_0))
	}
	val scn = scenario("Get Hello").exec(getHello);
	setUp(scn.inject(rampUsers(255) over (3 seconds))).protocols(httpProtocol)
}