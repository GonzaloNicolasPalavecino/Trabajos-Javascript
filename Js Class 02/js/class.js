class CEmpleado {
  constructor(nombre, antiguedad, direccion) {
    this.nombre = nombre;
    this.antiguedad = 2014;
    this.direccion = "64C- WallStreet";
  }
  AñosdeServicio(){
  var Antiguedad = new date();
    var año actual = actual.getFullYear();
    var diferencia = actual.getFullYear() - Antiguedad.getFullYear();

    return diferencia
  }

  viveEn(direccion){
    if(this.direccion = "64C- WallStreet"){
     return "Vive en WallStreet";
    }else {
     return "No vive en WallStreet";
    }
  }
  
}

const empleado1 = new CEmpleado(nombre, antiguedad, direccion);
const localidad = empleado1.ViveEn();
const YearsOld = empleado1.AñosdeServicio()

const mostrarDatos = `Nombre: ${nombre} <br> Localidad: ${direccion} <br> ${localidad} <br> Cantidad de años en servicio: ${YearsOld} <br> Esta en la comanpania desde : ${direccion} `;



document.write(mostrarDatos);
