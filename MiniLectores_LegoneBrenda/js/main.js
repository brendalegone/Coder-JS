const contenedorCombos = document.querySelector("#contenedorCombos");



fetch("./js/packs.json")
    .then((resp) => resp.json())
    .then((data) => {
        packs = data;

        data.forEach((pack) => {

            const div = document.createElement("div");
            div.classList.add("pack");
            div.innerHTML = `
                <div class="contenedorImgPack">
                     <img class="imgPacks" src="${pack.img}" alt="pack1">
                </div>
                <h4>${pack.titulo}</h4>
                <p class="contenidoCaja">${pack.descripcion}</p>
                <p class="precioPack">${pack.precio}</p>
                <button class="botonLoQuiero" id="${pack.id}">¡LO QUIERO!</button>
            `;
    
            contenedorCombos.append(div);
    
        });

        let botonLoQuiero = document.querySelectorAll(".botonLoQuiero");

        botonLoQuiero.forEach((boton) => {
            boton.addEventListener("click", agregarAlCarrito);
    
        });

    });



const cantidadCarrito = document.querySelector(".cantidadCarrito");

let carrito;

const carritoLS = JSON.parse(localStorage.getItem("combosEnElCarrito"));

if (carritoLS) {
    carrito = carritoLS;
    actualizarNumeroCarrito();
} else {
    carrito = [];
}



function agregarAlCarrito(e) {

    const idBoton = e.currentTarget.id;
    const comboAgregado = packs.find(pack => pack.id === idBoton);
    
    if (carrito.some(pack => pack.id === idBoton)){
        const index = carrito.findIndex(pack => pack.id === idBoton);
        carrito[index].cantidad++;
    } else {
        comboAgregado.cantidad = 1;
        carrito.push(comboAgregado);
    }

    actualizarNumeroCarrito();

    localStorage.setItem("combosEnElCarrito", JSON.stringify(carrito));
}



function actualizarNumeroCarrito() {

    let nuevaCantidadCarrito = carrito.reduce((acc, pack) => acc + pack.cantidad, 0);
    cantidadCarrito.innerText = nuevaCantidadCarrito;

}