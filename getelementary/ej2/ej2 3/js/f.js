function concatenar() {
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    document.getElementById('resultado').value = nombre + ' ' + apellido;
}