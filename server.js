//Cargando el modulo http
var http = require('http');
//Cargando la libreria colors
var colors = require('colors');
//Generando un tema
colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: ['yellow', 'bgWhite'],
    debug: 'blue',
    error: 'red',
    achivement: 'rainbow'
});

//Obteniendo configuraciones
var IP = 'localhost';
var PORT = 3000;
//Creando el servidor
var server = http.createServer(function (req, res) {
    res.writeHead(
        200,
        {
            'Content-Type': 'text/plain',
            'Server': 'Buho@0.0.0'
        }
    );
    res.write('Hola desde el server');
    res.end();
});

//Poniendo a escuchar el server
server.listen(PORT, IP, function () {
    console.log("> Server escuchando en" + `http://${IP}:${PORT}`.info);
});