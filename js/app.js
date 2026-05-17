const INPUT1 = document.getElementById("num1");
const INPUT2 = document.getElementById("num2");
const RESULTADO = document.getElementById("resultado");

function calcularSuma() {
  const NUM1 = parseInt(INPUT1.value);
  const NUM2 = parseInt(INPUT2.value);

  if (isNaN(NUM1) || isNaN(NUM2)) {
      RESULTADO.textContent = "Por favor, ingrese ambos números.";
      INPUT1.focus();
      return;
  }

  const start = Math.min(NUM1, NUM2);
  const end = Math.max(NUM1, NUM2);

  const steps = [];
  let sum = 0;

  for (let i = start; i <= end; i++) {
      steps.push(i);
      sum += i;
  }

  RESULTADO.textContent = `La suma de los numeros entre ${start} y ${end} es ${sum}`;

  INPUT1.value = '';
  INPUT2.value = '';
  INPUT1.focus();
}