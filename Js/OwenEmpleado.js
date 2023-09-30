import {/* abrirModal, */ validarAnio/*  cargarProveedores, cargarMedicamentos */} from "./Modal.js"
/* document.addEventListener('DOMContentLoaded', function() {
}); */
const URL = "http://localhost:5115/api/farmacia/";
const urlInventario = "inventarioMedicamento";
const urlMovimiento = "MovimientoInventario";
const urlDetalleMovimiento = "detallemovimiento";
const urlPersona = "persona";
const headers = new Headers({ 'Content-Type': 'application/json' });

let modalTitle = document.getElementById("TituloResultadoConsultaInventario");
let modalBody = document.getElementById("resultadoConsultaInventario");
var inputAnio18 = document.getElementById('inputAnio18');
inputAnio18.addEventListener('input', function () {
    validarAnio(inputAnio18);
});
var inputAnio18 = document.getElementById('inputAnio18');
inputAnio18.addEventListener('input', function () {
    validarAnioConsulta(inputAnio18, getConsulta18);
});
var inputAnio27 = document.getElementById('inputAnio27');
inputAnio27.addEventListener('input', function () {
    validarAnio(inputAnio27);
});
var inputAnio27 = document.getElementById('inputAnio27');
inputAnio27.addEventListener('input', function () {
    validarAnioConsulta(inputAnio27, getConsulta27);
});

function validarAnioConsulta(inputAnio,getConsulta) {
    var anio = inputAnio.value;
    if (anio.length === 4 && !isNaN(anio)) {
        var anioElegido = anio;
        getConsulta(anioElegido);
    } 
}
async function getConsulta18(anioElegido) {
    try {
        const response = await (await fetch(`${URL}${urlMovimiento}/consulta18/${anioElegido}`)).json();
        if (response) {
            modalTitle.innerHTML = '';
            let h4 = document.createElement("h4");
            h4.setAttribute("class", "text-center");
            h4.innerHTML = `Consulta 18 <br>Fecha: ${anioElegido}`;
            modalTitle.appendChild(h4);
            modalBody.innerHTML = '';
            for (const element of response) {
                let div = document.createElement("div");
                div.setAttribute("id", `${"IdBorrar"}`);
                div.setAttribute("class", "col col-12 justify-content-center align-items-center");
                div.innerHTML = `
                <div id="${element.id}" class="card mt-3" style="width: auto-rem;">
                    <div class="card-body">
                        <h5 class="card-title text-center"><b>Empleado: </b>${element.empleado}</h5>
                        <p class="card-text text-center"><b>Cantidad de ventas: </b>${element.cantidadVentas}</p>
                    </div>
                </div>`
                modalBody.appendChild(div)
            }
        } else {
            console.error("ta vacio");
        }
    } catch (error) {
        console.error("Error de red: ", error);
    }
}

async function getConsulta27(anioElegido) {
    try {
        const response = await (await fetch(`${URL}${urlPersona}/consulta27/${anioElegido}`)).json();

        // Verificar si la respuesta de la API coincide con el mensaje de no hay resultados
        if (response == "No se encontraron empleados con menos de 5 ventas en 2023") {
            modalTitle.innerHTML = '';
            let h4 = document.createElement("h4");
            h4.setAttribute("class", "text-center");
            h4.innerHTML = `Consulta 27 <br>Fecha: ${anioElegido}`;
            modalTitle.appendChild(h4);
            modalBody.innerHTML = '';
            let mensajeNoEmpleados = document.createElement("p");
            mensajeNoEmpleados.setAttribute("class", "text-center");
            mensajeNoEmpleados.textContent = "No se encontraron empleados con menos de 5 ventas en 2023";
            modalBody.appendChild(mensajeNoEmpleados);
        } else if (response && response.length > 0) {
            // Hay resultados, mostrarlos en el modal
            modalTitle.innerHTML = '';
            let h4 = document.createElement("h4");
            h4.setAttribute("class", "text-center");
            h4.innerHTML = `Consulta 18 <br>Fecha: ${anioElegido}`;
            modalTitle.appendChild(h4);
            modalBody.innerHTML = '';
            for (const element of response) {
                let div = document.createElement("div");
                div.setAttribute("id", `${"IdBorrar"}`);
                div.setAttribute("class", "col col-12 justify-content-center align-items-center");
                div.innerHTML = `
                <div id="${element.id}" class="card mt-3" style="width: auto-rem;">
                    <div class="card-body">
                        <h5 class="card-title text-center"><b>Empleado: </b>${element.empleado}</h5>
                        <p class="card-text text-center"><b>Cantidad de ventas: </b>${element.cantidadVentas}</p>
                    </div>
                </div>`;
                modalBody.appendChild(div);
            }
        } else {
            // Otro manejo de error si es necesario
            console.error("La respuesta de la API no es válida.");
        }
    } catch (error) {
        console.error("Error de red: ", error);
    }
}