//Explicacion de callbacks
setTimeout(function(){
    console.log('Hola mundo');
}, 3000)

//EL problema de esta funcion es que ejecuta todo en l funcion
//Por ejemplo el control de despliegue del tiempo del mensaje deberia ser
//fuera de la funcion
const getUsusuarioById = (id) => {
    const usuario = {
        id,
        nombre: 'Rudy'
    }
    setTimeout(()=>{
        console.log(usuario);
    }, 1500 )
}


getUsusuarioById(82);
//Aca no se esta enviando como argumento otra funcion pero no se esta ejecutando
getUsusuarioById(200, () => {
    console.log('Hola mundo desde getUsuarioById');
})

//aplicando Callback
const getUsusuarioById2 = (id, callback) => {
    const user = {
        id,
        nombre: 'Rudy'
    }
    setTimeout(()=>{
        console.log('Hola mundo desde getUsuarioByID2');
    }, 1500)
    //Agregando como argumento el usuario
    getUsusuarioById2(650, (usuario) =>{
        console.log('Hola mundo desde getUsuarioByID2');   
        console.log(usuario.id);
        console.log(usuario.nombre.toUpperCase);
    })
}