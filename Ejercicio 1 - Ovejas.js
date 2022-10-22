// * Cada oveja tiene un nombre y un color. Haz una función que devuelva una lista con todas las ovejas que sean de color rojo
y que además su nombre contenga tanto las letras n Y a, sin importar el orden, las mayúsculas o espacios.

const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'},
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo'}
];


// * Solucion 1.
function contarOvejas(ovejas) {
  return ovejas.filter(
    (oveja) =>
      oveja.color === "rojo" &&
      oveja.name.toLowerCase().indexOf("a") !== -1 &&
      oveja.name.toLowerCase().indexOf("n") !== -1
  );
};


// * Solucion 2, Funciona pero en la página no.
function contarOvejas(ovejas) {
  const ovejasFiltradas = [];
  for (let i = 0; i < ovejas.length; i++) {
    if (ovejas[i].color === "rojo") {
      if (ovejas[i].name.match("[n N]") && ovejas[i].name.match("[a A]")) {
        ovejasFiltradas.push(ovejas[i]);
      };
    };
  };
  return ovejasFiltradas;
};
