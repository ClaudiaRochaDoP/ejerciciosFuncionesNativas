/* Funciones nativas */

// function tienenMismaLongitud(a, b) {
//   let string1 = a.length;
//   let string2 = b.length;

//   console.log(string1 === string2);
// }

/* ------------------------------------------ */

// esUltimoCaracter(palabra, caracter);

// Crear una función esUltimoCaracter que tome como argumentos una palabra y un caracter
// y devuelva true si la palabra termina con el caracter o false de lo contrario

// function esUltimoCaracter(palabra, caracter) {
//   let ultimaLetra = palabra.charAt(palabra.length - 1);
//   console.log(ultimaLetra === caracter);
// }

// esUltimoCaracter("lovelace", "e"); // true
// esUltimoCaracter("lovelace", "f"); // false

/* ------------------------------------------ */

// Crear una función esValida que tome como argumento una contrasenia (string)
//y devuelva true si tiene 8 caracteres o más o false si tienen menos de 8 caracteres

// function esValida(contrasenia) {
//   let longitudcontrasenia = contrasenia.length;
//   console.log(longitudcontrasenia >= 8);
// }

// esValida("contraseniaMuySegura"); // true
// esValida("abc123"); // false

/* ------------------------------------------ */

// Crear una función sonIguales que tome como argumentos dos strings a y b
// y devuelva true si ambos strings tienen el mismo contenido independientes del caso y false en caso contrario.

// function sonIguales(a, b) {
//   let stringUno = a.toLowerCase();
//   let stringDos = b.toLowerCase();

//   console.log(stringUno === stringDos);
// }

// // sonIguales("javascript", "JavaScript"); // true
// sonIguales("AdA LoVeLaCe", "Ada Lovelace"); // true
// sonIguales("NO ESTOY GRITANDO", "ESTOY GRITANDO"); // false

/* ------------------------------------------ */

// Crear una función contarPalabras que tome como argumento un string str y devuelva la cantidad de palabras que posee

// function contarPalabras(string) {
//   console.log(string.split(` `).length);
// }

// contarPalabras("javascript"); // 1
// contarPalabras("ada lovelace"); // 2
// contarPalabras(
//   "si debuggear es el proceso de remover bugs, programar es el proceso de agregarlos"
// ); // 14

/* ------------------------------------------ */
// Crear una función burlarse que tome como argumento un string str
// y devuelva el mismo string con todas las vocales reemplazadas por la letra i

// function burlarse(string) {
//   console.log(string.replace(/a|e|o|u/g, `i`));
// }

// burlarse("programar es dificil"); // 'prigimir is dificil'

/* ------------------------------------------ */
// Crear una función esFraccionMayorAUno que tome como argumento un string fraccion (en el formato 'numerador/denominador')
// y devuelva true si dicha fracción es mayor a 1 o false de lo contrario

// function esFraccionMayorAUno(fraccion) {
//   let resultado = parseFloat(fraccion);

//   console.log(resultado > 1);
// }

// esFraccionMayorAUno("1/2"); // false
//esFraccionMayorAUno("2/2"); // false
// esFraccionMayorAUno("4/2"); // true

/* ------------------------------------------ */
//capitalizar(str)

// Crear una función capitalizar que tome como argumento un string str
// y devuelva el mismo string con la primera letra en mayúscula

// function capitalizar(string) {
//   let mayuscula = string.charAt(0).toUpperCase();
//   console.log(string.replace(string.charAt(0), mayuscula));
// }

// capitalizar("lovelace"); // 'Lovelace'
// capitalizar("había una vez..."); // 'Había una vez...'
