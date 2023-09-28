const http = require('http');
const fs = require('fs');

const servidor = http.createServer((envio, mostrar) => {
  if (envio.method == 'GET' && envio.url == '/') {
    mostrar.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    fs.createReadStream('index.html').pipe(mostrar);
  } else if (envio.method == 'GET' && envio.url == '/f.js') {
    mostrar.writeHead(200, { 'Content-Type': 'text/javascript; charset=utf-8' });
    fs.createReadStream('f.js').pipe(mostrar);
  } else if (envio.method == 'POST' && envio.url == '/traducir') {
    let body = '';

    envio.on('data', (data) => {
      body += data;
    });

    envio.on('end', () => {
      const mensajesv = traducirFrase();

      mostrar.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
      mostrar.end(mensajesv);
    });
  }
});

servidor.listen(8888, () => {
  console.log('Servidor web iniciado en el puerto 8888');
});


function traducirFrase() {
    const frase = document.getElementById('frase').value;
    const resultadoElement = document.getElementById('resultado');

    const fraseTraducida = frase.replace(/[aeiouAEIOU]/g, '$&p$&');
    
    resultadoElement.textContent = fraseTraducida;
}

