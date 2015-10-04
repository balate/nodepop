"use strict";

var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

//comprueba cada peticion y verificar el token que nos da es valido
router.get('/',function(req,res,next){

    //coger el token que nos da el usuario
    var token = req.body.token ||
            req.query.token||
            req.headers['x-access-token'];

    if(token){
        jwt.verify(token,'lasuperclavedelusuario', function(err,decoded){
            if(err)
            {
                return res.status(401).json({ok:false,error:'token no valido'});
            }

            req.decoded=decoded;

            //Usuario autenticado y puede seguir por otros middleware
           next();
        });
    } else{
        return res.status(401).json({ok:false,error:'token requerido'});

    }
});




router.post ('/authenticate', function(req,res){

    var usuario = req.body.user;
    var email = req.body.email;
    var clave = req.body.clave;

    //buscar usuario en la bd
    //meter query de bd (PREGUNTAR)
    var found={email: "javi_ocon@yahoo.es",clave: "123456"};


    //usuario encontrado
    if(found.email != email && found.clave != clave){
        return res.status(401).json({ok:false,error:'Login incorrecto'});
    };

    //crea un token
    var token= jwt.sign(found,'lasuperclavedelusuario',{

        expireInMinutes: 60 * 24 * 30

    });

    res.json({ok:true,token:token});
});


//GET
router.get('/', function(req, res, next) {

console.log('decoded',req.decoded);

    res.send('Te has logueado');
});





module.exports = router;
