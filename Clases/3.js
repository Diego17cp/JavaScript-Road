// Operadores 
// Los operadores en JS asignan un valor a alguna variabe o hacer operaciones entre dos o más variables.
// aqui ira una separacion
// Los Operadores Aritméticos:
    // (+) Suma: Suma dos o más valores numéricos o concatena strings
        let suma=5+3;
        let string="Hola"+" "+"Mundo";
        // ¿Pero qué pasa si quiero sumar un Number con una String? Pasará esto
        let sum="11"+1 // Esto formará una string que da como resultado "111"
    // (-) Resta: Resta dos o más valores numéricos 
        let resta=5-3;
    // (*) Multiplicación: Multiplica dos o más valores numéricos 
        let multi=5*3;
    // (/) División: Divide dos valores numéricos 
        let div=15/3;
    // (%) Módulo o Residuo: Devuelve el resto de la división de dos números
        let residuo=10%3; // El residuo que queda de esa división es 1
    // (**) Potenciación: Potencia un número al exponente del segundo valor
        let potencia=2**3; // Devolverá 8
    // (++) Incremento: Aumenta un valor en uno
        let incr=5;
        incr++; // Devolverá 6
    // (--) Decremento: Resta un valor en uno
        let decr=5;
        decr--; // Devolverá 4
// aqui ira una separacion
// Los Operadores de Asignación:
    // (=) Asignación simple: Le asignas un valor a la variable
        let saludo="Hola";
    // (+=) Asignación de suma: Suma el valor de la variable junto a otra y asigna el resultado
        let x=10;
        x+=5; /* Este resultado devolverá 15. Esta expresión es lo mismo que decir:*/ x=x+5
    // (-=) Asignación de resta: Resta el valor de la variable y la asigna, igual que el ejemplo anterior pero a la inversa.
        let y=10;
        y-=5; /* Esto es igual a decir: */ y=y-5
    // (*=) Asignación de multiplicación: Multiplica el valor y lo asigna.
        let z=10;
        z*=5; /* Esto es igual a decir: */ z=z*5
    // (/=) Asignación de resta: Divide el valor de la variable y la asigna, igual que el ejemplo anterior pero a la inversa.
        let a=10;
        a/=5; /* Esto es igual a decir: */ a=a/5
    // (**=) Asignación de potencia: Potencia el valor de la variable y la asigna, igual que el ejemplo anterior pero a la inversa.
        let b=10;
        b**=5; /* Esto es igual a decir: */ b=b**5
// aqui ira una separacion
// Los Operadores de Comparación: Comparan dos valores y devuelven un valor booleano.
    // (==) Igualdad: Compara dos valores para ver si son iguales, no importa el tipo de dato
        let esIgual = (5 == "5"); // Devolverá True
    // (===) Igualdad estricta: Compara dos valores para ver si son iguales, sí importa el tipo de dato
        let esIgual2 = (5 == "5"); // Devolverá False
    // (!=) Deigualdad: Compara dos valores para ver si NO son iguales, no importa el tipo de dato
    let no_esIgual = (5 != "5"); // Devolverá False
    // (!==) Desigualdad estricta: Compara dos valores para ver si NO son iguales, sí importa el tipo de dato
        let noesIgual2 = (5 == "5"); // Devolverá True
    // (>) Mayor que: Compara dos valores para ver si el primero es mayor que el segundo.
        let mayor = (10>5); // Devolverá True
        let mayor2 = "Hola">"Mundo"; // Devolverá False porque 'Mundo' tiene más caracteres que 'Hola'
    // (<) Menor que: Compara dos valores para ver si el primero es menor que el segundo
        let menor = (10<5); // Devolverá False
    // (>=) Mayor igual que: Compara dos valores para ver si el primero es mayor o igual que el segundo.
        let mayorigu = (5>=5); // Devolverá True
    // (<=) Menor igual que: Compara dos valores para ver si el primero es menor o igual que el segundo
        let menorigu = (10<=5); // Devolverá False
// aqui ira una separacion
// Los Operadores de Lógicos: Comparan valores booleanos y devuelve otro booleano
    // (&&) AND o Y: Devuelve True si ambos valores son True 
        let and=true && false; // Devolverá False
    // (||) OR u O: Devuelve True si al menos uno de los valores son True 
        let or=true || false; // Devolverá True
    // (!) NOT o NO: Invierte el booleano para dar lo contrario
        let not=!true; // Devolverá False