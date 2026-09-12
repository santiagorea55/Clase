// Obtener elementos del HTML
const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const apellidoP = document.getElementById("apellidoP");
const apellidoM = document.getElementById("apellidoM");
const materia1 = document.getElementById("materia1");
const materia2 = document.getElementById("materia2");
const materia3 = document.getElementById("materia3");
const lista = document.getElementById("lista");



// Obtener los alumnos guardados
let alumnos = JSON.parse(localStorage.getItem("alumnos")) || [];

// Mostrar los alumnos al cargar la página
mostrarAlumnos();

// Evento del formulario
formulario.addEventListener("submit", function (evento) {

    // Evitar que la página se recargue
    evento.preventDefault();
    
    let cal1 = Number(materia1.value);
    let cal2 = Number(materia2.value);
    let cal3 = Number(materia3.value);

    // Calcular el promedio correctamente
    let promFinal = (cal1 + cal2 + cal3) / 3;

    // Crear un objeto alumno
    const alumno = {
        nombre: nombre.value,
        apellidoP: apellidoP.value,
        apellidoM: apellidoM.value,
        materia1: cal1,
        materia2: cal2,
        materia3: cal3,
        promedio: promFinal     
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
            <p>Matematicas ${alumno.materia1}</p>
            <p>Español ${alumno.materia2}</p>
            <p>Historia ${alumno.materia3}</p>
            <p>Promedio Final ${alumno.promedio}</p>
            
        `;

        lista.appendChild(elemento);
    });
}