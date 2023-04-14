      function esFeliz(numero) {
        var sum = 0;
        while (numero > 0) {
          var digito = numero % 10;
          sum += digito * digito;
          numero = Math.floor(numero / 10);
        }
        if (sum === 1) {
          return true;
        } else if (sum === 4) {
          return false;
        } else {
          return esFeliz(sum);
        }
      }

     
      function mostrarNum(limite) {
        var numerosFelices = [];
        for (var i = 1; i <= limite; i++) {
          if (esFeliz(i)) {
            numerosFelices.push(i);
          }
        }
        return numerosFelices;
      }