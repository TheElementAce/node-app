const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index-digital-creative.html'));
});

app.listen(5000, () => {
    console.log('App is listening on port 5000...');
});