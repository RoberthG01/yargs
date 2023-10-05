
const { crearArchivo} = require('./helpers/multiplicar3');

console.clear();




const [, , arg3 = 'base=3'] = process.argv;
const [ , base=3] = arg3.split('=')


crearArchivo(base)
.then(nombreArchivo => console.log(nombreArchivo, 'creado'))
.catch(err => console.log(err))