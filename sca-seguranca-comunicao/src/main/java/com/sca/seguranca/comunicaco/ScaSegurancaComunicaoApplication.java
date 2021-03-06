package com.sca.seguranca.comunicaco;

import org.springframework.amqp.rabbit.annotation.EnableRabbit;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@EnableDiscoveryClient
@SpringBootApplication
@EnableRabbit
public class ScaSegurancaComunicaoApplication {

	public static void main(String[] args) {
		SpringApplication.run(ScaSegurancaComunicaoApplication.class, args);
	}

}
