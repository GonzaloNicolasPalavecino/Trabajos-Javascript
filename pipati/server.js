const http = require('http');
const fs = require('fs');
const { generarOpcionServidor, resultadoFinal } = require('./f.js');

const servidor = http.createServer((envio, mostrar) => {
  if (envio.method === 'GET' && envio.url === '/') {
    mostrar.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    fs.createReadStream('index.html').pipe(mostrar);
  } else if (envio.method === 'GET' && envio.url === '/f.js') {
    mostrar.writeHead(200, { 'Content-Type': 'text/javascript; charset=utf-8' });
    fs.createReadStream('f.js').pipe(mostrar);
  } else if (envio.method === 'POST' && envio.url === '/jugar') {
    let body = '';

    envio.on('data', (data) => {
      body += data;
    });

    envio.on('end', () => {
      const opcionUsuario = body.split('=')[1].toLowerCase();
      const opcionServidor = generarOpcionServidor();

      const resultado = resultadoFinal(opcionUsuario, opcionServidor);

      mostrar.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
      mostrar.end(resultado);
    });
  }
});

servidor.listen(process.env.PORT || 8888, () => {
  console.log('Servidor web iniciado en el puerto ' + (process.env.PORT || 8888));
});
