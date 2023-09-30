import {abrirModal, cargarMedicamentos} from "./Modal.js"
document.addEventListener('DOMContentLoaded', function() {
    cargarMedicamentos(selectMedicamento12);
});
const URL = "http://localhost:5115/api/farmacia/";
const urlInventario = "inventarioMedicamento";
const urlMovimiento = "MovimientoInventario";
const urlDetalleMovimiento = "detallemovimiento";
const urlPersona = "persona";
const headers = new Headers({ 'Content-Type': 'application/json' });

let modalTitle = document.getElementById("TituloResultadoConsultaInventario");
let modalBody = document.getElementById("resultadoConsultaInventario");

var selectMedicamento12 = document.getElementById('dropdownMedicamento12');
if (selectMedicamento12) {
    selectMedicamento12.addEventListener('change', function () {
        abrirModal();
    });
}
let botonConsulta12 = document.getElementById('botonConsulta12');

botonConsulta12.addEventListener("click", function (e) {
    e.preventDefault(); // Evita el envío del formulario por defecto
    getConsulta12();
});
const botonConsulta33 = document.getElementById('botonConsulta33');
botonConsulta33.addEventListener("click", function (e) {
    e.preventDefault(); // Evita el envío del formulario por defecto
    getConsulta33();
});
async function getConsulta12() {
    let Medicamentos = document.getElementById('dropdownMedicamento12');
    let MedicamentosSeleccionado = Medicamentos.selectedIndex;
    let MedicamentosSeleccionadoNombre = Medicamentos.options[MedicamentosSeleccionado].text;
    try {
        const response = await (await fetch(`${URL}${urlInventario}/consulta12/${MedicamentosSeleccionadoNombre}`)).json();
        if (response) {
            modalTitle.innerHTML = '';
            let h4 = document.createElement("h4");
            h4.setAttribute("class", "text-center");
            h4.innerHTML = `Consulta 12 <br>Medicamento: ${MedicamentosSeleccionadoNombre}`;
            modalTitle.appendChild(h4);
            modalBody.innerHTML = '';
            for (const element of response) {
                let div = document.createElement("div");
                div.setAttribute("id", `${"IdBorrar"}`);
                div.setAttribute("class", "col col-12 justify-content-center align-items-center");
                div.innerHTML = `
                <div id="${element.id}" class="card mt-3" style="width: auto-rem;">
                    <div class="card-body">
                        <h5 class="card-title text-center"><b>Paciente: </b>${element.nombre}</h5>
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

async function getConsulta33() {
    try {
        const response = await (await fetch(`${URL}${urlPersona}/consulta33`)).json();

        // Verificar si la respuesta de la API coincide con el mensaje de no hay resultados
        if (response == "") {
            modalTitle.innerHTML = '';
            let h4 = document.createElement("h4");
            h4.setAttribute("class", "text-center");
            h4.innerHTML = `Consulta 33`;
            modalTitle.appendChild(h4);
            modalBody.innerHTML = '';
            let mensajeNoEmpleados = document.createElement("p");
            mensajeNoEmpleados.setAttribute("class", "text-center");
            mensajeNoEmpleados.textContent = "No se encontraron Pacientes que hayan comprado algo";
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