document.addEventListener("DOMContentLoaded", function () {
    const participanteForm = document.getElementById("participante-form");
    const mensajeDiv = document.getElementById("mensaje");

    participanteForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const id = participanteForm.querySelector("#id").value;
        const participante = participanteForm.querySelector("#participante").value;

        const xhr = new XMLHttpRequest();
        xhr.open("POST", "agregar_participante.php", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    mensajeDiv.textContent = xhr.responseText;
                } else {
                    console.error("Hubo un error en la petición.");
                }
            }
        };

        const data = `id=${id}&participante=${participante}`;
        xhr.send(data);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const sorteoForm = document.getElementById("sorteo-form");

    sorteoForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const xhr = new XMLHttpRequest();
        xhr.open("POST", "sortear_participante.php", true);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    alert(xhr.responseText);
                } else {
                    console.error("Hubo un error en la petición.");
                }
            }
        };

        xhr.send();
    });
});