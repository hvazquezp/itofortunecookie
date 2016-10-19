//cargando el modulo http
var http = require('http');

//creando el servidor
var server = http.createServer(function(req, res){
    res.writeHead(
        200,
        {
            'Content-Type' : 'text/plain',
            'Server' : 'Buho@0.0.0'
        }
    );
    res.write('Hola desde el server');
    res.end();
});

//Poniendo a escuchar el server
server.listen(3000, 'localhost', function(){
    console.log('> Server escuchando en: http://localhost:3000/ ...' );
});