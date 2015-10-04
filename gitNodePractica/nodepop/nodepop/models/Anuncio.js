"use strict";

//requerir mongoose
var mongoose= require('mongoose');

//define esquema de Anuncio
var anuncioSchema = mongoose.Schema({

    nombre:String,
    venta: Boolean,
    precio:Number,
    foto:String,
    tags:[String]

});

//Método estático para un modelo
anuncioSchema.statics.lista= function(criterios,cb){

    //uso .find() sin el callback para que me de un objeto sin ejecutar
  var query=Anuncio.find(criterios);

    //query.sort('nombre');

    query.exec(function (err,rows){

        if(err){
            return cb(err);
        }

        return cb(null,rows);
    });

};


//exportar modelo
var Anuncio = mongoose.model('Anuncio',anuncioSchema);

module.exports = Anuncio;