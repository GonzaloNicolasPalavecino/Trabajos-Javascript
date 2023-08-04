function verificar() {
    let deportes = '';
        if (document.getElementById("checkbox1").checked) {
            deportes = deportes + 'Fútbol ';
        }
        if (document.getElementById("checkbox2").checked) {
            deportes = deportes + 'Básquet ';
        }
        if (document.getElementById("checkbox3").checked) {
             deportes = deportes + 'Tenis';
            }
            alert('Los deportes que selecciono son:' + deportes);
        }