const mongoose = require('mongoose');

// Connection URI for local MongoDB
const uri = 'mongodb://localhost:27017/movie_lobby';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('Error connecting to the local MongoDB database:', error);
});

db.once('open', () => {
  console.log('Connected to the local MongoDB database');
});
