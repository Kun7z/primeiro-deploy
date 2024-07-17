const dotenv = require("dotenv").config();
const express = require('express')
const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    return res.json('api ok - GITHUB')
})

app.listen(process.env.PORT);