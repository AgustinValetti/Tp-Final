

function cargarProductosCarrito() {
    let tabla = document.getElementById("tabla-carrito");
    let carrito = obtenerCarrito();
    let filas = tabla.querySelectorAll("tr");
    filas.forEach((fila, index) => {
        if (index !== 0) fila.remove();
    });

    let total = 0;

    carrito.forEach(producto => {
        let fila = document.createElement("tr");
        fila.innerHTML = `<td><img src="${producto.imagen}" alt="${producto.nombre}"> ${producto.nombre}</td>
                  <td>${producto.cantidad}</td>
                  <td>$${producto.precio}</td>`;
        tabla.appendChild(fila);

        total += producto.precio * producto.cantidad;
    });
    document.getElementById("valor-final").textContent = "El valor final a pagar es de: $" + total;
}

function limpiarCarrito() {
    localStorage.removeItem("carrito");
    alert("Carrito limpiado correctamente");
    cargarProductosCarrito();
}

window.addEventListener("DOMContentLoaded", () =>
{
    cargarProductosCarrito();
    document.querySelector(".btn-limpiar-carrito").addEventListener("click", limpiarCarrito);
});