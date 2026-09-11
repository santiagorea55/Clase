// Obtener elementos del HTML
const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const apellidop = document.getElementById("apellidop");
const apellidoM = document.getElementById("apellidoM");
const carrera = document.getElementById("carrera");
const numcontrol = document.getElementById("numcontrol");
const lista = document.getElementById("lista");


// Obtener los alumnos guardados
let alumnos = JSON.parse(localStorage.getItem("alumnos")) || [];

// Mostrar los alumnos al cargar la página
mostrarAlumnos();

// Evento del formulario
formulario.addEventListener("submit", function (evento) {

    // Evitar que la página se recargue
    evento.preventDefault();

    // Crear un objeto alumno
    const alumno = {
        nombre: nombre.value,
        apellidoP: apellidoP.value,
        apellidoM: apellidoM.value,
        carrera: carrera.value,
        numcontrol: numcontrol.value
    };

    // Agregar el alumno al arreglo
    alumnos.push(alumno);

    // Guardar en localStorage
    localStorage.setItem(
        "alumnos",
        JSON.stringify(alumnos)
    );

    // Mostrar nuevamente la lista
    mostrarAlumnos();

    // Limpiar formulario
    formulario.reset();

});

// Función para mostrar alumnos
function mostrarAlumnos() {

    lista.innerHTML = "";

    alumnos.forEach(function (alumno) {

        const elemento = document.createElement("div");

        elemento.classList.add("alumno");

        elemento.innerHTML = `
            <strong>${alumno.nombre} ${alumno.apellidoP} ${alumno.apellidoM}</strong>
            <p>${alumno.carrera}</p>
            <p>${alumno.numcontrol}</p>
        `;

        lista.appendChild(elemento);
    });
}