package com.epam.example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.container.AsyncResponse;
import javax.ws.rs.container.Suspended;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.Executors;

@Component
@Path("/twice")
public class HelloResourceTwice {

    @Autowired
    private SlowService slowService;
    @Autowired
    private AnotherSlowService otherSlowService;

    @GET
    @Path("/hello_async")
    public void helloAsync(@Suspended AsyncResponse response)
            throws InterruptedException {
        final CompletableFuture<String> callSlowService1, callSlowService2;
        callSlowService1 = CompletableFuture.supplyAsync(slowService::getMessage);
        callSlowService2 = CompletableFuture.supplyAsync(otherSlowService::getMessage);
        callSlowService1.thenAcceptBothAsync(callSlowService2,
                (t,u) -> response.resume(t + u));
    }

    @GET
    @Path("/hello_async_executors")
    public void helloAsyncExecutors(@Suspended AsyncResponse response)
            throws InterruptedException {
        final CompletableFuture<String> callSlowService1, callSlowService2;
        callSlowService1 = CompletableFuture.supplyAsync(slowService::getMessage,
                Executors.newSingleThreadExecutor());
        callSlowService2 = CompletableFuture.supplyAsync(otherSlowService::getMessage,
                Executors.newSingleThreadExecutor());
        callSlowService1.thenAcceptBothAsync(callSlowService2,
                (t,u) -> response.resume(t + u));
    }

    @GET
    @Path("/hello_sync")
    public String helloSync() throws InterruptedException {
         return slowService.getMessage() + otherSlowService.getMessage();
    }

}
