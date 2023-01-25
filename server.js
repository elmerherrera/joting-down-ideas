const express = require('express')
const app = express()

const port = process.env.PORT || 5001

app.use(express.static('public'))
app.use(express.static('db'))

app.get 