// Problemas con el var  - explique con este ejemplo
console.log('Trabajando con VAR');
var nombre = 'Bill'

if (true){
    nombre = 'Steve'
}

console.log(nombre);

//Implementaciones con let ES6 - Explique su ambito

console.log('Trabajando con LET');
let nombre2 = 'Rudy'

if(true){
    let nombre2 = 'Roberto'
    console.log(nombre2);
}

console.log(nombre2);

//Implementando de CONST - Explique su ambito
console.log('Uso de constantes');

const nombre3 = 'Roger'

if(true){
    const nombre3 = 'Emilio'
    console.log(nombre3);
}

console.log(nombre3);