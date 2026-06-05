
      // <ul>
      //     <li>Camara: ${producto.camara}px</li>
      //     <li>Bateria: ${producto.baeteria}mah</li>
      //     <li>Mem Ram: ${producto.ram}gb</li>
      //     <li>Pantalla: ${producto.pantalla}hz</li>
      // </ul>

let contenedor = document.getElementById("contenedor-productos-auriculares");

let auriculares = productos.filter(p => p.categoria === "auriculares");

auriculares.forEach(producto => {
  contenedor.innerHTML += `
    <div class="card">
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <h2>${producto.nombre}</h2>
      <p>$${producto.precio}</p>
      <ul>
            <li>Conectividad: ${producto.conectividad}</li>
            <li>Microfonos: ${producto.microfonos}</li>
            <li>Duarabilidad: ${producto.durabilidad}</li>
            <li>Carga rapida: ${producto.carga}</li>
            <li>Bateria: ${producto.bateria}Hs</li>
      </ul>
      <button onclick='agregarAlCarrito(${JSON.stringify(producto)})'>Agregar al carrito</button>
    </div>
  `;
});

//     <div class="card">
//       <img src="${producto.imagen}" alt="${producto.nombre}">
//       <h2>${producto.nombre}</h2>
//       <p>$${producto.precio}</p>
//       <ul>
//           <li>Camara: ${producto.camara}px</li>
//           <li>Bateria: ${producto.baeteria}mah</li>
//           <li>Mem Ram: ${producto.ram}gb</li>
//           <li>Pantalla: ${producto.pantalla}hz</li>
//       </ul>
//       <button>Agregar al carrito</button>
//     </div>