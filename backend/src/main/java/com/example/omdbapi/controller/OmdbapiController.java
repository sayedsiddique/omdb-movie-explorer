package com.example.omdbapi.controller;

import com.example.omdbapi.dto.omdbapi.ItemResponse;
import com.example.omdbapi.dto.omdbapi.SearchItem;
import com.example.omdbapi.dto.omdbapi.SearchItemResponse;
import com.example.omdbapi.dto.response.ApiResponse;
import com.example.omdbapi.service.OmdbapiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/omdbapi")
public class OmdbapiController {
    @Autowired
    private OmdbapiService omdbapiService;

    @GetMapping("/search")
    public ResponseEntity<ApiResponse<SearchItemResponse>> search(@RequestParam String query, @RequestParam int page) {
        return ResponseEntity.ok(omdbapiService.search(query, page));
    }

    @GetMapping("/{imdbId}")
    public ResponseEntity<ApiResponse<ItemResponse>> getDetails(@PathVariable String imdbId) {
        return ResponseEntity.ok(omdbapiService.getDetails(imdbId));
    }
}
