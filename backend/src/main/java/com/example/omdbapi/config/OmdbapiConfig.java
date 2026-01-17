package com.example.omdbapi.config;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "omdbapi")
public record OmdbapiConfig(
        String baseUrl,
        String apiKey
) {
}
