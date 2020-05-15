// hello world

let name = prompt('Cual es tu nombre?')
let age = prompt('Cual es tu edad?')

document.getElementById('app').innerHTML = `Hello World ${name} with ${age} yars old`;

// var let const
// var redeclarar un variable
var car = "Mercedez";
// let para valores que se pueden reescribir
let hi = "Syria";
// Const un valor que no puede cambiar
const value = "Valor constante" 
// Templates
const fov = 103,
    SPubg = 35,
    SValorant = 0.419,
    Mdpi = 800;

html = `<ul>
            <li>Estudiar JavaScript, Apis</li>
            <li>App en FLutter</li>
            <li> STYLE </li>
            <li> Aim training </li>
        </ul>
        <p>Mis Sensibilidades en fps son: </p>
        <ul>
            <li> Valorant: ${SValorant} </li>
            <li> Pubg: ${SPubg} </li>
            <li> Mi eDPI en Pubg: ${edpi(SPubg, Mdpi)}</li>
            <li> Mi eDPI en Valorant: ${edpi(SValorant, Mdpi)}</li>
        </ul>
        `;
 
function edpi(gameS, MSens){
    return gameS * MSens;
}        

document.getElementById('app').innerHTML = html;