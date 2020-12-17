//objeto Literal
const Producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

//objeto Contructor
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const product2 = new Producto('monitor 24 pulgadas', 500);
console.log(product2);

const product3 = new Producto('Television', 100);
console.log(product3);
