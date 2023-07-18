function btnSuma() {

    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;

    var suma = parseFloat(n1) + parseFloat(n2);

    let resultado = document.getElementById("resultado");

    resultado.innerHTML = "la suma de: " + n1 + "+" + n2 + " es igual a =" + suma;
}

function btnResta() {

    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;

    var resta = parseFloat(n1) - parseFloat(n2);

    let resultado = document.getElementById("resultado");

    resultado.innerHTML = "la resta de: " + n1 + "-" + n2 + " es igual a =  " + resta;


}

function btnDiv (){

    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;

    var div = parseFloat(n1) / parseFloat(n2);

    let resultado = document.getElementById("resultado");

    resultado.innerHTML = "La division de: "+n1+ "/" +n2+ " es igual a = " + div;
}

function btnMult (){

    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;

    var mult = parseFloat(n1) * parseFloat(n2);

    let resultado = document.getElementById("resultado");

    resultado.innerHTML = "La multiplicacion de: "+n1+ "*" +n2+ " es igual a = " + mult;
}

