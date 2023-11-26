const mongoose = require('mongoose');
require('dotenv').config();

const getConnectionString = () => {
    const connectionUrl = process.env.DB_URL;
    return connectionUrl;
};

const connectDB = async() => {
   try{
    console.log('connecting to DB');
    const mongoURI = getConnectionString();
    await mongoose.connect(mongoURI, {dbName: 'VoiceVista'});
    console.log('connected to DB');
   }catch(error){
    console.error('Error connecting to DB:', error);
    process.exit(1);
   }
};

module.exports = connectDB;
