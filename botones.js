/*btn_sumar*/
document.getElementById("sumar").addEventListener("click", btnSuma);
/*btn_restar*/
document.getElementById("restar").addEventListener("click", btnResta);
/*btn_dividir*/
document.getElementById("dividir").addEventListener("click", btnDiv);
/*btn_multiplicar*/
document.getElementById("multiplicar").addEventListener("click", btnMult);
/*boton tema*/
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
  let nextButton = document.getElementById("next_pag");
//agrega el evento al boton
  nextButton.addEventListener("click",function(){
//redirige  a la pagina seleccionada
    window.location.href = "avanzada/avanzada.html";
  });
});


