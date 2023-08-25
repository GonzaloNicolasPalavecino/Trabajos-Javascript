class Inmueble {
    constructor(propietario, transaccion, costo, habitaciones, baños, terreno, cubierta) {
        this.propietario = propietario;
        this.transaccion = transaccion;
        this.costo = costo;
        this.habitaciones = habitaciones;
        this.baños = baños;
        this.terreno = terreno;
        this.cubierta = cubierta;
    }

    mostrarResultados() {
        const resultadosDiv = document.getElementById('resultados');
        resultadosDiv.innerHTML = '';

        const listaHTML = '<h3>Inmuebles Registrados:</h3><ul>' + inmuebles.map(inmueble =>
            `<li>Propietario: ${inmueble.propietario}, Transaccion: ${inmueble.transaccion}, Costo: $${inmueble.costo}, Habitaciones: ${inmueble.habitaciones}, Baños: ${inmueble.baños}, Terreno: ${inmueble.terreno} m², Cubierta: ${inmueble.cubierta} m²</li>`
        ).join('') + '</ul>';

        resultadosDiv.innerHTML = listaHTML;
    }
}

const inmuebles = [];

document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById('formulario');
   formulario.addEventListener('submit', function (event) {
        event.preventDefault();

        const propietario = document.getElementById('propietario').value;
        const transaccion = document.getElementById('transaccion').value;
        const costo = parseFloat(document.getElementById('costo').value);
        const habitaciones = parseInt(document.getElementById('habitaciones').value);
        const baños = parseInt(document.getElementById('baños').value); 
        const terreno = parseFloat(document.getElementById('terreno').value);
        const cubierta = parseFloat(document.getElementById('cubierta').value);

        const inmueble = new Inmueble(propietario, transaccion, costo, habitaciones, baños, terreno, cubierta);
        inmuebles.push(inmueble);
        document.getElementById('formulario').reset();
        inmueble.mostrarResultados();
    });
});
