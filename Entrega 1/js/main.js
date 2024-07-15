// funcion para el juego

function elegirPiedraPapelTijera() {

    const eleccionComputadora = piedra;

    let opcion1 = papel;
    let opcion2 = tijera;
    let ganaste = false;

    // ciclo
    while (ganaste === false) {
        const eleccionUsuario = prompt("Juguemos! Piedra, papel o tijera? Escribe tu respuesta");
    
        if (eleccionUsuario === opcion1) {
            alert("Muy bien! Ganaste");
            ganaste = true;
            elegirPiedraPapelTijera();
        } else if (eleccionUsuario === opcion2) {
            alert("Perdiste. Nueva ronda");
        } else {
            eleccionUsuario === eleccionComputadora
            alert("Empate. Intenta de nuevo");
        }
    }
}

elegirPiedraPapelTijera();
