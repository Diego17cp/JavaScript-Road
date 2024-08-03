// Sección 2 - Clase 1
// Dejamos atrás lo más básico del lenguaje y nos adentramos en otros temas un poco más complejos en esta segunda sección.
------------------------------------------------------------------------------------
// Arrays
------------------------------------------------------------------------------------
/*Como ya sabemos, una variable puede contener UN dato de tipo primitivo, pero un array es un objeto que contiene muchos datos y no se limitia a guardar un solo dato, pueden ser muchos datos y de distintos tipos.*/
------------------------------------------------------------------------------------
// La estructura de un Array es la siguiente:
/*  1.- El nombre del array
    2.- Sigue un "=" y los corchetes ("[]") que es donde irán los valores que elijas.
    3.- Finalmente, introduce los valores que gustes dentro del array y sepáralos con comas.
    Aquí un ejemplo:*/
let datos=["Diego", 18, "Perú"];
let frutas=["Banana","Manzana","Pera","Durazno"];
console.log(frutas); // Esto mostrará la lista de frutas 
// Ya sabes como crear y mostrar la lista completa de un array, pero y si quieres solo mostrar un elemento del array?
------------------------------------------------------------------------------------
// Cada Array indexa sus elementos de forma automática, qué quiere decir esto? 
/* Tomemos el ejemplo de las frutas, Banana es el primer elemento de la lista, pero en la programación, los arrays el primer elemento es el número 0, el segundo el 1 y así sucesivamente.
    Entonces, banana sería el elemento con index 0, manzana con index 1, pera el 2 y durazno el 3.*/
console.log(frutas[1]); // En este momento, estoy mostrando el segundo elemento de la lista frutas, que sería manzana.
// Los index se entienden como si nosotros llamamos al elemento que está en la posición x. no llamamos al elemento específico.
------------------------------------------------------------------------------------
// Pero imagina que quieres llamar un elemento de un array por algo específico y no por su index, eso vendrían a ser los Arrays Asociativos.
// Los arrays asociativos u objetos son una estructura de lista que contiene variables específicas
let pcAso = {
    nombre:"DiegoPC", 
    procesador:"Intel Core I7",
    ram:"16GB",
    espacio:"1TB"
};
let pcArr=["DiegoPC","Intel Core I7","16GB","1TB"];
// En esencia ambas listas son lo mismo, pero para llamar a los elementos de un array convencional debes hacerlo mediante su índice. Para un objeto es diferente, veámoslo:
// Intentemos mostrar el procesador de la pc en ambos casos:
console.log(pcArr[1]); // Esta sería la forma de mostrarlo en un array convencional.
console.log(pcAso[1]); // Si intentamos eso, nos mostrará que es undefined porque no es la forma correta de hacerlo. Veamos la forma correcta:
console.log(pcAso["procesador"]); // En este caso, si mostrará el procesador porque estamos consultando el dato de forma directa.
// En resumen, el uso de objetos o arrays asociativas facilita y hace más intuitivo la consulta de datos sin usar índices.
// Algunas cosas que debemos conocer de la sintaxis de los objetos es que el nombre de las variables internas para asignar la variable debe ser con dos puntos y no (=), y para llamar al dato se debe usar el nombre de la variable entre comillas.
------------------------------------------------------------------------------------
// Para finalizar tratemos de concatenar items de una lista.
console.log(`El procesador de mi pc es ${pcArr[1]}`);
console.log(`Tengo ${pcAso["ram"]} de RAM en mi PC`);
// Con esto finaliza la clase 1, se pueden concatenar los items de manera convencional,también puedes defininr variables y darles como valor el item respectivo del array.

