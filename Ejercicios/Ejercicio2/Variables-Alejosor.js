// 1. Definir 3 variables e imprimirlas en la consola una por una o concatenadas:
let nombre = "Alejandro";
let edad = 23;
let ciudad = "Chiclayo";

console.log(nombre);
console.log(edad);
console.log(ciudad);

console.log("Soy " + nombre + " tengo " + edad + " años y vivo en " + ciudad + ".");


// 2. Definir 5 variables y concatenarlas para mostrar una frase con sentido:
let sujeto = "El gato";
let verbo = "corre";
let adverbio = "rápidamente";
let lugar = "en mi casa";
let tiempo = "todas las mañanas";

let frase = sujeto + " " + verbo + " " + adverbio + " " + lugar + " " + tiempo + ".";
console.log(frase);

// 3. Definir 3 variables de un tipo y posteriormente cambiarlas a otro tipo de dato y mostrarlas formando una oración o mensaje:
let var1 = 10;
let var2 = 20;
let var3 = 30;

var1 = var1.toString();
var2 = var2.toString();
var3 = var3.toString();

let mensaje = "Los números convertidos a cadenas son: " + var1 + ", " + var2 + " y " + var3 + ".";
console.log(mensaje);
