package com.epam.example;

import org.springframework.stereotype.Component;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.container.AsyncResponse;
import javax.ws.rs.container.Suspended;
import java.util.concurrent.CompletableFuture;

@Component
@Path("/")
public class HelloResource {

    private static final int WAIT_TIME = 25;

    @GET
    @Path("/hello_async")
    public void helloAsync(@Suspended AsyncResponse response)
            throws InterruptedException {
        CompletableFuture.supplyAsync(() -> {
            try {
                Thread.sleep(WAIT_TIME);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            return "hello";
        }).thenApplyAsync(response::resume);
    }

    @GET
    @Path("/hello_async_oldtimer")
    public void helloOldTimer(@Suspended AsyncResponse response) {
        new Thread(() -> {
            try {
                Thread.sleep(WAIT_TIME);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            response.resume("hello");
        }).start();
    }

    @GET
    @Path("/hello_sync")
    public String helloSync() throws InterruptedException {
         Thread.sleep(WAIT_TIME);
         return "hello";
    }
}
