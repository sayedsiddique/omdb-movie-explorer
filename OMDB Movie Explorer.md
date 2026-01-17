# OMDB Movie Explorer

As part of this task, develop **OMDB Movie Explorer**

API INFO
Use the public OMDB API:
**https://www.omdbapi.com/**
This API provides information about movies, series, and episodes.

# Specifications

Your product should have 2 components

- **Web service API** (serving RESTful APIs using nodejs / java / python)
- **Front end layer** rendering content (HTML + CSS + JavaScript/TypeScript + toolsets like ReactJS or similar)

## Web Service

Develop a **web service component** that fetches data from the OMDB API and exposes a set of simplified endpoints for the UI.

Requirements:

- Cache responses (Redis or in-memory)
- Cache expiry + max size
- Follow REST practices
- Runs locally
- Securely handle API Key (`apikey` parameter)

## UI Layer

Ideas:

- **Search Dashboard**: Search bar to find movies/series by title.
- **Results Grid**: Display posters, titles, and release years.
- **Detail View**: Comprehensive info (Plot, Director, Actors, Ratings).
- **Favorites**: Ability to mark movies as favorites (optional).
- **Responsive Design**: Looks good on mobile and desktop.

## Points to Note

- Follow REST guidelines
- Must run locally
- Violations = invalid submission

## Evaluation

- Code quality
- Extensible structure
- Best practices
- UI/UX
- Performance

## Submission

- Public GitHub repo
- Reply to email without changing subject
- Include repo link
