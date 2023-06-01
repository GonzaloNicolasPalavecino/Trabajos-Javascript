function contarVocales() {
    var palabra = prompt("Ingrese una palabra:");
    var cantidadVocales = 0;

   
    palabra = palabra.toLowerCase();

    for (var i = 0; i < palabra.length; i++) {
      var letra = palabra.charAt(i);
      if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
        cantidadVocales++;
      }
    }
    let mensaje= '';
    mensaje = cantidadVocales;
    return mensaje;
  }