const form = document.getElementById('traductorForm');
const resultadoElement = document.getElementById('resultado');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const frase = document.getElementById('frase').value;

    try {
        const response = await fetch('/traducir', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ frase }),
        });

        if (response.ok) {
            const traduccion = await response.text();
            resultadoElement.textContent = traduccion;
        } else {
            resultadoElement.textContent = 'Error en la traducción.';
        }
    } catch (error) {
        resultadoElement.textContent = 'Error en la solicitud.';
    }
});

function traducirFrase() {
    const frase = document.getElementById('frase').value;
    const resultadoElement = document.getElementById('resultado');

    const fraseTraducida = frase.replace(/[aeiouAEIOU]/g, '$&p$&');
    
    resultadoElement.textContent = fraseTraducida;
}
