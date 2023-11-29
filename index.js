require('dotenv').config()
const http = require('http');
const app = require('./app');
const connectDB = require('./src/db/connectDB');
const server = http.createServer(app);
const port = process.env.PORT || 2626;
const main = async() => {
    await connectDB();
    server.listen(port, () => {
        console.log(`server is listening on port ${port}`);
    })
};
main();
