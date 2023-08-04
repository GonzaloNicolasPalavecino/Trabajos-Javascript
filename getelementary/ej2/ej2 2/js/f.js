function mostrarMayor() {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    if (num1 > num2) {
        alert('El numero mayor es ' + num1 + ' ,El numero menor es ' + num2);
    } else {
        alert('El Numero mayor es ' + num2 + ' ,El numero menor es ' + num2);
        }
}