const express = require("express");
const bodyParser = require('body-parser');


const app = express();
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/login', function (req, res) {
    let respuesta = {};
    usuario = {
        username: 'admin@gmail.com',
        password: 'admin'
    };
    if(!req.query.username || req.query.username === '' || !req.query.password || req.query.password === '') {
     respuesta = {
      error: true,
      codigo: 204,
      mensaje: 'No existe usuario con esas credenciales.'
     };
    }
    if( req.query.email === usuario.username && req.query.password === usuario.password ){
     respuesta = {
      error: false,
      codigo: 200,
      mensaje: 'respuesta del usuario',
      respuesta: usuario
     };
    }else {
     respuesta = {
      error: true,
      codigo: 204,
      mensaje: 'No existe usuario con esas credenciales.'
     };
    }
    console.log('req', req.query)
    res.send(respuesta);
   });
   


app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});