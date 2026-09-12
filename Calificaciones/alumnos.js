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

// Mostrar los alumnos al cargar la página por primera vez
mostrarAlumnos();

// Evento para guardar el alumno al presionar el botón del formulario
formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    let cal1 = Number(materia1.value);
    let cal2 = Number(materia2.value);
    let cal3 = Number(materia3.value);

    const alumno = {
        nombre: nombre.value,
        apellidoP: apellidoP.value,
        apellidoM: apellidoM.value,
        materia1: cal1,
        materia2: cal2,
        materia3: cal3,
        promedio: ((cal1 + cal2 + cal3) / 3).toFixed(2)
    };

    alumnos.push(alumno);
    localStorage.setItem("alumnos", JSON.stringify(alumnos));
    
    mostrarAlumnos();
    formulario.reset();
});

// Función para mostrar y eliminar alumnos
function mostrarAlumnos() {
    lista.innerHTML = "";

    alumnos.forEach(function (alumno, index) {
        const elemento = document.createElement("div");
        elemento.classList.add("alumno");

        elemento.innerHTML = `
            <strong>${alumno.nombre} ${alumno.apellidoP} ${alumno.apellidoM}</strong>
            <p>Matematicas ${alumno.materia1}</p>
            <p>Español ${alumno.materia2}</p>
            <p>Historia ${alumno.materia3}</p>
            <p>Promedio Final ${alumno.promedio}</p>
            <button class="btn-eliminar">Eliminar</button>
        `;

        elemento.querySelector(".btn-eliminar").addEventListener("click", function() {
            alumnos.splice(index, 1);
            localStorage.setItem("alumnos", JSON.stringify(alumnos));
            mostrarAlumnos();
        });

        lista.appendChild(elemento);
    });
}