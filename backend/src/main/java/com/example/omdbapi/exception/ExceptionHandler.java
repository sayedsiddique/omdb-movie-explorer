package com.example.omdbapi.exception;

import com.example.omdbapi.dto.response.ApiResponse;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;

@ControllerAdvice
public class ExceptionHandler {
    @org.springframework.web.bind.annotation.ExceptionHandler(Exception.class)
    public ResponseEntity<ApiResponse<Void>> handle(Exception exception, HttpServletRequest request) {
        exception.printStackTrace();
        return new ResponseEntity<ApiResponse<Void>>(new ApiResponse<>(
                "Server not able to request the process at the moment. Please try again later.",
                500
        ), HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
