'use strict';

require('./db');
var mongoose = require('mongoose');
var readLine = require('readline');
var async = require('async');

//inicializar datos BD
function initDB() {

    var rl = readLine.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('¿Esta seguro que desea borrar la informacion de la base de datos? (no) ', function (answer) {
        rl.close();
        if (answer.toLowerCase() === 'si') {
            console.log('ejecuto acciones');
            //runInstallScript();
        } else {
            console.log('Instalación cancelada!');
            return process.exit(0);
        }
    });


}

initDB();
