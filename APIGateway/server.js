require('dotenv').config();
const express = require('express');
const proxy = require('express-http-proxy');
const app = express();

// app.use('/api/auth', proxy('http://localhost:8081'));
app.use('/api/auth', proxy(process.env.AUTH_URL));

// const PORT = 3000;
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`🌐 API Gateway en écoute sur http://localhost:${PORT}`);
});
