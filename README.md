# Movie API

This API provides endpoints to manage a collection of movies.

## Setup

1. **Clone the Repository:**
``bash
git clone https://github.com/Pulkitsaini4u/movie_lobby.git
``


2. **Install Dependencies:**
``bash
npm install
``

3. **Run the API:**
``bash
npm start
``

4. **Accessing the API:**
- The API will be accessible at `http://localhost:5000`, 

## API Endpoints

### Get all movies

- **Endpoint:** `GET /movies`
- **Description:** Retrieve a list of all movies.
- **Sample Request:** 
 ```
 GET /movies
 ```
- **Sample Response:** 
 ```json
 {
     "isSuccess": true,
     "movies": [
         {
             "_id": "movie_id",
             "title": "Movie Title",
             "genre": "Action",
             "rating": 8,
             "streamingLink": "https://example.com/movie"
         },
         ...
     ]
 }
 ```

### Search movies

- **Endpoint:** `GET /search?q=query`
- **Description:** Search for movies by title or genre.
- **Sample Request:** 
 ```
 GET /search?q=action
 ```
- **Sample Response:** 
 ```json
 {
     "isSuccess": true,
     "movies": [
         {
             "_id": "movie_id",
             "title": "Action Movie",
             "genre": "Action",
             "rating": 7.5,
             "streamingLink": "https://example.com/action-movie"
         },
         ...
     ]
 }
 ```

### Add a new movie

- **Endpoint:** `POST /movies`
- **Description:** Add a new movie to the database.
- **Sample Request:** 
 ```json
 POST /movies
 {
     "title": "New Movie",
     "genre": "Drama",
     "rating": 6.5,
     "streamingLink": "https://example.com/new-movie"
 }
 ```
- **Sample Response:** 
 ```json
 {
     "isSuccess": true,
     "movie": {
         "_id": "new_movie_id",
         "title": "New Movie",
         "genre": "Drama",
         "rating": 6.5,
         "streamingLink": "https://example.com/new-movie"
     }
 }
 ```

### Update a movie

- **Endpoint:** `PUT /movies/:id`
- **Description:** Update an existing movie by ID.
- **Sample Request:** 
 ```json
 PUT /movies/movie_id
 {
     "title": "Updated Movie Title"
 }
 ```
- **Sample Response:** 
 ```json
 {
     "isSuccess": true,
     "movie": {
         "_id": "movie_id",
         "title": "Updated Movie Title",
         "genre": "Action",
         "rating": 8,
         "streamingLink": "https://example.com/movie"
     }
 }
 ```

### Delete a movie

- **Endpoint:** `DELETE /movies/:id`
- **Description:** Delete a movie by ID.
- **Sample Request:** 
 ```
 DELETE /movies/movie_id
 ```
- **Sample Response:** 
 `204 No Content`

