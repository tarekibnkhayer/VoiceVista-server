const middleware = require('./src/middlewares');
const express = require('express');

const app = express();
const port = process.env.PORT || 2626;
middleware(app);

app.get('/', (req, res) => {
    res.send("VoiceVista server is Running bro");
});

app.listen(port, () => {
    console.log(`Hello from ${port}`);
})
