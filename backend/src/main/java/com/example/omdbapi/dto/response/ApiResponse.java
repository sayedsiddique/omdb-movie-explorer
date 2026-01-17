package com.example.omdbapi.dto.response;

import java.time.ZonedDateTime;

public record ApiResponse<T>(
        String message,
        int statusCode,
        T data,
        ZonedDateTime timestamp
) {
    public ApiResponse(String message, int statusCode, T data) {
        this(message, statusCode, data, ZonedDateTime.now());
    }

    public ApiResponse(String message, int statusCode) {
        this(message, statusCode, null, ZonedDateTime.now());
    }
}
