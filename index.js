const express = require('express');
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

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
