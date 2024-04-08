// Función para mostrar campos dinámicamente según el número de personas
function mostrarCampos() {
    var numPersonas = parseInt(document.getElementById('txtPersonas').value);
    var nombresContainer = document.getElementById('nombresContainer');
    nombresContainer.innerHTML = ""; // Limpiar contenido anterior

    for (var i = 1; i <= numPersonas; i++) {
        var label = document.createElement('label');
        label.textContent = "Escribe el nombre de la persona " + i;

        var input = document.createElement('input');
        input.type = "text";
        input.placeholder = "Nombre de la persona " + i;
        input.required = true;

        nombresContainer.appendChild(label);
        nombresContainer.appendChild(input);
    }
}

// Función para validar la fecha seleccionada
function validarFecha() {
    var fechaInput = document.getElementById('txtFecha');
    var fechaSeleccionada = new Date(fechaInput.value);
    var fechaActual = new Date();

    if (fechaSeleccionada > fechaActual) {
        alert("Por favor, seleccione una fecha válida.");
        fechaInput.value = "";
    }
}

// Función para manejar el envío del formulario
function enviarFormulario(event) {
    event.preventDefault(); // Prevenir el envío del formulario por defecto

    // Obtener los datos del formulario
    var nombre = document.getElementById('textNombre').value;
    var apellido = document.getElementById('txtApellido').value;
    var curp = document.getElementById('txtcurp').value;
    var fechaNacimiento = document.getElementById('txtFecha').value;
    var direccion = document.getElementById('txtDireccion').value;
    var estado = document.getElementById('txtEstado').value;
    var personasEnCasa = document.getElementById('txtPersonas').value;

    // Crear un objeto JSON con los datos
    var formData = {
        "Nombre": nombre,
        "Apellido": apellido,
        "Curp": curp,
        "FechaNacimiento": fechaNacimiento,
        "Direccion": direccion,
        "Estado": estado,
        "PersonasEnCasa": personasEnCasa
    };

    // Convertir el objeto JSON a cadena
    var jsonString = JSON.stringify(formData);

    // Crear un Blob con la cadena JSON
    var blob = new Blob([jsonString], { type: "application/json" });

    // Crear un enlace de descarga y hacer clic en él
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'datos.json';
    a.click();
}

// Asignar eventos a los elementos del DOM
document.getElementById('txtFecha').addEventListener('input', validarFecha);
document.getElementById('myForm').addEventListener('submit', enviarFormulario);
document.getElementById('myForm').addEventListener('submit', function (event) {
    // Aquí puedes agregar lógica adicional para manejar el envío del formulario
    // event.preventDefault(); // Descomentar esta línea si deseas prevenir el envío del formulario por defecto
});
