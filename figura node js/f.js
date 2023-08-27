const http = require('http');
const fs = require('fs');

const servidor = http.createServer((envio, mostrar) => {
	if (envio.method == 'GET' && envio.url == '/') {
		mostrar.writeHead(200, { 'Content-Type': 'text/html' });
		fs.createReadStream('index.html').pipe(mostrar);
	} else if (envio.method == 'POST' && envio.url == '/generarFigura') {

let body = '';

envio.on('data', (data) => {
body += data;
});

envio.on('end', () => {
const numeroLineas = parseInt(body.split('=')[1]);

const figura = generarFigura(numeroLineas);

mostrar.writeHead(200, { 'Content-Type': 'text/plain' });
mostrar.end(figura);
});
}
});

servidor.listen(8888, () => {
console.log('Servidor web iniciado en el puerto 8888');
});

function generarFigura(numeroLineas) {
let figura = '';
const espacio = ' ';
const asterisco = '*';
const letraO = 'o';

for (let i = 1; i <= numeroLineas; i++) {
	for (let j = 1; j <= numeroLineas - i; j++) {
		figura += espacio + espacio;
}

for (let k = 1; k <= i * 2 - 1; k++) {
	if (k % 2 == 0) {
		figura += letraO + espacio;
	} else {
		figura += asterisco + espacio;
	}
}

	figura += '\n';
}
return figura;
}