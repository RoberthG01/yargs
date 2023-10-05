const http = require('http')

http.createServer((req,res) => {

    console.log(req);

    res.writeHead(200, {'Content-Type': 'application/json'})

    const persona = {
        id: 1,
        nombre: 'Rudy'
    }

    res.write(JSON.stringify(persona));
    
    res.end();
})
.listen(8080)

console.log('Escuchando el puerto', 8080);

