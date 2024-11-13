const express = require('express');
const mongoose = require('mongoose');
const lodash = require('lodash');
const debug = require('debug')('app:server');

const app = express();
const port = 3000;

// Simple route with lodash to simulate an app function
app.get('/', (req, res) => {
    const message = lodash.repeat('Hello, World! ', 5); // Using lodash to repeat text
    debug(message); // Using debug to log to console
    res.send(message);
});

// Simulating a database connection with mongoose
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
