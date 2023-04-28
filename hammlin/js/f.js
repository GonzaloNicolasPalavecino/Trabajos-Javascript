function hammlin(){

  
    let binario1 = num1.split('');
    let binario2 = num2.split('');

  
    
    let distancia = 0;
    for (let i = 0; i < binario1.length; i++) {
      if (binario1[i] !== binario2[i]) {
        distancia++;
      }
    }

    let mensaje= '';
    mensaje = "N1 = " + num1 + " N2 = " + num2 + " - Distancia de Hamming: " + distancia;
    return mensaje;






}