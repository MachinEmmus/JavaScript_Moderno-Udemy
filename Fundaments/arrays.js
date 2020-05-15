#!/usr/bin/node
// crea un arreglo

const numbers = [1,2,3,4,5];
console.log(numbers);

// otra forma de crear arreglos
const meses = new Array('Julio', '27', 'Abril', '1');
console.log(meses);

console.log("El tamaño del array meses: " + meses.length);

let array = ['Febrero', 'Maarzo', 'Abril', 'Mayo'];
// metodos con arrays
console.log(array);
array[4] = "Junio";
console.log(array);
array.push("Julio");
console.log(array);
array.pop();
console.log(array);
array.unshift("Enero");
console.log(array);
array.shift()
console.log(array);
console.log(array.reverse());