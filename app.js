// Variables

// Guarda en variables el nombre de las siguientes mascotas:

// 1. Pedrito
// 2. Rufo
// 3. Chancla

var nombre1= "Pedrito";
var nombre2= "Rufo";
var nombre3= "Chancla";

// Muestra en consola, accediendo a las variables, un mensaje como el siguiente:
// "Mis mascotas son Pedrito, Rufo y Chancla. Les quiero mucho"

console.log(`Mis mascotas son ${nombre1}, ${nombre2} y ${nombre3}`);
// Input y Output

// Pedir mediante prompts el nombre de dos mascotas y mostrar en consola un mensaje como el siguiente:
// "Quiero mucho a mis mascotas mascota1 y mascota2"

var nom1= prompt("quiero mucho a mis mascotas");
var nom2= prompt("quiero mucho a mis mascotas");

console.log(`Mis mascotas son ${nom1} y ${nom2}`);

// NOTA: mascota1 y mascota2 corresponden a los nombres introducidos mediante prompts

// Conversión de Tipos de Datos

// Guarda la cadena de texto "100" en una variable

let number= "100";

// Muestra el contenido de esta variable en consola
console.log(number);

// Muestra el TIPO DE DATO de esta variable en consola
console.log(typeof number);

// Transforma la variable de string a number
// Muestra nuevamente el contenido de esta variable en consola
console.log(Number("100"));
console.log(typeof number);



// ¿Qué diferencias notas al mostrar en consola la variable antes y después de transformarla? ¿Qué es entonces un tipo de dato?