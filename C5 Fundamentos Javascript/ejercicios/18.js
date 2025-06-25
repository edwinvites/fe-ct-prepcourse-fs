function esVocal(letra) {
  // La función recibe un argumento llamado letra el cual es un string.
  // Retorna como resultado un string que indica si el argumento letra es una vocal.
  // de lo contrario retorna el string "Dato incorrecto"
  // Por ejemplo: 
  // "a" ---> "Es vocal"
  // "u" ---> "Es vocal"
  // "n" ---> "Dato incorrecto"
  // "texto largo" ---> "Dato incorrecto"
  // Tu código:
  if (letra.length > 1) {
    return "Dato incorrecto";
  }

  if (letra.toLowerCase().includes("a")) {
    return "Es vocal";
  }

  if (letra.toLowerCase().includes("e")) {
    return "Es vocal";
  }

  if (letra.toLowerCase().includes("i")) {
    return "Es vocal";
  }

  if (letra.toLowerCase().includes("o")) {
    return "Es vocal";
  }

  if (letra.toLowerCase().includes("u")) {
    return "Es vocal";
  }

  return "Dato incorrecto";
  
}

module.exports = esVocal;
