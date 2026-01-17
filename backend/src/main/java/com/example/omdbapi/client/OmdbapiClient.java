package com.example.omdbapi.client;

import com.example.omdbapi.config.OmdbapiConfig;
import com.example.omdbapi.dto.omdbapi.ItemResponse;
import com.example.omdbapi.dto.omdbapi.SearchItemResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

@Service
public class OmdbapiClient {
    @Autowired
    private WebClient webClient;
    @Autowired
    private OmdbapiConfig omdbapiConfig;

    @Cacheable(value = "search", key = "#query + '_' + #page")
    public SearchItemResponse searchOmdbapi(String query, int page) {
        return webClient.get()
                .uri(omdbapiConfig.baseUrl() + "?apiKey=" + omdbapiConfig.apiKey() + "&s=" + query + "&page=" + page)
                .retrieve()
                .bodyToMono(SearchItemResponse.class)
                .block();
    }

    @Cacheable(value = "details", key = "#imdbId")
    public ItemResponse getDetailsOmdbapi(String imdbId) {
        return webClient.get()
                .uri(omdbapiConfig.baseUrl() + "?apiKey=" + omdbapiConfig.apiKey() + "&i=" + imdbId)
                .retrieve()
                .bodyToMono(ItemResponse.class)
                .block();
    }
}
