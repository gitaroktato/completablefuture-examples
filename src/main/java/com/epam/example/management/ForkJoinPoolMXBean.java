package com.epam.example.management;
public interface ForkJoinPoolMXBean {

    int getActiveThreadCount();
    int getRunningThreadCount();
    int getQueuedSubmissionCount();
    int getPoolSize();
    long getStealCount();

}
