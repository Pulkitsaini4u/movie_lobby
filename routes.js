const express = require('express');
const Movie = require('./databaseConnection/models/movieSchema');
const router = express.Router();

function isAdmin(req, res, next) {
    try {
        if (req.headers.isadmin) {
            next();
        } else {
            res.status(403).json({ error: "Unauthorized access" });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// Get all movies
router.get('/movies', async (req, res) => {
    try {
        let movies = await getAllMovies();
        res.json({ isSuccess: true, movies });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Search movies
router.get('/search', async (req, res) => {
    let query = req.query.q;
    try {
        let movies = await getMoviesBySearch(query);
        res.json({ isSuccess: true, movies });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Add a new movie
router.post('/movies', isAdmin, async (req, res) => {
    try {
        let movie = await saveMovie(req.body);
        res.status(201).json({ isSuccess: true, movie });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Update a movie
router.put('/movies/:id', isAdmin, async (req, res) => {
    try {
        let movie = await updateMovie(req.params.id, req.body);
        if (!movie) throw new Error('Movie not found');
        res.json({ isSuccess: true, movie });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Delete a movie
router.delete('/movies/:id', isAdmin, async (req, res) => {
    try {
        let movie = await deleteMovie(req.params.id);
        if (!movie) throw new Error('Movie not found');
        res.sendStatus(204);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


async function getAllMovies() {
    try {
        let movies = await Movie.find();
        return movies;
    } catch (error) {
        throw error;
    }
}

async function getMoviesBySearch(searchValue) {
    try {
        let movies = await Movie.find({
            $or: [
                { title: { $regex: `^${searchValue}`, $options: 'i' } },
                { genre: { $regex: `^${searchValue}`, $options: 'i' } }
              ]
          });
        return movies;
    } catch (error) {
        throw error;
    }
}

async function saveMovie({ title, genre, rating, streamingLink }) {
    try {
        let movie = new Movie({ title, genre, rating, streamingLink });
        await movie.save();
        return movie;
    } catch (error) {
        throw error;
    }
}

async function updateMovie(id, data) {
    try {
        let movie = await Movie.findByIdAndUpdate(id, data, { new: true });
        return movie;
    } catch (error) {
        throw error;
    }
}

async function deleteMovie(id) {
    try {
        let movie = await Movie.findByIdAndDelete(id);
        return movie;
    } catch (error) {
        throw error;
    }
}

module.exports = router;