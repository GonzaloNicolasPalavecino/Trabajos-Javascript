class Numero {
    constructor(valor) {
        this.valor = valor;
    }

	esPrimo() {
        if (this.valor <= 1) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(this.valor); i++) {
            if (this.valor % i == 0) {
                return false;
            }
        }
        return true;
    }

	esPerfecto() {
        if (this.valor <= 1) {
            return false;
        }
        let sumDivisores = 1;
        for (let i = 2; i <= this.valor / 2; i++) {
            if (this.valor % i == 0) {
                sumDivisores += i;
            }
        }
        return sumDivisores == this.valor;
    }

	esPar() {
        return this.valor % 2 == 0;
    }

	esImpar() {
        return !this.esPar();
    }
}

const numeros = [];
const formulario = document.getElementById('formulario');
const tablaResultados = document.getElementById('tablaResultados');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    const numeroInput = document.getElementById('numero');
    const numero = parseFloat(numeroInput.value);
    
    if (!isNaN(numero)) {
        numeros.push(new Numero(numero));
        numeroInput.value = '';
    }
});

const mostrarResultadosButton = document.getElementById('mostrarResultados');
mostrarResultadosButton.addEventListener('click', function() {
    tablaResultados.innerHTML = '';
    numeros.forEach(numero => {
        const row = document.createElement('tr');
        row.innerHTML = `
           <td>${numero.valor}</td>
          <td>${numero.esPrimo() ? 'Sí' : 'No'}</td>
           <td>${numero.esPerfecto() ? 'Sí' : 'No'}</td>
           <td>${numero.esPar() ? 'Sí' : 'No'}</td>
           <td>${numero.esImpar() ? 'Sí' : 'No'}</td>
        `;
        tablaResultados.appendChild(row);
    });
});
