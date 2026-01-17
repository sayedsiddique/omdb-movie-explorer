package com.example.omdbapi.service;

import com.example.omdbapi.client.OmdbapiClient;
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
    private OmdbapiClient omdbapiClient;

    public ApiResponse<SearchItemResponse> search(String query, int page) {
        return new ApiResponse<SearchItemResponse>("Searched from OMDB api", 200, omdbapiClient.searchOmdbapi(query, page));
    }

    public ApiResponse<ItemResponse> getDetails(String imdbId) {
        return new ApiResponse<ItemResponse>("Fetched from OMDB api", 200, omdbapiClient.getDetailsOmdbapi(imdbId));
    }
}
