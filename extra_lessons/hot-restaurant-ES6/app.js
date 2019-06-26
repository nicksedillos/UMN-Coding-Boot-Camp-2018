const path = require('path');
const express = require('express');
const createAPIRoutes = require('./routes');
const data = require('./data');

const app = express();

// Middleware
// ----------

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// NOTE urlencoded middleware is used so that jQuery.post works by default.
app.use(express.urlencoded({ extended: true }));

// API Routes
// ----------

app.use('/api', createAPIRoutes(data));

module.exports = app;
