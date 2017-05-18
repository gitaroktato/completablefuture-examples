package com.epam.example;

import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.stereotype.Component;

@Component
public class JerseyConfig extends ResourceConfig {
    public JerseyConfig() {
        super(HelloResource.class, HelloResourceTwice.class);
    }

}
