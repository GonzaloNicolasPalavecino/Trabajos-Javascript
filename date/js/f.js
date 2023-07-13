function CantidadDiasAñoNuevo(fecha) {
  var fechaIngresada = new Date(fecha);
  var fechan2 = new Date();
  
  var añoNuevo = new Date(fechan2.getFullYear() + 1, 0, 1); 
  var diferencia = añoNuevo.getTime() - fechaIngresada.getTime(); 
  var diasFaltantes = Math.ceil(diferencia / (1000 * 60 * 60 * 24)); 
  
  return diasFaltantes;
}

function CantidadDiasCatar2022(fecha) {
  var fechaIngresada = new Date(fecha);
  var fechaCatar2022 = new Date("2022-11-21"); 
  
  var diferencia = fechaIngresada.getTime() - fechaCatar2022.getTime();
  var diasTranscurridos = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  
  return diasTranscurridos;
}

function CalcularAñosCompletos(fechaInicio, fechaFin) {
  var inicio = new Date(fechaInicio);
  var fin = new Date(fechaFin);
  
  var AñosTranscurridos = fin.getFullYear() - inicio.getFullYear();
  var ajuste = Math.floor(AñosTranscurridos / (1000 * 60 * 60 * 24 * 365.25));

  
  return AñosTranscurridos - ajuste;
}

function EsDiaLaborable(fecha) {
  var dia = fecha.getDay();
  var mes = fecha.getMonth();
  
  return dia >= 1 && dia <= 5 && mes >= 0 && mes <= 11; 
}

var fecha = prompt("Ingrese fecha actual (yyyy-mm-dd):");
var fechaObj = new Date(fecha);

var fechan2 = prompt("Ingrese fecha lejana (yyyy-mm-dd):");
var fechaObj2 = new Date(fechan2);


var diasFaltantesAñoNuevo = CantidadDiasAñoNuevo(fechaObj);
var diasTranscurridosCatar2022 = CantidadDiasCatar2022(fechaObj);
var AñosCompletos = CalcularAñosCompletos(fechaObj, fechaObj2);
var esDiaLaborable = EsDiaLaborable(fechaObj);

console.log("Dias faltantes para Año Nuevo: " + diasFaltantesAñoNuevo);
console.log("Dias transcurridos desde Catar 2022: " + diasTranscurridosCatar2022);
console.log("Años completos transcurridos: " + AñosCompletos);
console.log("¿Es dia laborable hoy?: " + (esDiaLaborable ? "Sí" : "No"));

