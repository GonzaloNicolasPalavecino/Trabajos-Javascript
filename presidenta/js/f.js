function EsPrimo(n) {
       if (n <= 1) {
          return false;
        }
        for (let i = 2; i <= Math.sqrt(n); i++) {
          if (n % i == 0) {
            return false;
          }
        }
        return true;
      }

      function SumaDigitosPrimo(n) {
        let sum = 0;
        while (n > 0) {
          sum += n % 10;
          n = Math.floor(n / 10);
        }
        return EsPrimo(sum);
      }

      function NumerosPresidenta(a, b) {
        let numeros = [];
        for (let i = a; i <= b; i++) {
          if (EsPrimo(i) && SumaDigitosPrimo(i)) {
            numeros.push(i);
          }
        }
        return numeros;
      }
