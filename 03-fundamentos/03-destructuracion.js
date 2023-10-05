//Objeto sin refactorizar
const batman = {
    nombre: 'Bruce',
    apellido: 'Wane',
    poder: 'Tecnologia',
    getNombre: function(){
        return `${this.nombre} ${this.apellido} ${this.poder}`;
    }
}

//Objetivo refactorizado
const batman2 ={
    nombre: 'Bruce',
    apellido: 'Wane',
    poder: 'Tecnologia',
    getNombre(){
        return `${this.nombre} ${this.apellido} ${this.poder}`;
    }
}
console.log('sin destruccion');
const nombre2 = batman2.nombre;
const apellido2 = batman2.apellido;
const poder2 = batman2.poder;

console.log(nombre2, apellido2, poder2);

//aplicando destruccion
console.log('Con destruccion');
const {nombre, apellido, poder, edad = 40} = batman2;
console.log(nombre, apellido, poder, edad);


const heroes = ['Spiderman', 'Superman', 'Batman']
//const h1 = heroes[0]
//const h2 = heroes[2]
//const h3 = heroes[3]
console.log('destructuracionand de ARREGLOS');
const [h1, h2, h3] = heroes;
console.log(h1, h2, h3);