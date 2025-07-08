const mongoose = require('mongoose');
require("dotenv").config();

const connectDB = () => {
  mongoose.connect(process.env.MONGO_URI, {ssl: process.env.MONGO_SSL})
  .then(() => console.log("Connexion à MongoDB réussie"))
  .catch((err) => {
    console.error("Erreur MongoDB :", err);
    process.exit(1);
  });
};

module.exports = connectDB;
