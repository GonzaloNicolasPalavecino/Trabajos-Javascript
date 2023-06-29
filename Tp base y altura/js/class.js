class CRectangulo {
  constructor(base, altura,) {
    this.base = base;
    this.altura = altura;
  }

  calcularArea(area) {
    this.area = this.base * this.altura;	
    return this.area;
  }


}

const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', function(event) 

 {
  event.preventDefault();

  const base = document.getElementById('base').value;
  const altura = document.getElementById('altura').value;
  const areaa = new CRectangulo(base, altura);

  const mostrarArea = document.getElementById('mostrarArea');
  mostrarArea.innerHTML = areaa.calcularArea() 
 }
);

