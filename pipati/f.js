function generarOpcionServidor() {
  const opciones = ['piedra', 'papel', 'tijera'];
  const random = Math.floor(Math.random() * 3);
  return opciones[random];
}

function resultadoFinal(opcionUsuario, opcionServidor) {
  if (opcionUsuario === opcionServidor) {
    return `Elegiste: ${opcionUsuario}\nLa computadora eligio: ${opcionServidor}\nEmpate :/`;
  } else if (
    (opcionUsuario === 'piedra' && opcionServidor === 'tijera') ||
    (opcionUsuario === 'papel' && opcionServidor === 'piedra') ||
    (opcionUsuario === 'tijera' && opcionServidor === 'papel')
  ) {
    return `Elegiste: ${opcionUsuario}\nLa computadora eligio: ${opcionServidor}\nGanaste :D`;
  } else {
    return `Elegiste: ${opcionUsuario}\nLa computadora eligio: ${opcionServidor}\nPerdiste :(`;
  }
}

module.exports = {
  generarOpcionServidor,
  resultadoFinal
};
