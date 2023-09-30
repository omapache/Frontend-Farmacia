import {abrirModal, validarAnio, cargarProveedores, cargarMedicamentos} from "./Modal.js"
const URL = "http://localhost:5115/api/farmacia/";
const urlProducto = "Producto";
const urlInventario = "InventarioMedicamento";
const urlMovInventario = "MovimientoInventario";
const headers = new Headers({ 'Content-Type': 'application/json' });

const botonConsulta11 = document.getElementById('botonConsulta11');

botonConsulta11.addEventListener("click", function (e) {
    e.preventDefault();
    getConsulta11();
});

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