#!/usr/bin/node

// Creando un Objeto{Dictionary}

const persona = {
    nombre: "Emmus",
    apellido: "Monsalve",
    profesion: "Programador",
    edad: 19,
    musica: ["Rock", "Pop", "Reggaeton"],
    hogar: {
        ciudad: 'Medellin',
        pais: 'Colombia'
    },
    nacimiento: function(){
        return new Date().getFullYear() - this.edad
    }
}

console.log(persona.nacimiento());