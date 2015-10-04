var express = require('express');
var router = express.Router();
//requerir mongoose
var mongoose= require('mongoose');
//requerir modelo usuario
var Usuario = require('../models/Usuario');



//GET
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



//POST crear un usuario nuevo
router.post('/', function(req, res, next) {

  var creaUsuario =req.body;
  var usuario = new Usuario(creaUsuario);


  usuario.save(function(err,creado){
    if(err){
      console.log(err);
      return res.json({ok:false,error:err});
    }
    res.json({ok:true,usuario:creado});
  });

});


module.exports = router;
