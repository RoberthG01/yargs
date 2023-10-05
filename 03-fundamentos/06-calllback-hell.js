const empleados = [
    {
        id: 1,
        nombre: 'Rudy'
    },
    {
        id: 2,
        nombre: 'Roberto'
    },
    {
        id:3 ,
        nombre: 'Ramon'
    },
];

const salarios = [
    {
        id: 1,
        salario: 2000
    },
    {
        id: 2,
        salario: 1500
    },

];

const getEmpleado = ( id, callback ) => {
    const empleado = empleados.find( e => e.id === id)?.nombre

    if( empleado ){
        callback(null, empleado);
    }else{
        callback(`Empleado con id ${id} no existe`);
    }

}

const getSalario = (id, callback) => {
    const salario = salarios.find( s => s.id === id)?.salario

    if(salario){
        callback(null, salario)
    }else{
        callback(`No existe salario para el empleado con id ${id} `)
    }
    return salario;
}

id = 3

getEmpleado(id, (err, empleado) =>{
    if( err ){
        console.log('ERROR!!');
        return console.log(err);
    }

    getSalario(id, (err, salario) =>{
        if( err ){

            return console.log(err);
        }


        console.log('El empleado: ', empleado, 'tiene un salario de: ', salario);
    })
})
