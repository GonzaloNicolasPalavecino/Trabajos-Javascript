function Japonisador() {
for (var i = 1; i <= numNombres; i++) {
			
			var nombre = prompt("Introduce el nombre " + i + ":");
			
			
			var nombreJapones = "";
			for (var j = 0; j < nombre.length; j++) {
				var letra = nombre[j];
				
				
				if ("bcdfghjklmnpqrstvwxyz".includes(letra.toLowerCase()) && (j == nombre.length - 1 || "aeiou".indexOf(nombre[j + 1].toLowerCase()) == -1)) {
					nombreJapones += letra.toLowerCase() + "u";
				} else {
					nombreJapones += letra;
				}
			}
			
			
			document.write("Konnichi wa, " + nombreJapones + "-san<br>");
		}
}