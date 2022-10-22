let operaciones = require ("./operaciones");
let process = require('process');

//console.log(process.argv);

let operacion = process.argv[2].toLowerCase();
let numero1 = Number(process.argv[3]);
let numero2 = Number(process.argv[4]);
//console.log(operacion + " " + numero1 + " " +numero2);

if (operacion === "sumar"){
    let resultado = operaciones.sumar(numero1, numero2);
console.log( "El resultado de la operacion " + operacion + " es: " + resultado );  
}

if (operacion === "restar"){
    let resultado = operaciones.restar(numero1, numero2);
console.log( "El resultado de la operacion " + operacion + " es: " + resultado );  
}

if (operacion === "multiplicar"){
    let resultado = operaciones.multiplicar(numero1, numero2);
console.log( "El resultado de la operacion " + operacion + " es: " + resultado )
}

if (operacion === "dividir" ){
    let resultado = operaciones.dividir(numero1, numero2);
console.log( "El resultado de la operacion " + operacion + " es: " + resultado );  
}




/*let operaciones = require ("./operaciones");
console.log(operaciones.dividir (10,5)); */


/*let sumar = require ("./operaciones/sumar.js");
let restar = require ("./operaciones/restar.js");
let multiplicar = require ("./operaciones/multiplicar.js");
let dividir = require ("./operaciones/dividir.js");

console.log(sumar(2,2));
console.log(restar(2,2));
console.log(sumar(2,2));
console.log(multiplicar(0,2));
console.log(dividir(10,5));
console.log(dividir(10,0));*/ 

