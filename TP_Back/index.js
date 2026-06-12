import express from "express";
import enviroments from "./src/api/config/enviroments.js"
import connection from "./src/api/database/db.js"; // Importamos la conexion de nuestra BBDD



const app = express();
const PORT = enviroments.port;

app.get("/", (req, res) => {
    res.send("techStore");
});

app.listen(3000, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});


app.get("/api/products", async (req, res) => { // Nuestra app atenderá peticiones get a la url /products
    try {
        const [rows] = await connection.query("SELECT * FROM products"); // Le pasamos la siguiente consulta SQL
        res.status(200).json({ // La respuesta que nos proporciona el objeto res devolverá el JSON
            payload: rows
        });

    } catch (error) {
        console.error("Error obteniendo productos: ", error.message)
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});


let contenedorProductos = document.querySelector(".contenedor-productos");

async function mostrarProductos() {
    try {
        let respuesta = await fetch("http://localhost:3000/api/products");
        let formato = await respuesta.json();
        let productos = formato.payload;

        renderizarProductos(productos);

    } catch(error) {
        console.error(error);
    }
}

function renderizarProductos(array) {
    let htmlProducto = "";

    array.forEach(producto => {
        htmlProducto += `
            <div class="card-producto">
                <img src="${producto.image}" alt="${producto.name}">
                <h3>${producto.name}</h3>
                <p>Id: ${producto.id}</p>
                <p>$${producto.price}</p>
            </div>
        `;
    });
    
    contenedorProductos.innerHTML = htmlProducto;
}