const readline = require("readline-sync");

const productos = [
 { id: 1, nombre: "Mouse", categoria: "Periférico", precio: 50000, stock: 10, ventas: 12 },
 { id: 2, nombre: "Teclado", categoria: "Periférico", precio: 120000, stock: 5, ventas: 7 },
 { id: 3, nombre: "Monitor", categoria: "Pantalla", precio: 800000, stock: 2, ventas: 4 },
 { id: 4, nombre: "USB", categoria: "Accesorio", precio: 30000, stock: 0, ventas: 15 },
 { id: 5, nombre: "Diadema", categoria: "Audio", precio: 90000, stock: 8, ventas: 6 }
];           

productos.map(p => ({ ...p, nombre: p.nombre.toUpperCase() }));
productos.sort((a, b) => a.nombre.localeCompare(b.nombre));
console.log("Productos ordenados por nombre:");
productos.forEach(producto => console.log(`${producto.nombre} - Precio: ${producto.precio} - Stock: ${producto.stock} - Ventas: ${producto.ventas}`));

 const stock= productos.filter(producto => producto.stock < 5);
 console.log("\nProductos en stock:");
 stock.forEach(producto => console.log(`${producto.nombre} - Precio: ${producto.precio} - Stock: ${producto.stock} - Ventas: ${producto.ventas}`));
 
 const productosagotados = productos.filter(producto => producto.stock === 0);
 console.log("\nProductos agotados:");
 productosagotados.forEach(producto => console.log(`${producto.nombre} - Precio: ${producto.precio} - Stock: ${producto.stock} - Ventas: ${producto.    ventas  }`));

const lista = productos.map(producto => `${producto.nombre} - Precio: ${producto.precio} `);
console.log("\nLista de productos:");
lista.forEach(item => console.log(item));

valortotalinventario = productos.reduce((acc, producto) => acc + (producto.precio * producto.stock), 0);
console.log(`Valor total del inventario: ${valortotalinventario}`);

totalventasacumuladas = productos.reduce((acc, producto) => acc + (producto.precio * producto.ventas), 0);
console.log(`Valor total de ventas acumuladas: ${totalventasacumuladas}`);

productos.sort((a, b) => b.ventas - a.ventas);
console.log("\nProductos ordenados por ventas (de mayor a menor):");
productos.forEach(producto => console.log(`${producto.nombre} - Precio: ${producto.precio} - Stock: ${producto.stock} - Ventas: ${producto.ventas}`));

productos.sort((a, b) => a.precio - b.precio);
console.log("\nProductos ordenados por precio (de menor a mayor):");
productos.forEach(producto => console.log(`${producto.nombre} - Precio: ${producto.precio} - Stock: ${producto.stock} - Ventas: ${producto.ventas}`));

const producto = productos.find(p => p.nombre === "Monitor");
console.log("\nProducto encontrado:");

productosagotados=productos.some (producto => producto.stock === 0);
console.log(`productos agotados: ${productosagotados}`);

productosconstock = productos.every(producto => producto.stock > 0);
console.log(` productos con stock: ${productosconstock}`);

const precio = 900000;
let mensaje = "";

switch (true) {
  case (precio >= 1 && precio <=10000):
    mensaje = "Económico";  
    break;
    case (precio >= 50000 && precio < 200000):
    mensaje = "Moderado";
    break;
    case (precio >= 200000 && precio < 500000):
    mensaje = "Costoso";
    break;
    case (precio >= 500000):
    mensaje = "Lujoso";
    break;
    default:
    mensaje = "Precio fuera de rango";
}

console.log(`El producto con precio ${precio} es considerado: ${mensaje}`);
let menu = "Bienvenido al sistema de gestión de tienda";
let opción = ""; 

while (opción !== "5") {
  console.log("\nMenú de opciones:");
  console.log("1. Ver productos ordenados por nombre");
  console.log("2. Ver productos en stock");
  console.log("3. Ver productos agotados");
  console.log("4. Ver valor total del inventario");
  console.log("5. Salir");
    opción = readline.question("Seleccione una opción: ");
    switch (opción) {
        case "1":
            console.log("\nProductos ordenados por nombre:");
            productos.forEach(producto => console.log(`${producto.nombre} - Precio: ${producto.precio} - Stock: ${producto.stock} - Ventas: ${producto.ventas}`));
            break;
        case "2":
            console.log("\nProductos en stock:");
            stock.forEach(producto => console.log(`${producto.nombre} - Precio: ${producto.precio} - Stock: ${producto.stock} - Ventas: ${producto.ventas}`));
            break;
        case "3":
            console.log("\nProductos agotados:");
            productosagotados.forEach(producto => console.log(`${producto.nombre} - Precio: ${producto.precio} - Stock: ${producto.stock} - Ventas: ${producto.ventas}`));
            break;
        case "4":
            console.log(`Valor total del inventario: ${valortotalinventario}`);
            break;
        case "5":
            console.log("Saliendo del sistema. ¡Hasta luego!");
            break;
        default:
            console.log("Opción no válida. Por favor, seleccione una opción del 1 al 5.");
    }
}