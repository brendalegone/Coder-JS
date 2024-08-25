
// obj productos
const packs = [
    {
        id: "combo1",
        img: "multimedia/pack1.png",
        titulo: "Combo<br>Aviador",
        descripcion: "1 libro de lectura<br> + libro de actividades",
        precio: 8000,
    },
    {
        id: "combo2",
        img: "multimedia/pack2.png",
        titulo: "Combo<br>Artista",
        descripcion: "2 libros de lectura",
        precio: 14000,
    },
    {
        id: "combo3",
        img: "multimedia/pack3.png",
        titulo: "Combo<br>Astronauta",
        descripcion: "3 libros de lectura<br> + libro de actividades",
        precio: 18000,
    },
];

const contenedorCombos = document.querySelector("#contenedorCombos");


// funcion para recorrer el array de los packs
function cargarCombos() {

    contenedorCombos.innerHTML = "";

    packs.forEach((pack) => {

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
}
    
cargarCombos();


let botonLoQuiero = document.querySelectorAll(".botonLoQuiero");

botonLoQuiero.forEach((boton) => {
    boton.addEventListener("click", agregarAlCarrito);

});


// array carrito

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
