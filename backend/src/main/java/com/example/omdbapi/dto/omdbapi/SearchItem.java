package com.example.omdbapi.dto.omdbapi;

public record SearchItem(
        String Title,
        String Year,
        String imdbID,
        String Type,
        String Poster
) {
}
