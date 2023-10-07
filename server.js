require('dotenv').config();

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const sendEmailApi = require('./api/sendEmail');

const app = express();
const PORT = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// To parse JSON bodies
app.use(bodyParser.json());

// Email sending endpoint
app.use('/api/sendEmail', sendEmailApi);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
