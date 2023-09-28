function traducirFrase() {
    const frase = document.getElementById('frase').value;
    const resultadoElement = document.getElementById('resultado');

    const fraseTraducida = frase.replace(/[aeiouAEIOU]/g, '$&p$&');
    
    resultadoElement.textContent = fraseTraducida;
}