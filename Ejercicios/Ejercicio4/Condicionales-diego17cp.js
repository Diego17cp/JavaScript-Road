// Ejercicio 4
// 1.- 
let n1=15, n2=12, n3=11, n4=20, n5=18;
let prom=(n1+n2+n3+n4+n5)/5;
if (prom<11) {
    console.log(`Usted está desaprobado`);
}
else if (prom<15 && prom>11) {
    console.log(`Su promedio es regular, siga esforzándose.`);
}
else if (prom<18 && prom>15) {
    console.log(`Su promedio es satisfactorio, siga así.`);
}
else if (prom=20) {
    console.log(`Su promedio es excelente, felicidades.`);
}
else {
    console.log(`Sus notas no son correctas.`);
}

// 2.-
let edad=18
if (edad>=17) {
    console.log(`Eres mayor de edad. Eres apto para el cambio de DNI.`);
}
else {
    console.log(`Eres menor de edad, no eres apto para el cambio.`);
}
// 3.-
let dinero=150.50;
let precio=135, cambio;
let igv=precio*0.18, precio2=precio+igv;
if(dinero==precio2){
    console.log(`Me alcanza justo, a comprarlo`);
}
else if(dinero>=precio2){
    cambio=dinero-precio2;
    console.log(`Me alcanza de sobra y encima me dieron $${cambio} de cambio.`);
}
else{
    console.log(`No me alcanza para comprar:(`);
}

