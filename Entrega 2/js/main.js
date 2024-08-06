

// array para almacenar los contactos
const contactos = [];


// funcion para agregar un contacto
function agregarContacto() {
    let nombre = prompt("Ingresá el nombre del contacto:").toLowerCase();
    let telefono = parseInt(prompt("Ingresá el número de teléfono del contacto:"));

    // crear objeto contacto
    let contacto = {
        nombre: nombre,
        telefono: telefono
    }
    
    // agregar contacto al array
    contactos.push(contacto);
    alert("Contacto " + nombre + " agregado exitosamente.");
}


// funcion para ver todos los contactos
function verContactos() {
    if (contactos.length === 0) {
        alert("No hay contactos en la lista.");
        return;
    }
    
    let listaContactos = "Lista de Contactos:\n";
    for (let i = 0; i < contactos.length; i++) {
        listaContactos += contactos[i].nombre + ": " + contactos[i].telefono + "\n";
    }
    alert(listaContactos);
}

// funcion para eliminar un contacto
function eliminarContacto() {
    let nombre = prompt("Introduce el nombre del contacto a eliminar:");
    
     // buscar un contacto en el array
     let indice = contactos.findIndex(contacto => contacto.nombre.toLowerCase() === nombre.toLowerCase());

     if (indice === -1) {
         alert("El contacto con el nombre " + nombre + " no se encontró.");
         return;
    } else {
            alert("El contacto con el nombre " + nombre + " se eliminó.");
    }
}

// funcion principal que controla el flujo del programa
function principal() {
    let opcion;
    do {
        opcion = prompt("Selecciona una opción:\n1. Agregar contacto\n2. Ver contactos\n3. Eliminar contacto\n4. Salir");
        
        switch (opcion) {
            case '1':
                agregarContacto();
                break;
            case '2':
                verContactos();
                break;
            case '3':
                eliminarContacto();
                break;
            case '4':
                alert("Saliendo de la aplicación.");
                break;
            default:
                alert("Opción no válida, intenta de nuevo.");
        }
    } while (opcion !== '4');
}

principal ();