import {abrirModal} from "./Modal.js"

const URL = "http://localhost:5115/api/farmacia/";
const urlProducto = "Producto";
const urlInventario = "inventarioMedicamento";
const urlMovInventario = "MovimientoInventario";
const headers = new Headers({ 'Content-Type': 'application/json' });

const botonConsulta2 = document.getElementById('botonConsulta2');

botonConsulta2.addEventListener("click", function (e) {
    e.preventDefault(); 
    getConsulta2();
});

const botonConsulta5 = document.getElementById('botonConsulta5');

botonConsulta5.addEventListener("click", function (e) {
    e.preventDefault();
    getConsulta5();
});

const botonConsulta8 = document.getElementById('botonConsulta8');

botonConsulta8.addEventListener("click", function (e) {
    e.preventDefault();
    getConsulta8();
});

const botonConsulta14 = document.getElementById('botonConsulta14');

botonConsulta14.addEventListener("click", function (e) {
    e.preventDefault();
    getConsulta14();
});

const botonConsulta17 = document.getElementById('botonConsulta17');

botonConsulta17.addEventListener("click", function (e) {
    e.preventDefault();
    getConsulta17();
});

const botonConsulta38 = document.getElementById('botonConsulta38');

botonConsulta38.addEventListener("click", function (e) {
    e.preventDefault();
    getConsulta38();
});

var inputAnio26 = document.getElementById('inputAnio26');
var inputMes26 = document.getElementById('inputMes26');

inputAnio26.addEventListener('input', function () {
    validarFecha(inputAnio26, inputMes26);
});

inputMes26.addEventListener('input', function () {
    validarFecha(inputAnio26, inputMes26);
});

function validarFecha(inputAnio, inputMes) {
    var anio = inputAnio.value;
    var mes = inputMes.value;

    if (
        anio.length === 4 && !isNaN(anio) && 
        mes.length >= 1 && mes.length <= 2 && !isNaN(mes) && 
        mes >= 1 && mes <= 12
    ) {
        abrirModal();
        getConsulta26(anio, mes);
    } 
}

async function getConsulta2() {
    try {
        const response = await (await fetch(`${URL}${urlProducto}/consulta2`)).json();
        console.log(response);

        if (response) {
            let modalTitle = document.getElementById("TituloResultadoConsulta");
            let h1 = document.createElement("h4");
            h1.innerHTML = "Consulta 2";
            modalTitle.appendChild(h1);
            let modalBody = document.getElementById("resultadoConsulta");
            for(const element of response){
                let div = document.createElement("div");
                div.setAttribute("id",`${"IdBorrar"}`);
                div.setAttribute("class","col col-12 justify-content-center align-items-center");
                div.innerHTML = `
                <div id="${element.id}" class="card mt-3" style="width: auto-rem;">
                    <div class="card-body">
                        <h5 class="card-title text-center"><b>Proveedor: </b>${element.nombreProveedor}</h5>
                        <p class="card-text"><b>Medicamento: </b>${element.nombreMedicamento}</p>
                        <p class="card-text"><b>Número de teléfono: </b>${element.telefono}</p>
                        <p class="card-text"><b>Correo: </b>${element.direccion}</p>
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

async function getConsulta5() {
    let modalTitle = document.getElementById("TituloResultadoConsulta");
    let modalBody = document.getElementById("resultadoConsulta");
    let Medicamentos = document.getElementById('dropdownMedicamento5');
    let MedicamentosSeleccionado = Medicamentos.selectedIndex;
    let MedicamentosSeleccionadoNombre = Medicamentos.options[MedicamentosSeleccionado].text;

    try {
        const response = await fetch(`${URL}${urlInventario}/consulta5/${MedicamentosSeleccionadoNombre}`);

        modalTitle.innerHTML = '';
        let h4 = document.createElement("h4");
        h4.setAttribute("class", "text-center");
        h4.innerHTML = `Consulta 5 <br><b>Medicamento: </b>${MedicamentosSeleccionadoNombre}`;
        modalTitle.appendChild(h4);
        modalBody.innerHTML = '';

        const textContent = await response.text();
        let div = document.createElement("div");
        div.setAttribute("id", "IdBorrar");
        div.setAttribute("class", "col col-12 justify-content-center align-items-center");
        div.innerHTML = `
        <div id="responseTextId" class="card mt-3" style="width: auto-rem;">
            <div class="card-body">
                <h5 class="card-title text-center">${textContent}</h5>
            </div>
        </div>`;
        modalBody.appendChild(div);

    } catch (error) {
        console.error("Error de red: ", error);
    }
}

async function getConsulta8() {
    try {
        const response = await fetch(`${URL}${urlMovInventario}/consulta8/totalDinero`);

        const textContent = await response.text();
        console.log(textContent);

        let modalTitle = document.getElementById("TituloResultadoConsulta");
        modalTitle.innerHTML = '';
        let h1 = document.createElement("h4");
        h1.innerHTML = "Consulta 8";
        modalTitle.appendChild(h1);

        let modalBody = document.getElementById("resultadoConsulta");
        modalBody.innerHTML = '';

        let div = document.createElement("div");
        div.setAttribute("id", "IdBorrar");
        div.setAttribute("class", "col col-12 justify-content-center align-items-center");
        div.innerHTML = `
        <div id="responseTextId" class="card mt-3" style="width: auto-rem;">
            <div class="card-body">
                <h5 class="card-title text-center"><b>Cantidad total: </b>${textContent}</h5>
            </div>
        </div>`;
        
        modalBody.appendChild(div);
    } catch (error) {
        console.error("Error de red: ", error);
    }
}

async function getConsulta14() {
    try {
        const response = await fetch(`${URL}${urlProducto}/consulta14/totalVendidos`);

        const textContent = await response.text();
        console.log(textContent);

        let modalTitle = document.getElementById("TituloResultadoConsulta");
        modalTitle.innerHTML = '';
        let h1 = document.createElement("h4");
        h1.innerHTML = "Consulta 14";
        modalTitle.appendChild(h1);

        let modalBody = document.getElementById("resultadoConsulta");
        modalBody.innerHTML = '';

        let div = document.createElement("div");
        div.setAttribute("id", "IdBorrar");
        div.setAttribute("class", "col col-12 justify-content-center align-items-center");
        div.innerHTML = `
        <div id="responseTextId" class="card mt-3" style="width: auto-rem;">
            <div class="card-body">
                <h5 class="card-title text-center"><b>Cantidad total: </b>${textContent}</h5>
            </div>
        </div>`;
        
        modalBody.appendChild(div);
    } catch (error) {
        console.error("Error de red: ", error);
    }
}

async function getConsulta17() {
    try {
        const response = await (await fetch(`${URL}${urlProducto}/consulta17/promedio`)).json();
        console.log(response);

        if (response) {
            let modalTitle = document.getElementById("TituloResultadoConsulta");
            let h1 = document.createElement("h4");
            h1.innerHTML = "Consulta 17";
            modalTitle.appendChild(h1);
            let modalBody = document.getElementById("resultadoConsulta");
            for(const element of response){
                let div = document.createElement("div");
                div.setAttribute("id",`${"IdBorrar"}`);
                div.setAttribute("class","col col-12 justify-content-center align-items-center");
                div.innerHTML = `
                <div id="${element.id}" class="card mt-3" style="width: auto-rem;">
                    <div class="card-body">
                        <h5 class="card-title text-center"><b>Id de la venta: </b>${element.movimientoInventarioId}</h5>
                        <p class="card-text"><b>Promedio de medicamentos: </b>${element.promedioMedicamentos}</p>
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

async function getConsulta38() {
    try {
        const response = await (await fetch(`${URL}${urlInventario}/consulta38/medicamentos`)).json();
        console.log(response);

        if (response) {
            let modalTitle = document.getElementById("TituloResultadoConsulta");
            let h1 = document.createElement("h4");
            h1.innerHTML = "Consulta 38";
            modalTitle.appendChild(h1);
            let modalBody = document.getElementById("resultadoConsulta");
            for(const element of response){
                let div = document.createElement("div");
                div.setAttribute("id",`${"IdBorrar"}`);
                div.setAttribute("class","col col-12 justify-content-center align-items-center");
                div.innerHTML = `
                <div id="${element.id}" class="card mt-3" style="width: auto-rem;">
                    <div class="card-body">
                        <h5 class="card-title text-center"><b>Medicamento: </b>${element.nombreMedicamento}</h5>
                        <p class="card-text"><b>Id del medicamento: </b>${element.id}</p>
                        <p class="card-text"><b>Fecha de expiración: </b>${element.fechaExperiacion}</p>
                        <p class="card-text"><b>Stock: </b>${element.stock}</p>
                        <p class="card-text"><b>Precio: </b>${element.precio}</p>
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

async function getConsulta26(anioElegido, mesElegido) {
    try {
        const response = await fetch(`${URL}${urlProducto}/consulta26/medicamentosMes/${anioElegido}-${mesElegido}`);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.text();

        let modalTitle = document.getElementById("TituloResultadoConsulta");
        let modalBody = document.getElementById("resultadoConsulta");
        modalTitle.innerHTML = '';
        let h4 = document.createElement("h4");
        h4.setAttribute("class", "text-center");
        h4.innerHTML = `Consulta 26 <br>Fecha: ${anioElegido}-${mesElegido}`;
        modalTitle.appendChild(h4);
        modalBody.innerHTML = '';

        let div = document.createElement("div");
        div.setAttribute("id", `${"IdBorrar"}`);
        div.setAttribute("class", "col col-12 justify-content-center align-items-center");
        div.innerHTML = `
        <div class="card mt-3" style="width: auto-rem;">
            <div class="card-body">
                <p class="card-text text-center">${data}</p>
            </div>
        </div>`;
        modalBody.appendChild(div);

    } catch (error) {
        console.error("Error: ", error);
    }
}