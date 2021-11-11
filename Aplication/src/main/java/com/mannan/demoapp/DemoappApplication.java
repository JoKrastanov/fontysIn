package com.mannan.demoapp;

import com.mannan.demoapp.Repository.SqlConnClass;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import com.mannan.demoapp.Repository.SqlConnClass;


@SpringBootApplication
public class DemoappApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoappApplication.class, args);
		SqlConnClass sqlConnClass = new SqlConnClass();
		sqlConnClass.tryConnection();
	}
}
