function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
  let es_num_primo = true;
  let contador = 2;

  if (numero === 1) {
    return true;
  }

for (let index = 1; index < numero; index++) {
  
  if (numero%index === 0 && index != 1) {
    es_num_primo = false;
  }

}

  return es_num_primo;
}

module.exports = esNumeroPrimo;
