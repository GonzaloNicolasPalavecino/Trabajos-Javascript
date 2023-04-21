function EncontrarMediana(){
		
		var muestra = new Array(hastaN);
		for (var i = 0; i < hastaN; i++) {
			var valor = parseInt(prompt("Ingrese el valor " + (i+1) + " de la muestra:"));
			if (isNaN(valor)) {
				break;
			} else {
				muestra[i] = valor;
			}
		}
		
		
		var n = i; 
		muestra.length = n; 
		muestra.sort(function(a, b) {
			return a - b;
		});
		
		
		var mediana;
		if (n % 2 == 0) {
			mediana = (muestra[n/2-1] + muestra[n/2]) * 2;
		} else {
			mediana = muestra[Math.floor(n/2)] * 2;
		}
		let mensaje ='';
		mensaje = "La mediana es: " + mediana + "<br>";
		return mensaje;
	
	
	
	
}
