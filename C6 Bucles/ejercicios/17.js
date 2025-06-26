function colors(color) {
  // La función recibe un color. Retorna el string correspondiente:
  // En caso que el color recibido sea "blue"   --> "This is blue".
  // En caso que el color recibido sea "red"    --> "This is red".
  // En caso que el color recibido sea "green"  --> "This is green".
  // En caso que el color recibido sea "orange" --> "This is orange".
  // Si no es ninguno de esos colores           --> "Color not found".
  // PISTA: utilizar el statement SWITCH.
  // Tu código:
  let respuesta = "";

  switch (color) {
    case "blue":
      respuesta = "This is blue";
      break;
  
    case "red":
      respuesta = "This is red";
      break;
  
    case "green":
      respuesta = "This is green";
      break;
  
    case "orange":
      respuesta = "This is orange";
      break;
  
    default:
      respuesta = "Color not found";
      break;
  }
  return respuesta;
}

module.exports = colors;
