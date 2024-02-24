const { registrar, leerRegistro } = require("./operaciones.js");

const items = process.argv.slice(2);
console.log(items);

if (items === "registrar") {
  registrar(nombre, edad, animal, color, enfermedad);
} else if (items === "leer") {
  leerRegistro(nombre, edad, animal, color, enfermedad);
} else {
  console.log(
    "tiene que indicar el tipo de operacion: registrar o leerRegistro"
  );
}
const nombreAnimal = items[1];
const edad = items[2];
const tipoAnimal = items[3];
const colorAnimal = items[4];
const enfermedad = items[5];

registrar(nombreAnimal, edad, tipoAnimal, colorAnimal, enfermedad);
