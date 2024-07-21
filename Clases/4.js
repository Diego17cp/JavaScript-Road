// Clase 4
// Concatenación 2-Backticks y Camel Case
// aqui ira una separacion
// Ya vimos como concatenar en JS, pero y si te digo que hay una forma más eficiente y mejor para cuando enlaces y uses JS en la Web
// Veamos el siguiente ejemplo con concatenación normal:
    let nombre="Diego";
    let edad=18;
    console.log("Mi nombre es: "+nombre+" y tengo "+edad+" años.");
// Esta forma puede resultar un poco engorrosa de hacer, el uso de backticks es más eficiente.
// Primero conozcamos qué son, son estos signos que, por lo general, se usa para poner tíldes en el idioma español pero en el sentido contrario: ``
/* Ahora pongamos el uso de concatenación con backticks usando la siguiente sintaxis:*/ //`${variable}`
    console.log(`Mi nombre es: ${nombre} y tengo ${edad} años.`);
// Ambas formas imprimirán lo mismo, pero en mi opinión, la segunda forma es mejor y puede ahorrarnos algunos problemas en nuestro código.
// aqui ira una separacion
// Algunos errores de concatenación puede ser intentar poner comillas dentro de la string. Puedes poner comillas siempre y cuando sean diferentes a las usadas en un principio.
    // Incorrecto:
        // console.log("Hola, me llamo Diego, pero me dicen "red"");
        // Como dije, si empiezas con comillas dobles como en el ejemplo y quieres poner algo entre comillas dentro del mensaje debe ser con otro tipo de comillas.
    // Correcto:
        console.log('Hola, me llamo Diego, pero me dicen "red"');
        // En este caso sí se ejecutará el mensaje porque pusimos comillas distintas al apodo.
// aqui ira una separacion
// El Camel Case es el tipo de escritura para palabras compuestas que se usa en JS. Y es la forma oficial que da JS para escribir nombres de variables.
// El Camel Case se ejecuta con esta sintaxis: primeraPalabra. La palabra "primera" empieza con minúsucula y la siguiente palabra empieza con mayúscula, todas las palabras que sigan deben estar en mayúscula.
    // Pongámoslo en práctica.
        nombreCompleto="Diego Castro";
        estadoDeSalud="enfermo";
        fechaDeNacimiento=new Date('2006-03-17');
    // De esta forma, se aplica Camel Case y es una buena práctica aplicarlo en tu código.