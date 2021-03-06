package com.sca.barragem.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.google.common.collect.Lists;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.ApiKey;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger.web.ApiKeyVehicle;
import springfox.documentation.swagger.web.SecurityConfiguration;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class SwaggerConfig {

	// http://localhost:8280/sca-barragens/swagger-ui.html
    ApiInfo apiInfo() {
        return new ApiInfoBuilder().title("API Módul Monitoramento de Barragens")
        		.description("Essa API disponibiliza serviços relacionados as barragens da mineradora. "
        				+ "Com a API é possível manter um cadastro de uma barragem, incluir os sensores de monitoramento e exibir os resultados dos sinais desses sensores."
        				+ "Além disso, os consultores externos e os próprios engenheiros podem realizar inspeções da barragens periodicamente.")
            .termsOfServiceUrl("suporte").version("1.0.0").contact(new Contact("", "", "wanersbh@gmail.com")).build();
    }

    @Bean
    public Docket api() {
        return new Docket(DocumentationType.SWAGGER_2).select().apis(RequestHandlerSelectors.basePackage("com.sca.barragem.controller")).build().apiInfo(apiInfo())
            .securitySchemes(Lists.newArrayList(apiKey()));
    }

    private ApiKey apiKey() {
        return new ApiKey("Authorization", "Authorization", "header");
    }

    @Bean
    public SecurityConfiguration securityInfo() {
        return new SecurityConfiguration(null, null, null, null, "", ApiKeyVehicle.HEADER, "Authorization", "");
    }

}