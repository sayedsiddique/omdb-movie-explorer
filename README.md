# OMDB Movie Explorer

A full-stack movie search application that uses the OMDB API to search for movies, view detailed information, and explore titles across different media types.

## Architecture

This project consists of two main components:

- **Backend**: Spring Boot REST API with caching capabilities (Java 21, Maven)
- **Frontend**: React-based UI with responsive design (React 19, React Router)

---

## Prerequisites

Before running the project, ensure you have the following installed:

### For Backend:
- **Java 21** or higher ([Download](https://www.oracle.com/java/technologies/downloads/))
- **Maven 3.6+** ([Download](https://maven.apache.org/download.cgi))
- **OMDB API Key** (Get it free at [https://www.omdbapi.com/apikey.aspx](https://www.omdbapi.com/apikey.aspx))

### For Frontend:
- **Node.js 18+** and **npm 9+** ([Download](https://nodejs.org/))

---

## Project Setup

### 1. Clone/Extract the Project

```bash
cd omdb-movie-explorer
```

### 2. Set Up OMDB API Key

You need to set the `OMDB_API_KEY` environment variable before running the backend.

#### On Windows (CMD):
```bash
set OMDB_API_KEY=your_api_key_here
```

#### On Windows (PowerShell):
```powershell
$env:OMDB_API_KEY="your_api_key_here"
```

#### On macOS/Linux:
```bash
export OMDB_API_KEY=your_api_key_here
```

---

## Running the Backend

The backend runs on **http://localhost:8080** by default.

### Step 1: Navigate to Backend Directory
```bash
cd backend
```

### Step 2: Build the Project
```bash
mvn clean install
```

This command:
- Cleans previous builds
- Downloads dependencies
- Compiles the Java code
- Runs tests

### Step 3: Run the Backend Server
```bash
mvn spring-boot:run
```

The backend will start and be accessible at:
- **API Base URL**: `http://localhost:8080`
- **Health Check**: `http://localhost:8080/actuator/health`

### Backend Features:
- RESTful endpoints for movie search and details
- In-memory caching (Caffeine) with configurable expiry
- Secure API key handling (not exposed in responses)
- Exception handling and error responses
- CORS enabled for frontend communication

### Backend Endpoints:
- `GET /api/search?title=<title>` - Search for movies by title
- `GET /api/movie?imdbId=<id>` - Get detailed information about a movie

---

## Running the Frontend

The frontend runs on **http://localhost:3000** by default.

### Step 1: Navigate to Frontend Directory
```bash
cd frontend
```

### Step 2: Install Dependencies
```bash
npm install
```

This installs all required npm packages listed in `package.json`.

### Step 3: Start the Development Server
```bash
npm start
```

The frontend will automatically open in your browser at **http://localhost:3000**.

### Frontend Features:
- Search dashboard for finding movies
- Results grid with posters and basic information
- Detailed view for comprehensive movie info
- Responsive design for mobile and desktop
- React Router for navigation

### Build for Production
To create an optimized production build:
```bash
npm run build
```

This generates a `build/` directory with optimized files ready for deployment.

---

## Running Both Together

### Terminal 1 - Backend
```bash
cd backend
mvn spring-boot:run
```

### Terminal 2 - Frontend
```bash
cd frontend
npm start
```

Once both are running:
- Frontend: http://localhost:3000
- Backend API: http://localhost:8080

The frontend will automatically proxy requests to the backend.

---

## Troubleshooting

### Backend Issues

**Error: "OMDB_API_KEY not set"**
- Ensure you've set the environment variable correctly
- Restart your terminal/IDE after setting the variable
- Verify with: `echo %OMDB_API_KEY%` (Windows) or `echo $OMDB_API_KEY` (macOS/Linux)

**Error: "Port 8080 already in use"**
- Change the port in `backend/src/main/resources/application.properties`:
  ```properties
  server.port=8081
  ```
- Update the frontend API configuration accordingly

**Maven build fails**
- Ensure Java 21 is installed: `java -version`
- Clear Maven cache: `mvn clean`
- Try: `mvn clean install -U`

### Frontend Issues

**Error: "Cannot find module"**
- Delete `node_modules/` and `package-lock.json`
- Run `npm install` again

**Error: "Port 3000 already in use"**
- Kill the process using port 3000
- Or run on a different port: `PORT=3001 npm start`

**Backend API not responding**
- Verify the backend is running on http://localhost:8080
- Check browser console for CORS errors
- Ensure both services are on the same machine or accessible network

---

## Environment Configuration

### Backend Configuration Files:
- **Main Config**: `backend/src/main/resources/application.properties`
- **Caching**: Configured with Caffeine (in-memory cache)
- **API Timeout**: Configurable in `WebClientConfig.java`

### Frontend Configuration:
- **API Endpoint**: Defined in component props or environment variables
- **Proxy**: Can be configured in `package.json` if needed

---

## Project Structure

```
omdb-movie-explorer/
├── backend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/example/omdbapi/
│   │   │   │   ├── OmdbapiApplication.java
│   │   │   │   ├── controller/
│   │   │   │   ├── service/
│   │   │   │   ├── client/
│   │   │   │   ├── dto/
│   │   │   │   ├── config/
│   │   │   │   └── exception/
│   │   │   └── resources/
│   │   │       └── application.properties
│   │   └── test/
│   ├── pom.xml
│   └── mvnw (Maven wrapper)
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── assets/
│   │   ├── App.js
│   │   └── index.js
│   ├── public/
│   ├── package.json
│   └── tailwind.config.js
│
└── README.md (this file)
```

---

## Technologies Used

### Backend:
- **Spring Boot 3.5.4** - Web framework
- **Java 21** - Programming language
- **Maven** - Build tool
- **Caffeine** - In-memory caching
- **WebClient** - Reactive HTTP client

### Frontend:
- **React 19** - UI library
- **React Router 7** - Client-side routing
- **Tailwind CSS** - Styling
- **React Scripts 5** - Build and development tools

---

## API Documentation

### Search Endpoint
```
GET /api/search?title=<movie_title>
```

Response:
```json
{
  "success": true,
  "data": {
    "totalResults": 10,
    "items": [...]
  }
}
```

### Movie Details Endpoint
```
GET /api/movie?imdbId=<imdb_id>
```

Response:
```json
{
  "success": true,
  "data": {
    "title": "Movie Title",
    "plot": "Movie plot...",
    "director": "Director Name",
    "actors": "Actor1, Actor2...",
    "ratings": [...]
  }
}
```

---

## Development Notes

- The backend caches API responses to reduce external API calls
- API keys are never exposed in frontend responses
- CORS is configured to allow frontend requests
- Error handling provides meaningful error messages
- The frontend uses React Router for SPA navigation

---

## Common Commands Reference

### Backend:
```bash
# Build
mvn clean install

# Run
mvn spring-boot:run

# Run tests
mvn test

# Run specific profile
mvn spring-boot:run -Dspring-boot.run.arguments="--profile=dev"
```

### Frontend:
```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Eject configuration (not recommended)
npm run eject
```

---

## Support & Documentation

- **OMDB API Docs**: https://www.omdbapi.com/
- **Spring Boot Docs**: https://spring.io/projects/spring-boot
- **React Docs**: https://react.dev
- **Maven Docs**: https://maven.apache.org/

---

## License

This project is part of a coding challenge and is provided as-is.
