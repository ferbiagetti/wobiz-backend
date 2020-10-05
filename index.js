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


app.post('/login', function (req, res) {
    let respuesta = {};
    usuario = {
        username: 'admin@gmail.com',
        password: 'admin1'
    };

    if( req.body.username !== usuario.username) {
        respuesta = {
            success:false,
            code: 108,
            message:"Wrong username"
        }
        res.status(401).send(respuesta);
        return;
    }
    if( req.body.password !== usuario.password ) {
        respuesta = {
            success:false,
            code:106,
            message:"Wrong password for user"
        }
        res.status(401).send(respuesta);
        return;
    }

    if( req.body.username === usuario.username && req.body.password === usuario.password ){
        respuesta = {
         codigo: 200,
         token: 'ba7c2cf6c55e3e382f2f48231aafc6b8725d723b',
         expires: '1567619449',
         user_id: '21432'
        };
        res.status(200).send(respuesta);
        return;
    }

    console.log('req', req.body)
    res.send(respuesta);
   });

   
   


app.listen(process.env.PORT || 5000, () => {
    console.log("El servidor está inicializado en el puerto 5000");
});