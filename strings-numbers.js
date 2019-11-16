////////////////////////////////EJERCICIO 38///////////////////////////
let nombre = "Guadalupe";

console.log(nombre.length);

////////////////////////////////EJERCICIO 39///////////////////////////
let apellido = "Iturralde";

console.log(`Mi nombre es ${nombre} y tiene ${nombre.length} letras.`);
console.log(`Mi apellido es ${apellido} y tiene ${apellido.length} letras.`);

////////////////////////////////EJERCICIO 40///////////////////////////
let texto = "Usando el método ";
let metodo = "concat";
texto.concat(metodo);
console.log(texto.concat(metodo));
////////////////////////////////EJERCICIO 41///////////////////////////
texto = "HOLA MUNDO";
console.log(texto.toLowerCase());

////////////////////////////////EJERCICIO 42///////////////////////////
texto = "hola mundo";
console.log(texto.toUpperCase());

////////////////////////////////EJERCICIO 43///////////////////////////
texto = "the dark knight";
let primerLetra, segundaLetra, tercerLetra;
primerLetra = texto.charAt(0);
segundaLetra = texto.charAt(4);
tercerLetra = texto.charAt(9);
let resultado = primerLetra + segundaLetra + tercerLetra;
console.log(resultado.toUpperCase());

////////////////////////////////EJERCICIO 44///////////////////////////
texto = "HOLA";
texto = texto.toLowerCase();
primerLetra = texto.slice(0, 1);
segundaLetra = texto.slice(1, 2);
terceraLetra = texto.slice(2, 3);
cuartaLetra = texto.slice(3, texto.length);
resultado = cuartaLetra.concat(terceraLetra, segundaLetra, primerLetra);
console.log(resultado);

////////////////////////////////EJERCICIO 45///////////////////////////
let mensaje = "Ada Lovelace fue la ayudante de Charles Babbage.";
let programadora = mensaje.slice(0, 12);
let mensajeFinal = "¡" + programadora.concat(` la primer programadora de la historia!`)
console.log(mensajeFinal);

////////////////////////////////EJERCICIO 46///////////////////////////
let usuarioYPassword = 'ada2019,12345';
let nombreDeUsuario = usuarioYPassword.substr(0, 7);
let password = usuarioYPassword.substr(8, usuarioYPassword.length);
console.log(`El usuario ${nombreDeUsuario} tiene ${password} como password`);

////////////////////////////////EJERCICIO 47///////////////////////////

////////////////////////////////EJERCICIO 48///////////////////////////
let piString = "3.14";
let constanteString = "42";
let pi = Number(piString);
let constante = Number(constanteString);
resultado = pi + constante;

console.log(resultado);
console.log(`${resultado} es el resultado de sumar las variables ${pi} y ${constante}, donde ${pi} es el valor que tiene la variable pi 
y ${constante} es el valor de la variable constante`);

/*Declarar la variable piString y guardar el valor 3.14 como String
Declarar la variable constanteString y guardar el valor 42 como String
Declarar la variable pi y guardar el valor que tenemos en la variable piString y transformarlo como número decimal
Declarar la variable constante y guardar el valor que tenemos en la variable constanteString y transformarlo como número entero
Declarar la variable resultado y asignar el resultado de la suma de las variables pi y constante
Mostrar en consola el contenido de la variable resultado
Mostrar en consola el mensaje: 45.14 es el resultado de sumar las variables *pi* y *constante*, donde *pi* es el valor que tiene 
la variable pi y *constante* es el valor de la variable constante. Utilizar el método toString para convertir los numbers a strings.*/