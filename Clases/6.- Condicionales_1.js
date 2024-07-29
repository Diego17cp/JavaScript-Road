// Clase 6
// Condicionales
------------------------------------------------------------------------------------
/* Los condicionales son una de las cosas más importantes en el mundo de la programación.
Son sentencias que ejecutan un determinado bloque de código siempre y cuando la condición sea verdadera, sirven fundamentalmente para la toma de decisiones permitiendo crear varios caminos según las condiciones dadas.*/
// Un bloque de código son todas las líneas de código que estén dentro de estructuras de programación. Empiezan y terminan en ({}).
------------------------------------------------------------------------------------
// La estructura de un condicional data de:
/*  1.- El tipo de condicional, puede ser if, else if, else o switch.
    2.- La condición va entre los paréntesis.
    3.- El bloque de código respectivo entre llaves.*/
------------------------------------------------------------------------------------
// Condicionales If.- Evalúa una expresión y si esta es True se ejecutará el bloque asignado.
    if (true) {
        console.log("Estos son condicionales");
    }
// Como la condición es true, en la consola mostrará el mensaje, pero si fuera false, no se ejecutaría nada.
    if (10<5) {
        console.log("Hola");
    }
// En este caso la condición es falsa ya que 10 NO es mayor que 5, por lo tanto el bloque no se ejecutará, pero podemos hacer una condición más si la anterior no se ejecuta, esos son los Else.
------------------------------------------------------------------------------------
// Condicionales If-Else.- Esta es una estructura de doble opción, de forma más sencilla, si la primera es condición es verdadera se ejecutará su bloque respectivo, PERO SI es falso se ejecutará el bloque adicional asignado al Else. Veamos su estructura:
    if (true) {
        // código a ejecutar si la condición es verdadera
    } else {
        // código a ejecutar si la condición es falsa
    }    
// En el Else no se ponen condiciones ya que, al ser el último recurso cuando ninguna condición se cumpla debe tener un bloque predeterminado a ejecutar por si esto sucede. Veámoslo con un ejemplo práctico:
    let name="Diego Castro";
    if (name=="Diego Castro") {
        console.log(`Tu nombre es ${name}`);
    }
    else {
        console.log("No conozco tu nombre.");
    }
// Pero y si quiero hacer una aplicación con más de una sola condición? Para eso existen los Else If, distintos bloques de código que se ejecutarán dependiendo de la condición de forma ilimitada, veámoslo.
------------------------------------------------------------------------------------
// Else If.- Permite evaluar múltiples condiciones, si la primera es verdadera las demás se omitirán, de lo contrario se ejecutará alguna de las condiciones disponibles.
    if (condition1) {
        // código a ejecutar si condition1 es verdadera
    } else if (condition2) {
        // código a ejecutar si condition2 es verdadera
    } else {
        // código a ejecutar si ninguna condición anterior es verdadera
    }
// Veamos un ejemplo práctico
    let n1=50, n2=53, n3=52.9, n4="50";
    if (n1>n2) {
        console.log("Esto es falso");
    }
    else if (n1==n4) {
        console.log("Esto es verdadero");
    }
    else if (n1&&n4>n2||n3 ) {
        console.log("Esto es falso");
    } 
    else {
        console.log("Haz más condiciones");
    }
// En este ejemplo, vemos que diversas condiciones son falsas pero una es verdadera, en este caso la primera condición fue falsa, entonces pasa a la segunda condición y como esta sí es verdadera se ejecuta y el programa finaliza ahí. Si la tercera o cuarta fueran verdaderas sería igual o de lo contrario se ejecutaría el Else.
------------------------------------------------------------------------------------
// Hasta aquí culminamos con los condicionales básicos, pero habrá una parte 2 para no hacer tan larga esta clase.
// Un pequeño consejo para hispanohablantes, tomen esta forma de entender las condicionales en el idioma:
/*  SI (if) hay huevos en la tienda compra un kilo.
    SI NO (else if) hay huevos compra solo salchichas.
    SI NO (else) hay nada vuelve a casa. */
