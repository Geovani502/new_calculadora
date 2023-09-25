<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $id = $_POST["id"];
    $participante = $_POST["participante"];

    $db = new mysqli("localhost", "root", "", "rifa");
    if ($db->connect_error) {
        die("Error de conexión: " . $db->connect_error);
    }

    $query = "INSERT INTO sorteo (ID, Participante) VALUES ('$id', '$participante')";
    if ($db->query($query) === TRUE) {
        echo "Participante agregado exitosamente.";
    } else {
        echo "Error: " . $query . "<br>" . $db->error;
    }

    $db->close();
}
?>
