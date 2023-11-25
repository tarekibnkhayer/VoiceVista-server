const cors = require('cors');
const express = require('express');
const cookieParser = require('cookie-parser');
require("dotenv").config();

const middleware = (app) => {
    app.use(cors());
    app.use(express.json());
    app.use(cookieParser());
};

module.exports = middleware;