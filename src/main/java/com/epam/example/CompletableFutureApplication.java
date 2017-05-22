package com.epam.example;

import com.epam.example.management.ForkJoinPoolManaged;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.concurrent.ForkJoinPool;

@SpringBootApplication
public class CompletableFutureApplication {

	public static void main(String[] args) throws Exception {
		ForkJoinPoolManaged managedPool = new ForkJoinPoolManaged(ForkJoinPool.commonPool());
		managedPool.registerMBean();
		SpringApplication.run(CompletableFutureApplication.class, args);
	}
}
