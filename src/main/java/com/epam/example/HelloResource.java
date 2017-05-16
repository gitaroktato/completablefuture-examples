package com.epam.example;

import org.springframework.stereotype.Component;

import javax.ws.rs.GET;
import javax.ws.rs.Path;

@Component
@Path("/hello")
public class HelloResource {

    @GET
    public String hello() throws InterruptedException {
        Thread.sleep(1000);
        return "hello";
    }
}
