function calcularModa(tamaño) {
    let vecNum = [];
    for (let i = 0; i < tamaño; i++) {
        vecNum[i] = parseInt(Math.random() * 600);
    }
    vecNum.sort(function (a, b) {
      return a - b;
    });
    document.write("Vector:", vecNum, "<br>Moda:", moda(vecNum));
}

function moda(vec) {
let repes = 0, maxRepes = 0, moda = 0;
  vec.map(n1 => {
  repes = 0;
  vec.map(n2 => {
    if (n1 == n2) { repes++ }
})
    if (repes > maxRepes) {
      maxRepes = repes;
      moda = n1;
}
})
     return moda;
}
