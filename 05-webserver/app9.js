
const express = require('express')
const app = express()
const port = 8080

app.use(express,static('public'))

app.get('/', function (req, res) {
    res.send('Home Page')
})

app.get('/02-hola-mundo', function (req, res) {
    res.send('Hola mundo en su respectiva ruta')
})

app.get('*', (req, res) => {
    res.sendFile(__dirname +'/05-web-server/public/404.html')
})

app.listen(port, () => {
    console.log(`Example app listening at http:localhost:${port}`);
})
