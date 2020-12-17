// Veamos la diferencia entre un método y una función...
const numero1 = 20;
const numero2 = "20";


// Aunque en realidad terminan siendo practicamente lo mismo, la forma en que se utilizan tiene que ver más que nada en el contexto que son utilizadas..

console.log( parseInt(numero2) ); // Esto es una función

const numero3 = numero1.toString();

console.log(typeof(numero3)); // Esto es un método

console.log(typeof(numero1));

// Puedes ver que mientras la función toma el valor en el parentesis, el método añade un punto seguido del nombre, esa seria la diferencia

// hora ese valor que se pasa en el parentesis, se llaman argumentos de la función, veamos como crear funciones que toman argumentos y parametros.
