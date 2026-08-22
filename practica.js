let contadorPerfectos = 0;
for (let numero = 1; numero <= 1000; numero++) {
  let sumaDivisores = 0;

  for (let divisor = 1; divisor * divisor <= numero; divisor++) {
    if (numero % divisor === 0) {
      let otroFactor = numero / divisor;
      if (divisor !== numero) {
        sumaDivisores += divisor;
      }
      if (otroFactor !== numero && otroFactor !== divisor) {
        sumaDivisores += otroFactor;
      }
    }
  }
  if (sumaDivisores === numero) {
    contadorPerfectos++;
  }
}
console.log("Cantidad de números perfectos entre 1 y 1000:", contadorPerfectos);
