function calcularPresupuesto() {
    let ele1 = document.getElementById('procesador')
    let precio1 = ele1.options[ele1.selectedIndex].value;
    let ele2 = document.getElementById('monitor')
    let precio2 = ele2.options[ele2.selectedIndex].value;
    let ele3 = document.getElementById('discoduro')
    let precio3 = ele3.options[ele3.selectedIndex].value;
        precio1 = parseInt(precio1);
        precio2 = parseInt(precio2);
        precio3 = parseInt(precio3);
        let suma = precio1 + precio2 + precio3;
        document.getElementById('resultado').value = suma + '$';
}