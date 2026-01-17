package com.example.omdbapi.dto.omdbapi;

public record Item(
        String Title,
        String Year,
        String imdbID,
        String Type,
        String Poster
) {
}
