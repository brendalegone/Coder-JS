
const carritoJS = JSON.parse(localStorage.getItem("combosEnElCarrito"));
const cantidadCarrito = document.querySelector(".cantidadCarrito");
const contenedorCarritoCombos = document.querySelector("#contenedorCarritoCombos");
let carrito;



if (carritoJS) {
    carrito = carritoJS;
    actualizarCarrito();

} else {
    carrito = [];
    contenedorCarritoCombos.innerHTML = `<p>Tu carrito está vacío.</p>`;
}



function actualizarNumeroCarrito() {

    let nuevaCantidadCarrito = carrito.reduce((acc, pack) => acc + pack.cantidad, 0);
    cantidadCarrito.innerText = nuevaCantidadCarrito;

}



function actualizarCarrito() {
    contenedorCarritoCombos.innerHTML = "";

    if (carrito.length > 0) {

        carrito.forEach(pack => {
            const div = document.createElement("div");
            div.classList.add("packEnCarrito");
            div.innerHTML = `
                <div class="contenedorImgPack">
                    <img class="imgPacks" src="../${pack.img}" alt="pack">
                </div>
                <h4>${pack.titulo}</h4>
                <p class="contenidoCaja">${pack.descripcion}</p>
                <p class="cantidadCombo">Cantidad: ${pack.cantidad}</p>
                <p class="precioPack">Total: $ ${pack.precio * pack.cantidad}</p>
                <button class="botonEliminarPack" id="${pack.id}">X</button>
            `;
            contenedorCarritoCombos.append(div);

            div.querySelector(".botonEliminarPack").addEventListener("click", eliminarDelCarrito);

            actualizarNumeroCarrito();
        });
        
    } else {
        contenedorCarritoCombos.innerHTML = "<p>Tu carrito está vacío.</p>";
    }
    
    actualizarTotal();

}



function eliminarDelCarrito(e) {

    const idBoton = e.target.id;
    carrito = carrito.filter(pack => pack.id !== idBoton);
    
    localStorage.setItem("combosEnElCarrito", JSON.stringify(carrito));

    actualizarCarrito();

}



const botonVaciarCarrito = document.querySelector(".botonVaciarCarrito");

botonVaciarCarrito.addEventListener("click", () => {

    if(carrito.length > 0 || carritoJS.length > 0) {

      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
      });
      swalWithBootstrapButtons.fire({
        title: "¿VACIAMOS EL CARRITO?",
        text: "¡No pierdas la magia de tus seleccionados!",
        showCancelButton: true,
        confirmButtonText: "SI, VACIAR",
        cancelButtonText: "NO VACIAR",
        reverseButtons: true,
        color: "#626262",
            customClass: {
              cancelButton: "botonCancelar",
              confirmButton: "botonOk",
              title: "titulo",
            },

      }).then((result) => {
        if (result.isConfirmed) {
            carrito = [];
            localStorage.setItem("combosEnElCarrito", JSON.stringify(carrito));
            actualizarCarrito();
            actualizarNumeroCarrito();

          swalWithBootstrapButtons.fire({
            title: "LISTO!",
            text: "Eliminamos tus seleccionados para que el eligas el pack perfecto",
            color: "#626262",
            customClass: {
              confirmButton: "botonOk",
              title: "titulo",
            },
          });

        } else if (
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "TRANQUI!",
            text: "Tus seleccionados están a salvo :)",
            color: "#626262",
            customClass: {
              confirmButton: "botonOk",
              title: "titulo",
            },
          });
        }
      });
    }
});  



const botonComprar = document.querySelector(".botonComprar");

botonComprar.addEventListener("click", () => {

    if(carrito.length > 0 || carritoJS.length > 0) {
        Swal.fire({
            title: "COMPRA EXITOSA!",
            text: "En unos días tus seleccionados llegarán a la puerta de tu hogar para disfrutar de toda su magia",
            width: 600,
            padding: "3em",
            color: "#626262",
            confirmButtonText: "FINALIZAR",
            customClass: {
              confirmButton: "botonOk",
              title: "titulo",
            },
          });
    } else {
        Swal.fire({
            title: "TU CARRITO ESTA VACIO",
            text: "Seleccioná tus packs favoritos!",
            color: "#626262",
            customClass: {
              confirmButton: "botonOk",
              title: "titulo",
            },
          });
    }

});



function actualizarTotal() {

    const total = carrito.reduce((acc, pack) => acc + (pack.precio * pack.cantidad), 0);
    document.querySelector(".totalAPagar p").innerText = `Total a pagar: $${total}`;
}
