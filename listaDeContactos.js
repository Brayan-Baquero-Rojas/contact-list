let listaDeContactos = ['Tatiana Buitrago', 'Camilo Velez', 'Arnol Rodriguez', 'Fredy Vega' ];

// función para añadir un nuevo contacto a una lista
function agregarContacto(nombreDelContacto){
    listaDeContactos.push(nombreDelContacto); 
}

//función para borrar un contacto existente de la lista

function borrarContacto(contactoABorrar){
    let indiceContacto = listaDeContactos.indexOf(contactoABorrar);
    listaDeContactos.splice(indiceContacto, 1);
}

// función para imprimir en consola los contactos presentes en la lista
function imprimirContactos(){
    console.log(`Lista de Contactos`)
    for(let i = 0; i < (listaDeContactos.length); i++){
        console.log(listaDeContactos[i]);
    }
}

// Prueba de la funcion para añadir un nuevo contacto a una lista
agregarContacto('Camilo Prada');


//prueba de la Función para imprimir en consola los contactos presentes en la lista
    imprimirContactos()



//Prueba DE la función para borrar un contacto existente de la lista
//borrarContacto('Tatiana Buitrago');
