const http = require('http');

http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'David',
            edad: 42,
            url: req.url
        }
        res.write(JSON.stringify(salida));
        // res.write('Hola mundo');
        res.end();

    })
    .listen(8080);

console.log('Escuchado el puerto 8080');