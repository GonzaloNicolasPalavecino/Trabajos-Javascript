class CZooAnimal {
  constructor(id, nombre, jaula, tipo, peso) {
    this.id = id;
    this.nombre = nombre;
    this.jaula = jaula;
    this.tipo = tipo;
    this.peso = peso;
  }
}

const listaAnimales = [];

const form = document.getElementById('formulario');
const output = document.getElementById('output');
const submit = document.getElementById('submit');

submit.addEventListener('click', (event) => {
  event.preventDefault();

  const id = parseInt(document.getElementById('id').value);
  const nombre = document.getElementById('nombre').value;
  const jaula = parseInt(document.getElementById('jaula').value);
  const tipo = parseInt(document.getElementById('tipo').value);
  const peso = parseFloat(document.getElementById('peso').value);

  const animal = new CZooAnimal(id, nombre, jaula, tipo, peso);
  listaAnimales.push(animal);


  form.reset();

 
  displayanimales(listaAnimales);
});

function displayanimales(animales) {
  output.innerHTML = ''; 

  animales.forEach(animal => {
    const animalDiv = document.createElement('div');
    animalDiv.innerHTML = "
      <p>ID del Animal: ${animal.id}</p>
      <p>Nombre: ${animal.nombre}</p>
      <p>Número de Jaula: ${animal.jaula}</p>
      <p>Tipo de Animal: ${animal.tipo}</p>
      <p>Peso (kg): ${animal.peso}</p>
      <hr>
    ";
    output.appendChild(animalDiv);
  });
}

