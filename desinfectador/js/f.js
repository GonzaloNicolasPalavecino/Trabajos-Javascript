function antivirus(mensaje, l1, l2) {
let resultado = '';
for (let i = 0; i < mensaje.length; i++) {
  if (mensaje[i] == l2 && mensaje[i - 1] == l1 && mensaje[i + 1] == l1) {
} else {
  resultado += mensaje[i];
}
}
  return resultado;
}
