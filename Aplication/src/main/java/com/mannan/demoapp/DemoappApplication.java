package com.mannan.demoapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class DemoappApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoappApplication.class, args);
		SqlConnClass sqlConnClass = new SqlConnClass();
		sqlConnClass.tryConnection();
	}
}
