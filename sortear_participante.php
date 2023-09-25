<?php
$db = new mysqli("localhost", "root", "", "rifa");
if ($db->connect_error) {
    die("Error de conexión: " . $db->connect_error);
}

$query = "SELECT * FROM sorteo ORDER BY RAND() LIMIT 1";
$result = $db->query($query);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    echo "El participante ganador es: " . $row["ID"] ." ". $row["Participante"];
} else {
    echo "No hay participantes registrados.";
}

$db->close();
?>
