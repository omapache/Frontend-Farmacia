import {abrirModal, validarAnio, cargarProveedores, cargarMedicamentos} from "./Modal.js"
/* document.addEventListener('DOMContentLoaded', function() {
    cargarProveedores(select);
    cargarMedicamentos(selectMedicamento5);
}); */
const URL = "http://localhost:5115/api/farmacia/";
const urlInventario = "inventarioMedicamento";
const urlMovimiento = "MovimientoInventario";
const urlDetalleMovimiento = "detallemovimiento";
const urlPersona = "persona";
const headers = new Headers({ 'Content-Type': 'application/json' });

let modalTitle = document.getElementById("TituloResultadoConsulta");
let modalBody = document.getElementById("resultadoConsulta");



var inputAnio24 = document.getElementById('inputAnio24');
inputAnio24.addEventListener('input', function () {
    validarAnio(inputAnio24);
});
var inputAnio24 = document.getElementById('inputAnio24');
inputAnio24.addEventListener('input', function () {
    validarAnioConsulta(inputAnio24, getConsulta24);
});
function validarAnioConsulta(inputAnio,getConsulta) {
    var anio = inputAnio.value;
    if (anio.length === 4 && !isNaN(anio)) {
        var anioElegido = anio;
        getConsulta(anioElegido);
    } 
}

async function getConsulta24(anioElegido) {
    try {
        const response = await fetch(`${URL}${urlDetalleMovimiento}/consulta24/${anioElegido}`);

        modalTitle.innerHTML = '';
        let h4 = document.createElement("h4");
        h4.setAttribute("class", "text-center");
        h4.innerHTML = `Consulta 24 <br>Fecha: ${anioElegido}`;
        modalTitle.appendChild(h4);
        modalBody.innerHTML = '';

        // Verificar el tipo de contenido de la respuesta
        const contentType = response.headers.get('Content-Type');

        if (contentType && contentType.includes('application/json')) {
            // Si la respuesta es JSON, analizarla
            const data = await response.json();

            // Continuar con la iteración si es un arreglo JSON válido
            if (data && Array.isArray(data)) {
                for (const element of data) {
                    let div = document.createElement("div");
                    div.setAttribute("id", `${"IdBorrar"}`);
                    div.setAttribute("class", "col col-12 justify-content-center align-items-center");
                    div.innerHTML = `
                    <div id="${element.id}" class="card mt-3" style="width: auto-rem;">
                        <div class="card-body">
                            <h5 class="card-title text-center"><b>Proveedor: <br> </b>${element}</h5>
                        </div>
                    </div>`
                    modalBody.appendChild(div);
                }
            } else {
                console.error("La respuesta JSON no es un arreglo válido.");
            }
        } else {
            // Si no es JSON, mostrar el contenido de la respuesta como texto
            const textContent = await response.text();
            let div = document.createElement("div");
            div.setAttribute("id", `${"IdBorrar"}`);
                    div.setAttribute("class", "col col-12 justify-content-center align-items-center");
                    div.innerHTML = `
                    <div id="id" class="card mt-3" style="width: auto-rem;">
                        <div class="card-body">
                            <h5 class="card-title text-center"><b>Proveedor: <br> </b>${textContent}</h5>
                        </div>
                    </div>`
                    modalBody.appendChild(div);
        }
    } catch (error) {
        console.error("Error de red: ", error);
    }
}
