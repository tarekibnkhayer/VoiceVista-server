const middleware = require('./src/middlewares');
const express = require('express');
const connectDB = require('./src/db/connectDB');

const app = express();
const port = process.env.PORT || 2626;
middleware(app);

app.get('/', (req, res) => {
    res.send("VoiceVista server is Running bro");
});

const main = async() => {
    await connectDB();
    app.listen(port, () => {
        console.log(`hello from port ${port}`);
    })
}

main();