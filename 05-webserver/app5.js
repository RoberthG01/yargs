
const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hola Mundo')
})

app.get('/02-hola-mundo', function (req, res) {
    res.send('Hola mundo en su respectiva ruta')
})

app.listen(8080);
