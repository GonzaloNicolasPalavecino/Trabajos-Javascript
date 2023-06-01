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
		let mensaje1 = '';
		mensaje = "Vector A: " + vectorA.join(", ") + "<br>";
		return mensaje1;
  
		let mensaje2 = '';
		mensaje2 = "Vector B: " + vectorB.join(", ") + "<br>";
		return mensaje2;
  
		let mensaje3 = '';
		mensaje3 =  "Vector C: " + vectorC.join(", ") + "<br>";
		return mensaje3;
	 
		let mensaje4 = '';
		mensaje4 = "Promedio del vector A: " + (suma / n).toFixed(2) + "<br>";
		return mensaje4;
	 
		let mensaje5 = '';
		mensaje5 = "Múltiplos de 2 y 3 en el vector A: " + multiplosDosYTres + "<br>";
		return mensaje5;
      
		let mensaje6 = '';
		mensaje6 = "Suma del vector A: " + suma + "<br>";
		return mensaje6;
    }