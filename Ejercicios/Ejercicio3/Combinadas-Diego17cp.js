// Ejercicio 3
// 1.-
const n1=10, n2=5;
let sum=n1+n2, res=n1-n2, mul=n1*n2, div=n1/n2;
console.log(`Los resultados de las operaciones son:
    - Suma: ${sum}
    - Resta: ${res}
    - Multiplicación: ${mul}
    -División: ${div}`);
// 2.- 
let librosEnStock=10; pedidosDeLibros=56;
let librosFuturoStock=librosEnStock+pedidosDeLibros;
console.log(`En la biblioteca no tienen el libro que quiero, dicen que solo tienen ${librosEnStock} libros por el momento, así que dejé mi pedido y me dijeron que ya tenían ${pedidosDeLibros} pedidos y que tendría que esperar.`);
console.log(`Ya llegaron los nuevos libros, el stock de libros ahora es de ${librosFuturoStock}`);
// 3.-
let numDeJuegos=10;
numDeJuegos+=5;
console.log(`Mi colección de juegos ahora es de ${numDeJuegos}`);
// 4.-
let counter=5;
counter++;
counter++;
counter--;
console.log(`El valor actual del contador es de ${counter}`);
