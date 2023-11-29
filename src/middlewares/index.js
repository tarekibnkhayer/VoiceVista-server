const cors = require('cors');
const express = require('express');
const cookieParser = require('cookie-parser');
require("dotenv").config();

const middleware = (app) => {
    app.use(cors(
        {
            origin: ['https://voicevista-a2040.web.app','http://localhost:5173'],
            credentials: true
        }
    ));
    app.use(express.json());
    app.use(cookieParser());
};

module.exports = middleware;