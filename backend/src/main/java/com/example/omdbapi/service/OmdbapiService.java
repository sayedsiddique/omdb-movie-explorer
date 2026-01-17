package com.example.omdbapi.service;

import com.example.omdbapi.config.OmdbapiConfig;
import com.example.omdbapi.dto.omdbapi.ItemResponse;
import com.example.omdbapi.dto.omdbapi.SearchItemResponse;
import com.example.omdbapi.dto.response.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

@Service
public class OmdbapiService {
    @Autowired
    private WebClient webClient;
    @Autowired
    private OmdbapiConfig omdbapiConfig;

    public ApiResponse<SearchItemResponse> search(String query, int page) {
        return new ApiResponse<SearchItemResponse>("Searched from OMDB api", 200, searchOmdbapi(query, page));
    }

    public ApiResponse<ItemResponse> getDetails(String imdbId) {
        return new ApiResponse<ItemResponse>("Fetched from OMDB api", 200, getDetailsOmdbapi(imdbId));
    }

    private SearchItemResponse searchOmdbapi(String query, int page) {
        return webClient.get()
                .uri(omdbapiConfig.baseUrl() + "?apiKey=" + omdbapiConfig.apiKey() + "&s=" + query + "&page=" + page)
                .retrieve()
                .bodyToMono(SearchItemResponse.class)
                .block();
    }

    private ItemResponse getDetailsOmdbapi(String imdbId) {
        return webClient.get()
                .uri(omdbapiConfig.baseUrl() + "?apiKey=" + omdbapiConfig.apiKey() + "&i=" + imdbId)
                .retrieve()
                .bodyToMono(ItemResponse.class)
                .block();
    }
}
