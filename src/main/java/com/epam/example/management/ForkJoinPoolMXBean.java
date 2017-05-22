package com.epam.example.management;
public interface ForkJoinPoolMXBean {

    int getActiveThreadCount();
    int getRunningThreadCount();
    int getQueuedSubmissionCount();
    long getQueuedTaskCount();
    int getPoolSize();
    long getStealCount();

}
