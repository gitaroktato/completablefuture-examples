package com.epam.example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.container.AsyncResponse;
import javax.ws.rs.container.Suspended;
import java.util.concurrent.CompletableFuture;

@Component
@Path("/twice")
public class HelloResourceTwice {

    @Autowired
    private SlowService slowService;

    @GET
    @Path("/hello_async")
    public void helloAsync(@Suspended AsyncResponse response)
            throws InterruptedException {
        final CompletableFuture<String> callSlowService1, callSlowService2;
        callSlowService1 = CompletableFuture.supplyAsync(slowService::getMessage);
        callSlowService2 = CompletableFuture.supplyAsync(slowService::getMessage);
        callSlowService1.thenAcceptBothAsync(callSlowService2,
                (t,u) -> response.resume(t + u));
    }

    @GET
    @Path("/hello_sync")
    public String helloSync() throws InterruptedException {
         return slowService.getMessage() + slowService.getMessage();
    }

}
