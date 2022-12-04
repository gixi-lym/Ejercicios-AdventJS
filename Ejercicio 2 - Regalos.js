/* 
Te ha llegado una carta ✉️ con todos los regalos que debes preparar. El tema es que es una cadena de texto y es muy difícil de leer 😱. ¡Menos mal que han puesto cada regalo separado por espacio! (aunque ten cuidado, porque al ser niños, igual han colado más espacios de la cuenta)

Encima nos hemos dado cuenta que algunas palabras vienen con un _ delante de la palabra, por ejemplo _playstation, que significa que está tachado y no se tiene que contar.

Transforma el texto a un objeto que contenga el nombre de cada regalo y las veces que aparece. Debe retornar:
{
  bici: 2,
  coche: 2,
  balón: 1,
  peluche: 1
}
*/

//* Solución 1 - Es espantosa y está mal hecha, aún así retorna lo que debe xd.
  function Regalos() {
    const carta = "bici coche balon _playstation bici coche peluche";
    const bici = /bici/gi;
    const coche = /coche/gi;
    const balon = /balon/gi;
    const peluche = /peluche/gi;
    const regalos = {
      bici: carta.match(bici).length,
      coche: carta.match(coche).length,
      balon: carta.match(balon).length,
      peluche: carta.match(peluche).length,
    };
  return regalos;
  };
Regalos();
