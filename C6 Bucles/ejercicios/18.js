function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  let producto = num1 = num2 = 1;
  if (a === b) {
    return a;
  }

  if (a < b) {
    num1 = a;
    num2 = b;
  } else {
     num1 = b;
    num2 = a;   
  }
  
  for (let index = num1; index <= num2; index++) {
    producto = producto * index;
  }

  if (producto === 0) {
    producto = 0;
  }
   
  return producto;
}

// productoEntreNúmeros(-5,5);

module.exports = productoEntreNúmeros;