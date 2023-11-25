const middleware = require('./src/middlewares');
const express = require('express');
const connectDB = require('./src/db/connectDB');

const app = express();
const port = process.env.PORT || 2626;
const userRoutes = require('./src/routes/users');
middleware(app);

app.get('/', (req, res) => {
    res.send("VoiceVista server is Running bro");
});

app.use(userRoutes);

const main = async() => {
    await connectDB();
    app.listen(port, () => {
        console.log(`hello from port ${port}`);
    })
}

main();