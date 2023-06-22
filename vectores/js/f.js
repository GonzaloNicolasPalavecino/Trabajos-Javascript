function Vectores() {
      var n = parseInt(prompt("Ingrese el valor de N:"));
      var vectorA = [];
      var vectorB = [];
      var vectorC = [];
      var suma = 0;
      var multiplosDosYTres = 0;


      for (var i = 0; i < n; i++) {
        var numeroAleatorio = Math.floor(Math.random() * 32000);
        vectorA.push(numeroAleatorio);
        suma += numeroAleatorio;

        if (numeroAleatorio % 2 == 0 && numeroAleatorio % 3 == 0) {
          multiplosDosYTres++;
        }

        if (numeroAleatorio > suma / n) {
          vectorB.push(numeroAleatorio);
        }

        vectorC.push(numeroAleatorio * 2);
      }
		
		console.log("Vector A: " + vectorA.join(", ") + "<br>");
		console.log("Vector B: " + vectorB.join(", ") + "<br>");
	        console.log("Vector C: " + vectorC.join(", ") + "<br>");
		console.log("Promedio del vector A: " + (suma / n).toFixed(2) + "<br>");			        console.log("Multiplos de 2 y 3 del vector A: " + multiplosDosYTres + "<br>");	
     		console.log("Suma del vector A: " + suma + "<br>");
		
    }