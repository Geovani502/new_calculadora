<!DOCTYPE html>
<html>
<head>
    <title>Sorteo</title>
    <!-- Agregar enlace al archivo de estilos de Bootstrap -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <script src="script.js"></script>
</head>
<body>
    <div class="container mt-5">
        <h1 class="mb-4">Sorteo</h1>
        <form id="participante-form">
            <div class="form-group">
                <label for="id">Número:</label>
                <input type="number" class="form-control" name="id" id="id" required>
            </div>
            <div class="form-group">
                <label for="participante">Participante:</label>
                <input type="text" class="form-control" name="participante" id="participante" required>
            </div>
            <button type="submit" class="btn btn-primary">Agregar Participante</button>
        </form>

        <div id="mensaje" class="mt-4"></div>

        <form id="sorteo-form">
            <button type="submit" class="btn btn-success">Sortear Participante</button>
        </form>
    </div>

    <!-- Agregar enlace al archivo de scripts de Bootstrap y jQuery (requisito para Bootstrap) -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>
