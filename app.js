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
//   let operandos = fraccion.split("/");
//   let resultado = parseFloat(operandos[0]) / parseFloat(operandos[1]);
//   console.log(resultado > 1);
// }

// esFraccionMayorAUno("1/2"); // false
// esFraccionMayorAUno("2/2"); // false
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

/* ------------------------------------------ */
//aHackerSpeak(str)

// Crear una función aHackerSpeak que tome como argumento un string str
// y el mismo string convertido a H4CK3R 5P3AK, siguiendo las siguientes reglas:

// function aHackerSpeak(string) {
//   //console.log(string.replace(/i|e|a|s|o/g, `1`));
//   let cambioUno = string.replace(/i/i, `1`);
//   let cambioDos = cambioUno.replace(/e/i, `3`);
//   // console.log(cambioDos);
//   let cambioTres = cambioDos.replace(/a/i, `4`);
//   // console.log(cambioTres);
//   let cambioCuatro = cambioTres.replace(/s/i, `5`);
//   //console.log(cambioCuatro);
//   let cambioCinco = cambioCuatro.replace(/o/i, `0`);
//   console.log(cambioCinco);
// }

/* otra opcion */
// function aHackerSpeak(string) {
//   //console.log(string.replace(/i|e|a|s|o/g, `1`));
//   let cambioUno = string.replace(/i/gi, `1`);
//   let cambioDos = cambioUno.replace(/e/gi, `3`);
//   // console.log(cambioDos);
//   let cambioTres = cambioDos.replace(/a/gi, `4`);
//   // console.log(cambioTres);
//   let cambioCuatro = cambioTres.replace(/s/gi, `5`);
//   //console.log(cambioCuatro);
//   let cambioCinco = cambioCuatro.replace(/o/gi, `0`);
//   console.log(cambioCinco);
// }

// //console.log(string.replace(/i|e|a|s|o/g, `1`));

// - Las i se transforman en 1
// - Las e se transforman en 3
// - Las a se transforman en 4
// - Las s se transforman en 5
// - Las 0 se transforman en 0

// aHackerSpeak("javascript"); // 'j4v45cr1pt'
// aHackerSpeak("soy una hacker"); // '50y un4 h4ck3r'
// aHackerSpeak("ADA LOVELACE"); // '4D4 L0V3L4C3'

/* ------------------------------------------ */
// obtenerPrimeraOracion(str)

// Crear una función obtenerPrimeraOracion que tome como argumento un string str y la primera oración de dicho string

function obtenerPrimeraOracion(string) {
  let puntuacion = string.split(".");
  console.log(puntuacion[0]);
}

obtenerPrimeraOracion("A mí no me preguntes, sólo soy una oración"); // 'A mí no me preguntes, sólo soy una oración'
obtenerPrimeraOracion(
  "Tengo varias oraciones. Esta es la segunda. Y esta es la tercera."
); // 'Tengo varias oraciones.'
