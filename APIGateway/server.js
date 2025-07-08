const express = require('express');
const proxy = require('express-http-proxy');
const app = express();

app.use('/api/auth', proxy('http://localhost:8081'));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🌐 API Gateway en écoute sur http://localhost:${PORT}`);
});
