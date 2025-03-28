require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 9090;

app.use(cors());

// Serve all static files in the 'dist' folder
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/loader', (req, res) => res.status(200).sendFile(path.resolve(__dirname, 'loader.js')));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
