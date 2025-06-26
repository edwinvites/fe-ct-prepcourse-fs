function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  let potencias = 2;
  let es_potencia = false;

  while (potencias <= numero) {
      if (potencias === numero ) {
        es_potencia = true;
      }
      potencias = potencias * 2;

  }

  return es_potencia;
  
}

// console.log(Math.log(Math.E));


module.exports = esPotenciaDeDos;
