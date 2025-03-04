package com.backend.cardPayment;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class CardPaymentApplication implements WebMvcConfigurer {

	@Value("${allowed.origins}")
	private String[] allowedOrigins;

	public static void main(String[] args) {
		SpringApplication.run(CardPaymentApplication.class, args);
	}

	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**")
				.allowedOrigins(allowedOrigins)
				.allowedMethods("*");
	}
}
