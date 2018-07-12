'use strict'
//librerias o modulos
const argv = require('./config/yargs.js').argv;
const op = require('./multiplicar');
const colors = require('colors');
//constantes

//variables globales y objetos
let base = argv.base;
let limite = argv.limite;
let comando = argv._[0];

//funciones

//eventos
//console.log(comando);
console.log(comando);
//ejecuciones
switch(comando){
  case 'listado':
      op.mostrarLista(base,limite).then(archivo => {
      })
      .catch(e => console.log(e));
  break;
  case 'crear':
      op.multiplicacion(base,limite).then(archivo => {
        console.log(`el archivo ${archivo} se guardo con exito!`.green);
      })
      .catch(e => console.log(e));
  break;
  default:
      console.log(`comando ${comando} no reconocido`.red);

}
