//  Variables:
// Las variables son un contenedor de valores o datos. Nos sirve para almacenarlos.
/* En JS puedes definir las variables con:*/ let NombreDeLaVariable;
// Las variables siempre pueden cambiar de valor si así se requiere dentro del bloque de código donde se defina o son variables generales definidas desde el principio del programa.
------------------------------------------------------------------------------------
// Las constantes.- Son un tipo de variable que nunca puede cambiar su valor, como dice su nombre, es constante. Una vez que la definas con un valor especifico no lo podrás cambiar.
/* Las constantes en JS se definen así:*/ const pi=3.1416;
// En el ejemplo el valor de PI es constante debido a que siempre tendrá ese valor y no se puede cambiar.
------------------------------------------------------------------------------------
// Formas incorrectas y correctas de defninir variables:
  // Incorrecto:
    let Hola mundo; <-- // No puedes poner espacios en el nombre de la variable
    let hola-mundo; <-- // No puedes poner un guion para espaciar el nombre de la variable
    let hola@mundo; <-- // No puedes poner arrobas en el nombre de la variable
    let 1hola; <-- //No puedes empezar el nombre de la variable con un número
  // Correcto:
    let holamundo;
    let hola_mundo; <-- // Puedes espaciar el nombre de tu variable con guiones bajos 
    let holamundo1; <-- // Puedes poner números en los nombres de tus variables siempre y cuando empiecen por una letra
    let HolaMundo;
------------------------------------------------------------------------------------  
// Tipos de Datos:
// JS es un lenguaje de programación con un tipado de dato débil y dinámico. ¿Eso qué significa? Que a diferencia de otros lenguajes de programación JavaScript no necesita definir el tipo específico del dato ya que el mismo lenguaje lo interpreta y automáticamente el tipo de dato es detectado. 
// Ahora, qué tipos de datos encontramos en JS:
  // Datos Number: Tipos de datos que almacena tanto números enteros como decimales.
    let entero=1;
    let decimal=200.30
  // BigInt: Se utiliza para representar números enteros que son demasiado grandes para ser representados con el tipo Number y siempre debe acabar con una n.
    let númeroBig=1234567890123456789012345678901234567890n;
  // Datos String: Datos que almacenan cadenas de textos o strings del tamaño que se desee siempre y cuando esté entre comillas simples o dobles.
    let stringRandom="Hola mundo";
    let string2='JavaScript es divertido';
  // Datos Boolean: Datos que almacenan dos posibilidades: True o False, se usan para variables que sean de respuesta sí o no, filtrar entre datos, etc.
    let itsTrue=true;
    let itsFalse=false;
  // Datos Undefined: Se asigna automáticamente a las variables que se han declarado pero no inicializado.
    let SinDefinir; <-- /* Arrojará en la consola:*/ undefined
  // Datos Null: Es un valor especial que representa la ausencia intencional de un valor.
    let vacio=null;
  // Datos Object: Los objetos son tipos de datos con pares de clave-valor guardadas en una variable objeto única.
    let objeto= {
      nombre: "Juan",
      edad: 30,
      esEmpleado: true
    };
  // Arrays: Es un tipo especial de objeto que almacena elementos en una lista ordenada.
    let lista1=[1, 2, 3, 4, 5];
    let lista2=["a","b","c"];
  // Dato Date: Se usa para trabajar con fechas y horas.
    let fecha = new Date("2024-30-17");
------------------------------------------------------------------------------------
// Ahora ya conoces como definir variables y asignarles valores! Ahora déjame mostrarte como llamar a las variables y mostrarlas.
// Es tan sencillo como llamar a las variables con su nombre dentro del console.log. Déjame mostrarte un ejemplo.
let nombre="Diego";
let edad=18;
// Escribo mi nombre:
console.log(nombre); <-- // Mostrará Diego en la consola.
// Pero y si quiero mostrar más de una variable en una oración? Te enseñaré la concatenación.
console.log("Dime tu nombre y tu edad"); <-- // Nos piden mostrar nuestro nombre y edad.
console.log("Soy "+nombre+" y tengo "+edad+" años."); <-- // Imprimirá 'Soy Diego y tengo 18 años.'
// La concatenaciónse realiza usando los signos "+" para unir elementos, pero pueden haber ciertos errores.
  console.log("Soy"+nombre+"ytengo"+edad+"años."); <-- // Imprimirá 'SoyDiegoytengo18años.' Los signos + no generan espacios debes ponerlos tú mismo.
// Si ya tienes dos o más variables con valores más específicos los puedes concatenar de la siguiente manera:
  console.log(nombre+" "+edad); <-- // Imprimirá 'Diego 18'
------------------------------------------------------------------------------------
// Con esto culmina la Clase 2. Gracias por leer.
