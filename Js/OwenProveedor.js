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

botonConsulta21.addEventListener("click", function (e) {
    getConsulta21();
});
const botonConsulta30 = document.getElementById('botonConsulta30');
botonConsulta30.addEventListener("click", function (e) {
    e.preventDefault(); // Evita el envío del formulario por defecto
    getConsulta30();
});
async function getConsulta21() {
    try {
        const response = await (await fetch(`${URL}${urlInventario}/consulta21`)).json();
        if (response) {
            let modalTitle = document.getElementById("TituloResultadoConsultaInventario");
            let h1 = document.createElement("h4");
            h1.innerHTML = "Consulta 21";
            modalTitle.appendChild(h1);
            let modalBody = document.getElementById("resultadoConsultaInventario");
            for(const element of response){
                let div = document.createElement("div");
                div.setAttribute("id",`${"IdBorrar"}`);
                div.setAttribute("class","col col-12 justify-content-center align-items-center");
                div.innerHTML = `
                <div id="${element.id}" class="card mt-3" style="width: auto-rem;">
                    <div class="card-body">
                        <h5 class="card-title text-center"><b>Nombre: </b>${element.nombre}</h5>
                        <p class="card-text text-center"><b>Stock: </b>${element.stock}</p>
                        <p class="card-text text-center"><b>Fecha de expiracion: </b>${element.fechaExpiracion}</p>
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

async function getConsulta30() {
    try {
        const response = await (await fetch(`${URL}${urlPersona}/consulta30`)).json();
        if (response) {
            let modalTitle = document.getElementById("TituloResultadoConsultaInventario");
            let h1 = document.createElement("h4");
            h1.innerHTML = "Consulta 30";
            modalTitle.appendChild(h1);
            let modalBody = document.getElementById("resultadoConsultaInventario");
            for(const element of response){
                let div = document.createElement("div");
                div.setAttribute("id",`${"IdBorrar"}`);
                div.setAttribute("class","col col-12 justify-content-center align-items-center");
                div.innerHTML = `
                <div id="${element.id}" class="card mt-3" style="width: auto-rem;">
                    <div class="card-body">
                        <h5 class="card-title text-center"><b>personas: </b>${element}</h5>

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