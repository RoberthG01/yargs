
const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hola Mundo, Soy Rudy')
})

app.listen(8080);

console.log('Escuchando el puerto', 8080);