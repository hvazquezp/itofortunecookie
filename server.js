// Cargando el modulo http
var http = require('http');
// Cargando libreri path
var path = require('path');
// Cargando la libreria colors
var colors = require('colors');
var fs = require('fs');
// Generando un tema
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
// Obteniendo configruaciones
var config = require('./config/config');
var IP = 'localhost';
var PORT = 3000;

var counter = 0;
// Creando el server
var server = http.createServer(function(req,res){
    var urlPath = req.url;
    console.log(`> URL solicitada: ${urlPath}`.silly);
    if(urlPath == '/'){
        urlPath = path.resolve('./static/index.html');    
        //res.end(`> Se sirve esta ${urlPath}`);   
    }else{
        urlPath = path.resolve('./static' + urlPath);
        //res.end(`> Se sirve ${urlPath}`);
    }
    var extname = path.extname(urlPath);
    //res.end(`> Extension a servir: ${extname}`);
    //seleccionar el content type con base en el extname
    var contentType = 'text/plain';
    switch(extname){
        case '.js' : 
            contentType = 'text/javascript'
            break;
        case '.css' : 
            contentType = 'text/css'
            break;
        case '.html' :
            contentType = 'text/html'
    }
    fs.exists(urlPath, function(exists){
        if(!exists){
            //No existe
            res.writeHead(404, {
                'Content-Type' : 'text/html'
            });
            res.end('<h1>404 NOT FOUND</h1>');
        }
        else {
            //Si existe
            //Leemos le archivo y lo servimos
            fs.readFile(urlPath, function(err, content){
                if(err){
                    res.writeHead(500, {
                        'Content-Type' : 'text/html'
                    });
                    res.end('<h1 style="color : red"> 500 ERROR!</h1>');
                }
                else{
                    res.writeHead(200, {
                        'Content-Type' : contentType
                    });
                    res.end(content);
                }
            });
            //res.end(`<h1>${urlPath}  Existe </h1></br>`);
        }
    });
});
// Poniendo a escuchar
// al server
server.listen(PORT,IP,function(){
    console.log("> Server escuchando en ".info +
    `http://${IP}:${PORT}/ ...`.info);
});