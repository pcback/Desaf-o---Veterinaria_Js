const fs = require("fs");

const registrar = (nombreAnimal, edad, tipoAnimal, colorAnimal, enfermedad) => {
  const inventario = {
    nombreAnimal,
    edad,
    tipoAnimal,
    colorAnimal,
    enfermedad,
  };

  //const contenido = fs.readFileSync("./inventario.json", "utf8");
  const registro = JSON.parse(fs.readFileSync("inventario.json", "utf-8"));
  registro.push(inventario);

  fs.writeFileSync("inventario.json", JSON.stringify(registro, null, 2));
  console.log("Registro Logrado");
};

const leerRegistro = () => {
  const registro = JSON.parse(fs.readFileSync("inventario.json", "utf-8"));
  console.log(registro);
  registro.forEach((registro, index) => {
    console.log(`registro ${index + 1}:`);
    console.log(registro);
  });
};

module.exports = { registrar, leerRegistro };
