package com.example.omdbapi.dto.omdbapi;

import java.util.List;

public record ItemResponse(
        String Title,
        String Year,
        String Rated,
        String Released,
        String Runtime,
        String Genre,
        String Director,
        String Writer,
        String Actors,
        String Plot,
        String Language,
        String Country,
        String Awards,
        String Poster,
        List<Rating> Ratings,
        Long Metascore,
        Double imdbRating,
        String imdbVotes,
        String imdbID,
        String Type,
        String DVD,
        String BoxOffice,
        String Production,
        String Website,
        String Response,
        String Error
) {
    public record Rating(
            String Source,
            String Value
    ) {
    }
}
