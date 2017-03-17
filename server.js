const express = require('express');
const path = require('path');

var app = express();



/* Log the server status to the console */
console.log('Happy block live on port http://localhost:3000!')

/* Expose our application instance */
module.exports = app;
