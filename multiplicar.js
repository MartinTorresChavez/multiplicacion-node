'use strict'
const fs = require('fs');
const colors = require('colors');

let mostrarLista = function(base_,limite_){
  return new Promise((resolve,reject) => {
  let resultado = '';
  if(!Number(base_)){
      reject('');}
    else{
      for(let i = 0; i<=limite_; i++)
      {
        resultado = resultado + `\n${base_} x ${i} = ${base_*i}`;
      }
      console.log(`la tabla de base ${base_} y limite ${limite_} es:`.green)
      console.log(resultado);
    }
  })}

let multiplicacion = function(base_,limite_){

    return new Promise((resolve,reject) => {
      let resultado = '';
      let base = base_;
      let tabla_nombre = `tablas/tabla-${base} al ${limite_}.txt`;

      if(!Number(base)){
        reject('');}
      else{
          for(let i = 0; i<=limite_; i++)
          {
            resultado = resultado + `\n${base} x ${i} = ${base*i}`;
          }
          fs.writeFile(tabla_nombre,resultado, (err) => {
            if (err) reject(err);
            resolve(tabla_nombre);
          });
      }
    });
}

module.exports = {
  multiplicacion,
  mostrarLista
}
