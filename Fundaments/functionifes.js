#!/usr/bin/node

(function(){
    console.log("Creando una IIFE");
})();

(function (tecno){
    console.log(`El Lenguage es ${tecno}`);
})("JavaScript");
