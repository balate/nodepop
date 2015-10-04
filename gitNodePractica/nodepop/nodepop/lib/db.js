"use strict";

//requerir mongoose
var mongoose =require('mongoose');

//crear objeto
var db = mongoose.connection;

//handler de error
db.on('error', function(err){

    console.log(err);
    process.exit(1);
});


//handler de conexion
db.once('open',function(){
   console.log('conectado a db anuncios');
});

//conectamos
mongoose.connect('mongodb://localhost/anuncios');

