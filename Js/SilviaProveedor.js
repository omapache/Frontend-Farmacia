import {validarAnio} from "./Modal.js"

const URL = "http://localhost:5115/api/farmacia/";
const urlProducto = "Producto";
const urlPersona = "Persona";
const urlInventario = "InventarioMedicamento";
const urlMovInventario = "MovimientoInventario";
const headers = new Headers({ 'Content-Type': 'application/json' });

const botonConsulta11 = document.getElementById('botonConsulta11');

botonConsulta11.addEventListener("click", function (e) {
    e.preventDefault();
    getConsulta11();
});

const botonConsulta29 = document.getElementById('botonConsulta29');

botonConsulta29.addEventListener("click", function (e) {
    e.preventDefault();
    getConsulta29();
});

var inputAnio35 = document.getElementById('inputAnio35');
inputAnio35.addEventListener('input', function () {
    validarAnio(inputAnio35);
});

var inputAnio35 = document.getElementById('inputAnio35');
inputAnio35.addEventListener('input', function () {
    validarAnioConsulta(inputAnio35, getConsulta35);
});

function validarAnioConsulta(inputAnio,getConsulta) {
    var anio = inputAnio.value;
    if (anio.length === 4 && !isNaN(anio)) {
        var anioElegido = anio;
        getConsulta(anioElegido);
    } 
}

async function getConsulta11() {
    try {
        const response = await (await fetch(`${URL}${urlProducto}/consulta11/medicamentosProveedor`)).json();
        console.log(response);

        if (response) {
            let modalTitle = document.getElementById("TituloResultadoConsultaInventario");
            let h1 = document.createElement("h4");
            h1.innerHTML = "Consulta 11";
            modalTitle.appendChild(h1);
            let modalBody = document.getElementById("resultadoConsultaInventario");
            for(const element of response){
                let div = document.createElement("div");
                div.setAttribute("id",`${"IdBorrar"}`);
                div.setAttribute("class","col col-12 justify-content-center align-items-center");
                div.innerHTML = `
                <div id="${element.id}" class="card mt-3" style="width: auto-rem;">
                    <div class="card-body">
                        <h5 class="card-title text-center"><b>Proveedor: </b>${element.nombreProveedor}</h5>
                        <p class="card-text"><b>Cantidad de medicamentos: </b>${element.numeroMedicamentos}</p>
                    </div>
                </div>`
            modalBody.appendChild(div)
            }
        console.log(response);
        } else {
            console.error("ta vacio");
        }
    } catch (error) {
        console.error("Error de red: ", error);
    }
}

async function getConsulta29() {
    try {
        const response = await (await fetch(`${URL}${urlPersona}/consulta29/proveedoresMedi`)).json();
        console.log(response);

        if (response) {
            let modalTitle = document.getElementById("TituloResultadoConsultaInventario");
            let h1 = document.createElement("h4");
            h1.innerHTML = "Consulta 29";
            modalTitle.appendChild(h1);
            let modalBody = document.getElementById("resultadoConsultaInventario");
            for(const element of response){
                let div = document.createElement("div");
                div.setAttribute("id",`${"IdBorrar"}`);
                div.setAttribute("class","col col-12 justify-content-center align-items-center");
                div.innerHTML = `
                <div id="${element.id}" class="card mt-3" style="width: auto-rem;">
                    <div class="card-body">
                        <h5 class="card-title text-center"><b>Proveedor: </b>${element.proveedorId}</h5>
                        <p class="card-text"><b>Id del proveedor: </b>${element.nombreProveedor}</p>
                    </div>
                </div>`
            modalBody.appendChild(div)
            }
        console.log(response);
        } else {
            console.error("ta vacio");
        }
    } catch (error) {
        console.error("Error de red: ", error);
    }
}

async function getConsulta35(anioElegido) {
    try {
        const response = await fetch(`${URL}${urlPersona}/consulta35/proveedorMedi/${anioElegido}`);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        let modalTitle = document.getElementById("TituloResultadoConsultaInventario");
        let modalBody = document.getElementById("resultadoConsultaInventario");
        modalTitle.innerHTML = '';
        let h4 = document.createElement("h4");
        h4.setAttribute("class", "text-center");
        h4.innerHTML = `Consulta 35 <br>Fecha: ${anioElegido}`;
        modalTitle.appendChild(h4);
        modalBody.innerHTML = '';

        if (Array.isArray(data)) { 
            for (const element of data) {
                let div = document.createElement("div");
                div.setAttribute("id", `${"IdBorrar"}`);
                div.setAttribute("class", "col col-12 justify-content-center align-items-center");
                div.innerHTML = `
                <div id="${element.id}" class="card mt-3" style="width: auto-rem;">
                    <div class="card-body">
                        <h5 class="card-title text-center"><b>Id del empleado: </b>${element.empleadoId}</h5>
                        <p class="card-text"><b>Cantidad de medicamentos diferentes: </b>${element.medicamentosDistintos}</p>
                    </div>
                </div>`;
                modalBody.appendChild(div);
            }
        } else {
            console.error("El JSON recibido no es un arreglo válido.");
        }

    } catch (error) {
        console.error("Error: ", error);
    }
}