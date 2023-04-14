function ContarMultiplosde2(numeros) {
  let contador = 0;
  for (var i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
      contador++;
    }
  }
  return contador;
}

function ContarMultiplosde3(numeros) {
  let contador = 0;
  for (var i = 0; i < numeros.length; i++) {
    if (numeros[i] % 3 == 0) {
      contador++;
    }
  }
  return contador;
}

function ContarMultiplosde4(numeros) {
  let contador = 0;
  for (var i = 0; i < numeros.length; i++) {
    if (numeros[i] % 4 == 0) {
      contador++;
    }
  }
  return contador;
}

function ContarMultiplosde5(numeros) {
  let contador = 0;
  for (var i = 0; i < numeros.length; i++) {
    if (numeros[i] % 5 == 0) {
      contador++;
    }
  }
  return contador;
}
