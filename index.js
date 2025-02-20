
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('This CI/CD made by Sachin kumar');
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});