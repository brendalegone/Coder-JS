

// array carrito
const carrito = [];

// obj productos
const packs = [
    {
        id: "combo1",
        img: "multimedia/pack1.png",
        titulo: "Combo Aviador",
        descripcion: "1 libro de lectura<br> + libro de actividades",
        precio: 8000,
    },
    {
        id: "combo2",
        img: "multimedia/pack2.png",
        titulo: "Combo Artista",
        descripcion: "2 libros de lectura",
        precio: 14000,
    },
    {
        id: "combo3",
        img: "multimedia/pack3.png",
        titulo: "Combo Astronauta",
        descripcion: "3 libros de lectura<br> + libro de actividades",
        precio: 18000,
    },
];

const contenedorCombos = document.querySelector("#contenedorCombos");


// funcion para recorrer el array de los packs
    packs.forEach((pack) => {

        const div = document.createElement("div");
        div.classList.add("pack");
        div.innerHTML = `
            <div class="contenedorImgPack">
                 <img class="imgPacks" src="${pack.img}" alt="pack1">
            </div>
            <h4>${producto.titulo}</h4>
            <p class="contenidoCaja">${pack.descripcion}</p>
            <p class="precioPack">${pack.precio}</p>
            <a class="botonLoQuiero" href="">¡LO QUIERO!</a>
        `;

        combos.append(div);

    });

