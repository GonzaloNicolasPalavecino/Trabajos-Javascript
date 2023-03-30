      function EsGrito(texto) {
        let letras = 0;
        let exclamaciones = 0;

        for (let i = 0; i < texto.length; i++) {
          const caracter = texto.charAt(i);

          if (caracter >= "a" && caracter <= "z") {
            letras++;
          } else if (caracter === "!") {
            exclamaciones++;
          }
        }

        if (exclamaciones > letras) {
          return "ESGRITO";
        } else {
          return "escrito";
        }
      }