//carrito
const carritoJS = JSON.parse(localStorage.getItem("combosEnElCarrito"));
let botonesEliminar = document.querySelectorAll(".eliminarProducto");
const cantidadCarrito = document.querySelector(".cantidadCarrito");

const contenedorCarritoCombos = document.querySelector("#contenedorCarritoCombos");

if (carritoJS.length > 0) {

    contenedorCarritoCombos.innerHTML = "";

    carritoJS.forEach(pack => {
        const div = document.createElement("div");
        div.classList.add("packEnCarrito");
        div.innerHTML = `
                <div class="contenedorImgPack">
                    <img class="imgPacks" src="../${pack.img}" alt="pack2">
                 </div>
                <h4>${pack.titulo}</h4>
                <p class="contenidoCaja">${pack.descripcion}</p>
                <p class="cantidadCombo">${pack.cantidad}</p>
                <p class="precioPack">${pack.precio * pack.cantidad}</p>
                <button class="botonEliminarPack" id="${pack.id}">X</button>
        `;

        contenedorCarritoCombos.append(div);

    })

} else {
    actualizarBotonesEliminar()
}


   

// array carrito


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

function actualizarBotonesEliminar() {
    botonesEliminar = document.querySelectorAll(".eliminarProducto");

    botonesEliminar.forEach((boton) => {
    boton.addEventListener("click", eliminarDelCarrito);

    });

}


function eliminarDelCarrito(e) {
    const idBoton = e.currentTarget.id;
    const index = carritoJS.findIndex(pack => pack.id === idBoton);
    carritoJS.splice(index, 1);
    agregarAlCarrito();
}