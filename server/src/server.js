const express = require('express')
const app = express()

//в докере не нужно будет писать такой путь, файл будет лежать рядом
require('dotenv').config({ path: `${__dirname}/../../.env` })
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})