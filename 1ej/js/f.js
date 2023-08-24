class CPerson {
  constructor(id, apellido, nombre, fechaNacimiento, email) {
    this._id = id;
    this._apellido = apellido;
    this._nombre = nombre;
    this._fechaNacimiento = fechaNacimiento;
    this._email = email;
  }

  get id() {
    return this._id;
  }

  set id(newId) {
    this._id = newId;
  }

  get apellido() {
    return this._apellido;
  }

  set apellido(newApellido) {
    this._apellido = newApellido;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(newNombre) {
    this._nombre = newNombre;
  }

  get fechaNacimiento() {
    return this._fechaNacimiento;
  }

  set fechaNacimiento(newFechaNacimiento) {
    this._fechaNacimiento = newFechaNacimiento;
  }

  get email() {
    return this._email;
  }

  set email(newEmail) {
    this._email = newEmail;
  }

  isMayorEdad() {
    const fechaActual = new Date();
    const fechaNacimiento = new Date(this._fechaNacimiento);
    const diferenciaTiempo = fechaActual.getTime() - fechaNacimiento.getTime();
    const edad = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24 * 365.25));
    return edad >= 18;
  }

  tieneApellidoS() {
    return this._apellido.charAt(0).toUpperCase() === 'S';
  }

  tieneCorreoGmail() {
    return this._email.endsWith('@gmail.com');
  }
}

const personas = [];

const form = document.getElementById('personForm');
const submitButton = document.getElementById('submitButton');

const personsContainer = document.getElementById('personsContainer');
const ageFilterButton = document.getElementById('ageFilterButton');
const emailFilterButton = document.getElementById('emailFilterButton');
const apellidoFilterButton = document.getElementById('apellidoFilterButton');

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  addPerson();
});

ageFilterButton.addEventListener('click', (event) => {
  event.preventDefault();
  displayPersons(personas.filter(person => person.isMayorEdad()));
});

emailFilterButton.addEventListener('click', (event) => {
  event.preventDefault();
  displayPersons(personas.filter(person => person.tieneCorreoGmail()));
});

apellidoFilterButton.addEventListener('click', (event) => {
  event.preventDefault();
  displayPersons(personas.filter(person => person.tieneApellidoS()));
});

function addPerson() {
  const id = document.getElementById('id_persona').value;
  const apellido = document.getElementById('Apellido_Persona').value;
  const nombre = document.getElementById('Nombre_persona').value;
  const fechaNacimiento = document.getElementById('FechaNac_persona').value;
  const email = document.getElementById('emailPersona').value;

  const person = new CPerson(id, apellido, nombre, fechaNacimiento, email);
  personas.push(person);

  displayPersons(personas);
}

function displayPersons(persons) {
  personsContainer.innerHTML = '';

  persons.forEach(person => {
    const personDiv = document.createElement('div');
    personDiv.innerText = `ID: ${person.id}, Apellido: ${person.apellido}, Nombre: ${person.nombre}, Fecha de Nacimiento: ${person.fechaNacimiento}, Email: ${person.email}`;
    personsContainer.appendChild(personDiv);
  });
}
