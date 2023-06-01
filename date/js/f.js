    function CantidadDias() {
      
	  var fechaIngresada = new Date(prompt("Ingrese una fecha (yyyy-mm-dd):"));
      var fechaActual = new Date();
      
	  var añoNuevo = new Date(fechaActual.getFullYear() + 1, 0, 1); 
      var diferencia = añoNuevo.getTime() - fechaIngresada.getTime(); 
      var diasFaltantes = Math.ceil(diferencia / (1000 * 60 * 60 * 24)); 
	  
	 	let mensaje ='';
		mensaje = "Días restantes para Año Nuevo: " + diasFaltantes;
		return mensaje;

    }

    