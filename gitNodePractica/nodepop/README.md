** NODEPOP **

 * Instrucciones de como usar Nodepop *

 ** MODOS DE ARRANQUE **
 - Para arrancar nodepop en modo *DEBUG* basta con lanzar ** npm run dev **
 - Para arrancar nodepop en modo Producción habrá que comprobar antes en la
 ruta nodepop/nodepop/bin/www el puerto antes deseamos arrancar. Una vez echo esto con
 ejecuntando **npm start** arrancaremos en modo producción.

 ** Inicializar la BD **

 - Desde el servidor de BD navegar por consola hasta la ruta donde se encuentre la carpeta data de mongodb
 ejecutar script ** . /startMongo.sh ** para *inicializar* la base de datos de nodepop

** Para cargar un anuncio de ejemplo**

- nodepod trae un anuncio para cargar por defecto en mongoose llamar desde
el navegador http://direcion:PORT/anuncios, ejemplo ** http://localhost:3000/anuncios**


** Inicializar datos de la BD con Script de carga ** 

Para inicializar la bd existe la opción borrar los datos de la bd se crea script en ela ruta /lib/inastalBD (// FALTA COMPLETAR CON QUERY)

** Crear Usuario **

con POST http://server:port/users con una herramienta como postman agregaremos usuarios 

