#!/usr/bin/node

const autos = [
    {modelo: 'Mustang', motor: 6.2},
    {modelo: 'Camaro', motor:6.1},
    {modelo: 'challenger', motor:6.3},
];

autos[0].modelo = "Audi";

for(let i = 0; i < autos.length; i++ ){
    console.log(autos[i].modelo + " " + " " + autos[i].motor);
}
