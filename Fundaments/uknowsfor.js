#!/usr/bin/node

const pendientes = ['Tares', 'Comer', 'Proyectos', 'Aprender', 'JavaScript'];

// forEach
pendientes.forEach( function(pendiente) {
    console.log(` ${pendiente} `)
});

const carrito = [
        {id: 1, producto: "Libro"},
        {id: 2, producto: "Camisa"},
        {id: 3, producto: "Piano"},
        {id: 4, producto: "Lapiz"},
];

const nameproduct = carrito.map(function(car){
    return car.producto;
});
console.log(nameproduct);

const automovil = {
    modelo: "camaro",
    motor: "6.1",
    anio: 1992,
    marca: "chevrolet"
}

console.log(automovil);

for( let auto in automovil){
    console.log(`${auto} : ${automovil[auto]}`);
}
