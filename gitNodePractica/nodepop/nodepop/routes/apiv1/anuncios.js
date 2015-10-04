"use strict";

var express = require('express');
var router = express.Router();

var mongoose= require('mongoose');

var Anuncio = mongoose.model('Anuncio');

//requeir de nuestro modelo
//var Anuncio = require('../models/Anuncio');



//GET/anuncios listar anuncios
router.get('/', function(req, res) {

    Anuncio.lista({},function(err,lista){

        if(err) {
            console.log(err);
            return res.json({ok:true,error:err});
        }

        res.json({ok:true,data:lista});

    });

});


//POST crear un anuncio nuevo
router.post('/', function(req, res, next) {

    var nuevAnuncio =req.body;
    //var anuncio = new Anuncio({nombre:'Ipad2',venta:true, precio:180, foto:null, tags:["lifestyle","tablet"]});

    var anuncio = new Anuncio(nuevAnuncio);


    anuncio.save(function(err,creado){
        if(err){
            console.log(err);
            return res.json({ok:false,error:err});
        }
        res.json({ok:true,anuncio:creado});
    });

});



module.exports = router;
