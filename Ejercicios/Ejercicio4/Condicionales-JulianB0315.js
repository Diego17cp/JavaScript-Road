//1.- Clasificación de estudiantes: Saca el promedio de un curso en base a 5 notas, si el promedio es menor a 11 el alumno está desaprobado, si es menor a 15 el alumno está regular, si es menor que 18 y mayor a 15 el estudiante está e grado satisfactorio y si el promedio es igual a 20 el alumno está excelente.
let n1=16 ,n2=20,n3=13,n4=17,n5=18;
prom=(n1+n2+n3+n4+n5)/5;
let Clasificación;
switch (true){
    case (prom<11):
        Clasificación='Desaprobado 😔'
        break;
    case (prom>=11 && prom<=15):
        Clasificación='Regular 🐹'
        break;
    case (prom>15 && prom<=18):
        Clasificación='Satisfactorio 😌'
        break;
    case (prom==20):
        Clasificación='Excelente 💯'
        break;
    default:
        Clasificación='Error:fuera de rango✖️'
        break;
}
console.log(`Tu nota final es  ${prom} y tu promedio es considerado como: ${Clasificación}`);
//2.- Edades: En este caso, en el Documento de Identidad propio cambia si el ciudadano es mayor o menor de edad, entonces, si el usuario es menor de edad deberá ser negado el cambio de Documento, pero si el usuario es mayor a 17 años, sí es apto.
let edad=18;
let mensaje;
switch (true) {
    case (edad >= 18):
        mensaje = 'El ciudadano es apto para cambiar su Documento de Identidad.';
        break;
    case (edad < 18):
        mensaje = 'El ciudadano no es apto para cambiar su Documento de Identidad.';
        break;
    default:
        mensaje = 'Edad no válida.';
        break;
}
console.log(`Edad:${edad}`);
console.log(`Resultado: ${mensaje}`);
//3.- Tienda: Imagina que tienes una cantidad de dinero específica, quieres gastarlo en algunas cosas, así que compra algo, recuerda que también puedes recibir cambio y que el producto debe incluir el inmpuesto generado por ventas respectivo de tu país, también tienes la opción de que no te alcance y debas irte de la tienda.
//- Procura siempre concatenar lo que imprimirás en consola y hacer uso del CamelCase en tus variables.
let dineroDisponible = 35,precioProducto = 40,impuestoVentas = 0.18;
let precioTotal = precioProducto + (precioProducto * impuestoVentas / 100);
if (dineroDisponible >= precioTotal) {
    let cambio = dineroDisponible - precioTotal;
    console.log(`Has comprado el producto. Precio del producto (con impuesto): ${precioTotal}. Tu cambio es: ${cambio}.`);
} 
else {
    console.log(`No tienes suficiente dinero para comprar el producto. Precio del producto (con impuesto): ${precioTotal}. Dinero disponible: ${dineroDisponible}.`);
}