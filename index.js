const middleware = require('./src/middlewares');
const express = require('express');
const connectDB = require('./src/db/connectDB');
const userRoutes = require('./src/routes/users');
const authRoutes = require('./src/routes/authentication');
const paymentRoutes = require('./src/routes/payments');
const surveyRoutes = require('./src/routes/surveys');

const app = express();
const port = process.env.PORT || 2626;
middleware(app);

app.get('/', (req, res) => {
    res.send("VoiceVista server is Running bro");
});

app.use(userRoutes, authRoutes, paymentRoutes, surveyRoutes);

const main = async() => {
    await connectDB();
    app.listen(port, () => {
        console.log(`hello from port ${port}`);
    })
}

main();