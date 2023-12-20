function Tarea() {
    var agregarTarea = document.getElementById("agregarTarea");
    var agregarLista = document.getElementById("agregarLista");

    if (agregarTarea.value.trim() === "") {
        alert("Por favor, ingrese una tarea.");
        return;
    }

    var crearTarea = document.createElement("div");
    crearTarea.className = "tarea";

    crearTarea.innerHTML = `
        <span>${agregarTarea.value}</span>
        <button onclick="CompletarTarea(this)">Completar</button>
    `;

    agregarLista.appendChild(crearTarea);
    agregarTarea.value = "";

    // Verificar si todas las tareas están completas
    var todasLasTareasCompletas = verificarTodasLasTareasCompletas();

    // Habilitar o deshabilitar el botón según el estado de las tareas
    var iniciarOtroDiaBtn = document.getElementById("iniciarOtroDiaBtn");
    iniciarOtroDiaBtn.disabled = !todasLasTareasCompletas;

    // Actualizar el almacenamiento local
    actualizarAlmacenamientoLocal();
}

function CompletarTarea(button) {
    var crearTarea = button.parentElement;
    crearTarea.classList.toggle("tareaCompleta");

    // Verificar si todas las tareas están completas
    var todasLasTareasCompletas = verificarTodasLasTareasCompletas();

    // Habilitar o deshabilitar el botón según el estado de las tareas
    var iniciarOtroDiaBtn = document.getElementById("iniciarOtroDiaBtn");
    iniciarOtroDiaBtn.disabled = !todasLasTareasCompletas;

    // Aplicar la clase "botonCompletar" al botón
    button.classList.toggle("botonCompletar");

    // Actualizar el almacenamiento local
    actualizarAlmacenamientoLocal();
}

function verificarTodasLasTareasCompletas() {
    var tareas = document.getElementsByClassName("tarea");
    for (var i = 0; i < tareas.length; i++) {
        if (!tareas[i].classList.contains("tareaCompleta")) {
            return false; // Al menos una tarea no está completa
        }
    }
    return true; // Todas las tareas están completas
}

function IniciarOtroDia() {
    var agregarLista = document.getElementById("agregarLista");
    agregarLista.innerHTML = ""; // Elimina todas las tareas existentes

    // Deshabilitar el botón después de reiniciar
    var iniciarOtroDiaBtn = document.getElementById("iniciarOtroDiaBtn");
    iniciarOtroDiaBtn.disabled = true;

    // Actualizar el almacenamiento local
    actualizarAlmacenamientoLocal();
}

function actualizarAlmacenamientoLocal() {
    // Obtener el contenido de la lista de tareas y almacenarlo en el localStorage
    var agregarLista = document.getElementById("agregarLista").innerHTML;
    localStorage.setItem("tasks", agregarLista);
}







