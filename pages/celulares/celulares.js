let contenedor = document.getElementById("contenedor-productos");

let celulares = productos.filter(p => p.categoria === "celulares"); // ← agregá esto

celulares.forEach(producto => {  // ← cambiá productos por celulares
  contenedor.innerHTML += `
    <div class="card">
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <h2>${producto.nombre}</h2>
      <p>$${producto.precio}</p>
      <ul>
          <li>Camara: ${producto.camara}px</li>
          <li>Bateria: ${producto.baeteria}mah</li>
          <li>Mem Ram: ${producto.ram}gb</li>
          <li>Pantalla: ${producto.pantalla}hz</li>
      </ul>
      <button onclick='agregarAlCarrito(${JSON.stringify(producto)})'>Agregar al carrito</button>

    </div>
  `;
});
