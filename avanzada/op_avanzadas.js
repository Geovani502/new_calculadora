let valorActual = "";
let valorAnterior = "";
let operador = "";

const displayValorAnterior = document.getElementById("valor-anterior");
const displayValorActual = document.getElementById("valor-actual");



function deleteAll() {
    valorActual = "";
    valorAnterior = "";
    operador = "";
    actualizarDisplay();
    displayValorAnterior.textContent = "";

    console.log("listo");
  }
  
  function deleteValue() {
    valorActual = valorActual.slice(0, -1);
    actualizarDisplay();
  
    console.log("listo");
  }

function addNumber(num) {
  valorActual += num;
  actualizarDisplay();
}

function addDecimal() {
  if (valorActual.indexOf(".") === -1) {
    valorActual += ".";
    actualizarDisplay();
  }
}

function actualizarDisplay() {
  displayValorActual.textContent = valorActual;
}

function operate(op) {
  if (op === "sqrt") {
    valorActual = Math.sqrt(parseFloat(valorActual));
  } else if (op === "^") {
    valorAnterior = valorActual + " ^ ";
    operador = "^";
    valorActual = "";
  } else {
    if (valorAnterior && valorActual) {
      calculate();
    }
    operador = op;
    valorAnterior = valorActual + " " + operador + " ";
    valorActual = "";
  }
  actualizarDisplay();
  displayValorAnterior.textContent = valorAnterior;
}

function calculate() {
  const prev = parseFloat(valorAnterior);
  const current = parseFloat(valorActual);
  if (isNaN(prev) || isNaN(current)) return;
  switch (operador) {
    case "+":
      valorActual = prev + current;
      break;
    case "-":
      valorActual = prev - current;
      break;
    case "*":
      valorActual = prev * current;
      break;
    case "%":
      valorActual = prev / current;
      break;
    case "^":
      valorActual = Math.pow(prev, current);
      break;
    default:
      return;
  }
  valorAnterior = "";
  operador = "";
  actualizarDisplay();
}

const themeButton = document.getElementById('themeButton');
themeButton.addEventListener('click', () => {
  // Obtén el elemento <body>
  const body = document.body;

  // Alterna la clase 'dark-theme' en el <body>
  body.classList.toggle('dark-theme');
});

// agrega un evento de clic al boton 

document.addEventListener("DOMContentLoaded",function(){
  // busca el boton por su id
    let nextButton = document.getElementById("before_pag");
  //agrega el evento al boton
    nextButton.addEventListener("click",function(){
  //redirige  a la pagina seleccionada
      window.location.href = "../index.html";
    });
  });
  

