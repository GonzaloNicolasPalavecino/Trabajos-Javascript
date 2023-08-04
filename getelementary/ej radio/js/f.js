function verificar() {
   if (document.getElementById('casilla1').checked) {
        alert('Usted es mayor de edad, puede ingresar a la pagina');
    }
    if (document.getElementById('casilla2').checked) {
        alert('Usted no es mayor de edad y por lo tanto no puede ingresar a la pagina');
    }
}