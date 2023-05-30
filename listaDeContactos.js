let listaDeContactos = [];


function agregarContacto(id, nombres, apellidos, telefono, ubicaciones){
      let contacto = {
    id: id,
    nombres: nombres,
    apellidos: apellidos,
    telefono: telefono,
    ubicaciones: ubicaciones,
  };
  listaDeContactos.push(contacto);
}




function borrarContacto(idContactoABorrar){
     let indiceContacto = -1;
    for (let i = 0; i < listaDeContactos.length; i++) {
        if (listaDeContactos[i].id === idContactoABorrar) {
        indiceContacto = i;
        break;
        }
    }

    if (indiceContacto !== -1) {
        listaDeContactos.splice(indiceContacto, 1);
    }
}


    
