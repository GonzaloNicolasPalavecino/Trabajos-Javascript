class CEmpleado {
  constructor(nombre, antiguedad, direccion) {
    this.nombre = nombre;
    this.antiguedad = antiguedad;
    this.direccion = direccion;
  }

  AñosdeServicio() {
    var añoActual = new Date().getFullYear();
    var diferencia = añoActual - this.antiguedad;
    return diferencia;
  }

  viveEn() {
    if (this.direccion.includes("WallStreet")) {
      this.mdireccion = "Vive en WallStreet";
    } else {
      this.mdireccion = "No vive en WallStreet";
    }
  }
}

const empleado1 = new CEmpleado("John Doe", 2014, "5928 WallStreet");
empleado1.viveEn();

const mostrarDatos = `Nombre del empleado: ${empleado1.nombre}<br>  Años de antigüedad: ${empleado1.AñosdeServicio()} <br> Vive o no Vive en: ${empleado1.mdireccion}`;

document.write(mostrarDatos);
