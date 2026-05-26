let productos = [

      {
    id: 1,
    nombre: "Motorola G17",
    categoria: "celulares",
    precio: 366999,
    stock: 5,
    imagen : "/assets/celulares/g17-alaskan-blue.png",
    ram:8,
    pantalla:60,
    camara:48,
    baeteria:5000
  },
    {
    id: 2,
    nombre: "Motorola Razr 60 Ultra Madera",
    categoria: "celulares",
    precio: 2497999,
    stock: 3,
    imagen : "/assets/celulares/razr-60-ultra-madera.png",
    ram:10,
    pantalla:60,
    camara:24,
    baeteria:4500
  },
    {
    id: 3,
    nombre: "Motorola Signature Carbon",
    categoria: "celulares",
    precio: 2238999,
    stock: 12,
    imagen : "/assets/celulares/signature-carbon.png",
    ram:16,
    pantalla:120,
    camara:64,
    baeteria:6500
  },
    {
    id: 4,
    nombre: "Motorola Razr Midnight",
    categoria: "celulares",
    precio: 1649999,
    stock: 20,
    imagen : "/assets/celulares/moto-razr-midnightblue-50ultra-front-charger-only_4.png",
    ram:16,
    pantalla:120,
    camara:64,
    baeteria:7000
  },
    {
    id: 5,
    nombre: "Motorola Edge 50 Ultra",
    categoria: "celulares",
    precio: 1660999,
    stock: 20,
    imagen : "/assets/celulares/moto-edge-50-ultra-1_1.png",
    ram:12,
    pantalla:120,
    camara:48,
    baeteria:5500
  },
    {
    id: 6,
    nombre: "Motorola Edge 70 Fusion",
    categoria: "celulares",
    precio: 998999,
    stock: 10,
    imagen : "/assets/celulares/moto-edge-70-fusion-black-fifa-hero.png",
    ram:10,
    pantalla:120,
    camara:32,
    baeteria:5000
  },
    {
    id: 7,
    nombre: "Motorola G06 Tapestry",
    categoria: "celulares",
    precio: 275999,
    stock: 42,
    imagen : "/assets/celulares/moto-edge-70-fusion-black-fifa-hero.png",
    ram:4,
    pantalla:60,
    camara:20,
    baeteria:3500
  },
    {
    id: 8,
    nombre: "Motorola G67 Nile",
    categoria: "celulares",
    precio: 618999,
    stock: 10,
    imagen : "/assets/celulares/g06-tapestry_1.png",
    ram:8,
    pantalla:60,
    camara:48,
    baeteria:5000
  },
]

let contenedor = document.getElementById("contenedor-productos");


productos.forEach(producto => {

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
      

      <button>Agregar al carrito</button>

    </div>

  `;
});
