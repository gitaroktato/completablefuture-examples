package com.epam.example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.container.AsyncResponse;
import javax.ws.rs.container.Suspended;
import java.util.concurrent.CompletableFuture;

@Component
@Path("/")
public class HelloResource {

    @Autowired
    private SlowService slowService;
    @Autowired
    private FlakyService flakyService;

    @GET
    @Path("/hello_async")
    public void helloAsync(@Suspended AsyncResponse response)
            throws InterruptedException {
        CompletableFuture.supplyAsync(() -> slowService.getMessage())
                .thenAcceptAsync(response::resume);
    }

    @GET
    @Path("/hello_async_oldtimer")
    public void helloOldTimer(@Suspended AsyncResponse response) {
        new Thread(() -> {
            String message = slowService.getMessage();
            response.resume(message);
        }).start();
    }

    @GET
    @Path("/hello_sync")
    public String helloSync() throws InterruptedException {
         return slowService.getMessage();
    }

    @GET
    @Path("/hello_flaky_sync")
    public String helloFlakySync() throws InterruptedException {
        return flakyService.getMessage();
    }

    @GET
    @Path("/hello_flaky_async")
    public void helloFlakyAsync(@Suspended AsyncResponse response)
            throws InterruptedException {
        CompletableFuture.supplyAsync(() -> flakyService.getMessage())
                .thenAcceptAsync(response::resume)
                .exceptionally((ex) -> {
                    response.resume(ex);
                    return null;
                });
    }

    // TODO exception handling

    // TODO Measure nr. of threads and queue size
    // TODO slow requests
}
