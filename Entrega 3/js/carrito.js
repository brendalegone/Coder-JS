//carrito
const carritoJS = JSON.parse(localStorage.getItem("combosEnElCarrito"));


const contenedorCarritoCombos = document.querySelector("#contenedorCarritoCombos");

if (carritoJS.length > 0) {

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
                <button class="eliminarProducto" id="${pack.id}">X</button>
        `;

        contenedorCarritoCombos.append(div);

    });
   
}
