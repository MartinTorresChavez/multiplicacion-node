const opts = {
  base:{
    demand: true,
    alias: 'b'
  },
  limite:{
    default: 10,
    alias: 'l'
  }
};

const argv = require('yargs')

          .command('listado','imprimir en consola la lista de multiplicacion con base y limite seleccionado',
          opts)
          .command('crear','crear documento .txt con la lista de multiplicar con base y limite seleccionados',
          opts)
          .help('base: el numero a multiplicar, limite: el numero de veces a multiplicar')
          .argv


module.exports = {
  argv
};
