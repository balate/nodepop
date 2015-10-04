

var express = require('express');
var router = express.Router();

var mongoose= require('mongoose');

var Anuncio = mongoose.model('Anuncio');

//requeir de nuestro modelo
//var Anuncio = require('../models/Anuncio');

//Crea un anuncio /GET/agentes
router.get('/', function(req, res, next) {

    var anuncio = new Anuncio({nombre:'Ipad',venta:true, precio:180, foto:null, tags:["lifestyle","tablet"]});

    anuncio.save(function(err,creado){
        if(err){
            console.log(err);
            return next(err);
        }
        console.log(creado);
    });

    res.send(anuncio);
});


module.exports = router;