package com.epam.example;

import org.springframework.stereotype.Component;

@Component
public class SlowService {

    private static final int WAIT_TIME = 25;

    public String getMessage() throws RuntimeException {
        try {
            Thread.sleep(WAIT_TIME);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
        return "hello";
    }
}
