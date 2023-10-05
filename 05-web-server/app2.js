const http = require('http')

http.createServer((req,res) => {

    console.log(req);

    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')

    res.writeHead(200, {'Content-Type': 'application/csv'})

    res.write('id, nombre\n')
    res.write('1, Rudy\n')
    res.write('2, Roberto\n')
    res.write('')

    const persona = {
        id: 1,
        nombre: 'Rudy'
    }

    res.write(JSON.stringify(persona));
    
    res.end();
})
.listen(8080)

console.log('Escuchando el puerto', 8080);

