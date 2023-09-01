// handler.js
const fs = require('fs');

module.exports = (req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    const html = fs.readFileSync('index.html', 'utf-8');
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(html);
  } else if (req.method === 'POST' && req.url === '/api/jugar') {
    let body = '';

    req.on('data', (data) => {
      body += data;
    });

    req.on('end', () => {
      const opcionUsuario = decodeURIComponent(body.split('=')[1]).toLowerCase();
      const opcionServidor = generarOpcionServidor();

      const resultado = resultadoFinal(opcionUsuario, opcionServidor);

      res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end(resultado);
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('404 - Not Found');
  }
};

function generarOpcionServidor() {
  const opciones = ['piedra', 'papel', 'tijera'];
  const random = Math.floor(Math.random() * 3);
  return opciones[random];
}

function resultadoFinal(opcionUsuario, opcionServidor) {
  if (opcionUsuario === opcionServidor) {
    return `Elegiste: ${opcionUsuario}\nLa computadora eligió: ${opcionServidor}\nEmpate :/`;
  } else if (
    (opcionUsuario === 'piedra' && opcionServidor === 'tijera') ||
    (opcionUsuario === 'papel' && opcionServidor === 'piedra') ||
    (opcionUsuario === 'tijera' && opcionServidor === 'papel')
  ) {
    return `Elegiste: ${opcionUsuario}\nLa computadora eligió: ${opcionServidor}\nGanaste :D`;
  } else {
    return `Elegiste: ${opcionUsuario}\nLa computadora eligió: ${opcionServidor}\nPerdiste :(`;
  }
}
