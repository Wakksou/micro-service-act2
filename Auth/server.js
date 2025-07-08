const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/', authRoutes);

// Connexion MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connexion à MongoDB réussie");
}).catch(err => {
  console.error("Erreur MongoDB :", err);
});

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Auth service en écoute sur le port ${PORT}`);
});
