// MomentJS
const diaHoy2 = new Date();
moment.locale('es');  
console.log(  moment().format('MMMM Do YYYY, h:mm:ss a', diaHoy2) );




console.log ( moment().add(3, 'days').calendar() );



console.log( moment().format('LLLL', diaHoy2) )