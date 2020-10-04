const express = require("express");
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/user', function (req, res) {
    let respuesta = {};
    usuario = {
        email: 'admin@gmail.com',
        password: 'admin'
    };
    if(!req.query.email || req.query.email === '' || !req.query.password || req.query.password === '') {
     respuesta = {
      error: true,
      codigo: 204,
      mensaje: 'No existe usuario con esas credenciales.'
     };
    } else {
     respuesta = {
      error: false,
      codigo: 200,
      mensaje: 'respuesta del usuario',
      respuesta: usuario
     };
    }
    console.log('req', req.query)
    res.send(respuesta);
   });
   


app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});