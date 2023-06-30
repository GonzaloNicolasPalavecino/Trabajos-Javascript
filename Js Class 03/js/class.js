    class CPersona {
      constructor(nombre, fechaNacimiento, dni, genero, peso = 0, altura = 0) {
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
        this.dni = dni;
        this.genero =  this.genero;
        this.peso = peso;
        this.altura = altura;

      }

      calcularIMC() {

	this.altura = this.altura / 100;
  var imc = Math.round(this.peso / (this.altura * this.altura));

  if (imc < 20) {
    this.imc =  -1; //peso bajo
  } else if (imc >= 20 && imc <= 25) {
    this.imc = 0; // buen peso
  } else {
    this.imc = 1; //sobre peso
  }
}


      esMayorDeEdad() {
        var fechaNacimiento = new Date(this.fechaNacimiento);
        var fechaActual = new Date();

     	var diferencia = fechaActual.getTime() - fechaNacimiento.getTime();
	var edad = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 365.25));

        return edad >= 18;
      }

	comprobarGenero(genero) {
 	 if (this.genero == 'H') {
 	   this.gnro = "Hombre"; 
  	} else if (this.genero == 'M') {
  	  this.gnro = "Mujer"; 
  	} else if (this.genero == 'X') {
 	   this.gnro = "No Binario";
 	 } else {
 	   return false;
 	 }

}	

   }

    const formulario = document.getElementById('formulario');
     formulario.addEventListener('submit', function(event) {
       event.preventDefault();

      const nombre = document.getElementById('nombre').value;
      const fechaNacimiento = document.getElementById('fechaNacimiento').value;
      const dni = document.getElementById('dni').value;
      const genero = document.getElementById('genero').value;
      const peso = parseFloat(document.getElementById('peso').value);
      const altura = parseFloat(document.getElementById('altura').value);

      const persona = new CPersona(nombre, fechaNacimiento, dni, genero, peso, altura);
       const esMayor = persona.esMayorDeEdad();
       let imc;
       let gnro;
	   
	   persona.calcularIMC();
	   imc = persona.imc;
	   
	   persona.comprobarGenero();
	   gnro = persona.comprobarGenero();
       
	   
	  


      const mostrarDatos = `Nombre: ${nombre} <br> Fecha de Nacimiento: ${fechaNacimiento}<br> DNI: ${dni}<br> Genero: ${gnro}<br> Peso: ${peso} kg<br> Altura: ${altura} m<br> IMC: ${imc}<br> Es mayor de edad: ${esMayor ? 'Sí' : 'No'}`;
      const datosPersona = document.getElementById('datosPersona');
      datosPersona.innerHTML = mostrarDatos;
    });
