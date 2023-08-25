class CEmpleado {
    constructor(apellido, nombre, genero, sueldoNeto, fechaIngreso) {
        this.apellido = apellido;
        this.nombre = nombre;
        this.genero = genero;
        this.sueldoNeto = sueldoNeto;
        this.fechaIngreso = fechaIngreso;
    }
}

const empleados = [];

const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    const apellido = document.getElementById('apellido').value;
    const nombre = document.getElementById('nombre').value;
    const genero = document.getElementById('genero').value;
    const sueldoNeto = parseFloat(document.getElementById('sueldoNeto').value);
    const fechaIngreso = new Date(document.getElementById('fechaIngreso').value);

    const empleado = new CEmpleado(apellido, nombre, genero, sueldoNeto, fechaIngreso);

    empleados.push(empleado);

    document.getElementById('formulario').reset();
});

const mostrarResultadosButton = document.getElementById('mostrarResultados');
mostrarResultadosButton.addEventListener('click', function() {
    const resultadosDiv = document.getElementById('resultados');

    const mujeresConSueldoMayor400K = empleados.filter(empleado => empleado.genero == 'femenino' && empleado.sueldoNeto > 400000).length;

  
    const hombresConSueldoEntre150K200K = empleados.filter(empleado => empleado.genero == 'masculino' && empleado.sueldoNeto >= 150000 && empleado.sueldoNeto <= 200000);

    const fechaActual = new Date();

   
    const personasConAntiguedadSueldo = empleados.filter(empleado => {
        const antiguedad = Math.floor((fechaActual - empleado.fechaIngreso) / (1000 * 60 * 60 * 24 * 365)); 
        return antiguedad > 5 && empleado.sueldoNeto > 350000;
    });

   
    resultadosDiv.innerHTML = `
        Cantidad de empleados femeninas con sueldo mayor a 400,000: ${mujeresConSueldoMayor400K}<br>
        Cantidad de empleados masculinos con sueldo entre 150,000 y 200,000:<br>
        ${hombresConSueldoEntre150K200K.map(empleado => `Nombre y Apellido: ${empleado.nombre} ${empleado.apellido}`).join('<br>') || 'Ninguno'}<br><br>
        Cantidad de empleados con antiguedad mayor a 5 años y sueldo mayor a 350,000:<br><br>
        ${personasConAntiguedadSueldo.map(empleado => `Nombre y Apellido: ${empleado.nombre} ${empleado.apellido}`).join('<br>') || 'Ninguno'}
    `;
});
