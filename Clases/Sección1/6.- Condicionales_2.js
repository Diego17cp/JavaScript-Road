// Clase 2.1
// Condicionales 2
------------------------------------------------------------------------------------
/*Para ejecutar condicionales existen un par más de formas de hacerlo, los dos que quedan son el Operador Ternario y una muy usada para diversas opciones predefinidas, la estructura Switch.*/
------------------------------------------------------------------------------------
// Condicionales con Operador Ternario.- Este tipo especial de operador es una forma abreviada de la estructura If-Else. Evalúa una condición y devuelve una respuesta dependiendo de si la condición es True o False.
// El operador ternario se compone de la estructura: condición ? respuesta1 (si es True) : respuesa2 (si es False)
let name="Diego";
let mensaje=name=="Diego" ? "Un gusto, Diego." : "No conozco tu nombre.";
console.log(mensaje);
// Si el nombre es Diego se mostrará un saludo, si no fuese Diego, se mostraría otro mensaje. El operador ternario solo evalúa una estructura If-Else, no maneja más alternativas, se recomienda su uso para un código más sencillo.
------------------------------------------------------------------------------------
// Condicionales Switch.- Se utiliza para condicionales con múltiples opciones. Evalúa una expresión y ejecuta el código correspondiente al caso coincidente.
switch (expression) {
    case value1:
        // código a ejecutar si expression === value1
        break;
    case value2:
        // código a ejecutar si expression === value2
        break;
    default:
        // código a ejecutar si no hay coincidencias, parecido a Else.
}
// Ahora un pequeño ejemplo: 
let temp=24;
switch (temp) {
    case 30:
        console.log("Hace calor!");
        break;
    case 12:
        console.log("Hace frío!");
        break;
    default: 
    console.log("Hace un buen día.")
}
// En este caso, dependiendo del valor de la temperatura se imprimirá un mensaje diferente.
------------------------------------------------------------------------------------
/*  Ahora, las mejores opciones de condicionales que debes usar siempre dependerá del proyecto, a veces para mantener eficiencia puedes usar el operador ternario y hacer un código más reducido
    pero, si quieres hacer un programa más complejo, las mejores opciones son las estructuras If-Else If-Else o Switch. Como dije, tú eliges el método que mejor domines o mejor se adapte a tu proyecto.*/
// separacion
// Con esto finalizamos con uno de los pilares de la programación, los Condicionales, espera a los ejercicios correspondientes:)
