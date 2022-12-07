/* 
El Grinch está abriendo las cartas que iban a Santa Claus y las está dejando hechas un lío. 😱
Las cartas son una cadena de texto que incluyen regalos y paréntesis ().
Para saber si una carta es válida ✅, debes comprobar que los paréntesis cierran correctamente y que, además, no vayan vacíos.
¡Pero ojo! Porque el Grinch ha dejado llaves { y corchetes [ dentro de los paréntesis que hacen que no sean válidas. Por suerte sólo los ha dejado en medio de los paréntesis...

Ejemplos:
"bici coche (balón) bici coche peluche" // -> ✅
"(muñeca) consola bici" // ✅

"bici coche (balón bici coche" // -> ❌
"peluche (bici [coche) bici coche balón" // -> ❌
"(peluche {) bici" // -> ❌
"() bici" // ❌
*/

const carta1 = "bici coche (balón) bici coche peluche";
const carta2 = "(muñeca) consola bici";
const carta3 = "bici coche (balón bici coche";
const carta4 = "peluche (bici [coche) bici coche balón";
const carta5 = "(peluche {) bici";
const carta6 = "(()) bici";
const carta7 = "(a() bici (a)";

// Solución 1.
function isValid(letter) {
  let regalos = letter.split("(");
  let regexp = /[\{\}\[\]]/gm;
  if (regalos.some(regalo => regalo.match(regexp))) return false;
  if (regalos.some(regalo => regalo.indexOf(")") === 0)) return false;
  const regalosValidos = regalos.some(item => item.includes(")"));
  return regalosValidos;
};
