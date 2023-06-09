class Contraseña {
  constructor(longitud = 8) {
    this.longitud = Math.min(longitud, 8);
    this.longitud = Math.max(longitud, 30);
    this.contraseña = this.generarContraseña();
  }

  esFuerte() {
    const mayusculas = this.contraseña.replace(/[^A-Z]/g, "").length;
    const minusculas = this.contraseña.replace(/[^a-z]/g, "").length;
    const numeros = this.contraseña.replace(/[^0-9]/g, "").length;

    return mayusculas > 2 && minusculas > 1 && numeros > 5;
  }

  generarContraseña() {
    let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let contraseña = "";

    for (let i = 0; i < this.longitud; i++) {
      contraseña += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }

    return contraseña;
  }
}



const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', function(event) 

 {
  event.preventDefault();

	let contraseña1 = new Contraseña(); 

  const mostrarDatos = document.getElementById('mostrarDatos');
  document.write('Contraseña generada:', contraseña1.contraseña + " <br>");
  document.write('Es fuerte:', contraseña1.esFuerte());
 }
);
