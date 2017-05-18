package com.epam.example;

import org.springframework.stereotype.Component;

@Component
public class FlakyService {

    private static final int WAIT_TIME = 125;
    private volatile int counter = 0;

    public String getMessage() throws RuntimeException {
        counter++;
        if (counter % 16 == 0) {
            try {
                Thread.sleep(WAIT_TIME);
                throw new RuntimeException("Connection Timeout");
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
        } else {
            return "hello";
        }
    }
}
