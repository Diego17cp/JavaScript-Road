// Clase 5 
// Formas de conversión de datos
//separacion
// En JS, el cambio de tipado de la variable se hace de forma sencilla sin mucha complicación por ser un lenguaje dinámico, pero hay mejores prácticas para hacerlo y formas eficientes, vamos a verlo:
// separacion
// Forma Dinámica: En JS, podemos cambiar los datos de forma dinámica sin mucho que hacer, lo cual aporta mucha flexibilidad. Sin embargo, esta forma puede ser poco clara y debes manejarlo con cuidado para poder evitar errores y siempre asegura el tipo de dato al que cambias y siempre documenta su uso para mantener legibilidad.
    let variable=50;
    variable="Hola mundo";
    console.log(variable); // Mostrará la string "Hola Mundo"
//separacion
// Forma Explícita: Se usa cuando queremos mostrar de forma fácil a alguien los cambios que hacemos de forma específica, es una buena práctica usarlo al trabajar en equipo.
    // Number a String
        let num=550;
        let str=String(num); // El número será una string.
        let str2=num.toString(); // También mostrará  el número como una string.
    // String a Number
        let str3="550";
        let n=Number(str3); // La string se vuelve un número.
        let str4="550.5";
        let int=parseInt(str4); // Específica si queremos un número entero, y si el valor es decimal, hace una aproximación.
        let float=parseFloat(str4); // Especifíca si queremos un número decimal y lo convierte por completo
    // Datos a Boolean
        let string="Hola Mundo";
        let bool=Boolean(string); // Devolverá True
// Forma Eficiente: Donde el rendimiento es importante de cuidar puedes usar esta forma rápida de hacer el cambio, sin embargo, puede tener problemas de legibilidad así que deberías de documentarlo para su entendimiento.
    // String a Number con el unario "+"
        let x="550"
        let y=+str; // Devolverá 550 en modo de Number
    // String a Boolean usando la doble negación "!!"
        let z="Hola";
        let bo=!!z; // Devolverá True
// Casos especiales: JS hace conversiones en ciertos contextos, por lo que se debe manejar bajo precaución y conocer bien los contextos.
    let res=23+" es la respuesta"; // Devolverá una string diciendo "23 es la respuesta"
    let compar="23"==23; // Devolverá True porque ambos valores son iguales.
// separacion
// Fin de la clase 5