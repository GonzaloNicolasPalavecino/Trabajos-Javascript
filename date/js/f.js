    function CantidadDias() {
      
	  var fechaIngresada = new Date(prompt("Ingrese una fecha (yyyy-mm-dd):"));
      var fechaActual = new Date();
      
	  var a�oNuevo = new Date(fechaActual.getFullYear() + 1, 0, 1); 
      var diferencia = a�oNuevo.getTime() - fechaIngresada.getTime(); 
      var diasFaltantes = Math.ceil(diferencia / (1000 * 60 * 60 * 24)); 
	  
	 	let mensaje ='';
		mensaje = "D�as restantes para A�o Nuevo: " + diasFaltantes;
		return mensaje;

    }

    