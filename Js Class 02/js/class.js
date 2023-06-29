class CEmpleado {
  constructor(nombre, antiguedad, direccion) {
    this.nombre = nombre;
    this.antiguedad = antiguedad;
    this.direccion = direccion;
  }
}

const empleado1 = new CEmpleado("Robert", 2014, "64C- WallStreet");
document.write("Nombre: " + empleado1.nombre + "<br>");
document.write("Años de antiguedad: " + empleado1.antiguedad + "<br>");
document.write("Direccion: " + empleado1.direccion + "<br>");
