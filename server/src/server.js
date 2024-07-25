const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;
console.log('Current working directory:', process.cwd());


app.get('/', (req, res) => {
    res.send('Hello World!');
});

const server = app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
