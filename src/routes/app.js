const Meals = require("../models/Meals");

const express = require("express"),
path = require("path"),
app = express.Router()

const meals = require('./meals');
app.use("/meals", meals)


module.exports = app;