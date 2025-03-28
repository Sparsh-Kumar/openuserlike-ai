
require('dotenv').config();

const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;


app.use(express.static(path.resolve(__dirname, 'assets')))

app.get('/', (req, res) => {
	return res.sendFile(path.resolve(__dirname, 'statics', 'index.html'));
})

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
