function verificarPalindromo() {
      
        
        frase = frase.replace(/[\W_]/g, "").toLowerCase();

        
        let esPalindromo = true;
        for (var i = 0; i < frase.length / 2; i++) {
          if (frase[i] != frase[frase.length - i - 1]) {
            esPalindromo = false;
           
          }
        }

        
        if (esPalindromo) {
          alert("SI");
        } else {
          alert("NO");
        }
      }
