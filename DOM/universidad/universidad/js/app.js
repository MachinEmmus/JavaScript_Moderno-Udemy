// Eliminar de Local Storage
//localStorage.clear();

let element;

element = document.all;
element = document.all[10];
element = document.head;
element = document.body;
element = document.URL;
element = document.images;

let images = document.images;
let imagesArr = Array.from(images);

imagesArr.forEach(function(image){
    console.log(image)
})

//console.log(imagesArr);