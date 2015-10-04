"use strict";

//requerir mongoose
var mongoose= require('mongoose');



//define esquema de Usuario
var usuarioSchema = mongoose.Schema({

    nombre:String,
    email:String,
    clave:String

});



//exportar modelo
var Usuario = mongoose.model('Usuario',usuarioSchema);

module.exports = Usuario;
