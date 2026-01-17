package com.example.omdbapi.dto.omdbapi;

import java.util.List;

public record SearchItemResponse(
        List<SearchItem> Search,
        String totalResults,
        String Response,
        String Error
) {
}
