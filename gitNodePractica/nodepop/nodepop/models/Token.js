"use strict";

//requerir mongoose
var mongoose= require('mongoose');



//define esquema de Token
var tokenSchema = mongoose.Schema({

    plataforma:{type:String,enum:['ios','android']},
    token:String,
    usuario:String

});



//exportar modelo
var Token = mongoose.model('Token',tokenSchema);

module.exports = Token;
