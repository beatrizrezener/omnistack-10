const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('<connection_string>')

// body with json format, need to be before routes
app.use(express.json()); 
app.use(routes);

app.listen(3333);