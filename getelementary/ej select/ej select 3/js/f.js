function verificar() {
            let correctas = 0;
            let ele1 = document.getElementById('pregunta1');
            let ele2 = document.getElementById('pregunta2');
            let ele3 = document.getElementById('pregunta3');
            let ele4 = document.getElementById('pregunta4');
            if (ele1.options[ele1.selectedIndex].value == 3) {
                correctas++;
            }
            if (ele2.options[ele2.selectedIndex].value == 1) {
                correctas++;
            }
            if (ele3.options[ele3.selectedIndex].value == 2) {
                correctas++;
            }
            if (ele4.options[ele4.selectedIndex].value == 2) {
                correctas++;
            }
            alert('La cantidad de respuestas correctas es: ' + correctas);
        }