const URL = "http://localhost:5115/api/farmacia/";
const urlProducto = "Producto";
const urlInventario = "InventarioMedicamento";
const urlPersona = "Persona";
const headers = new Headers({ 'Content-Type': 'application/json' });

const botonConsulta20 = document.getElementById('botonConsulta20');

botonConsulta20.addEventListener("click", function (e) {
    e.preventDefault();
    getConsulta20();
});

/* const botonConsulta23 = document.getElementById('botonConsulta23');

botonConsulta23.addEventListener("click", function (e) {
    e.preventDefault();
    getConsulta23();
}); */

/* const botonConsulta32 = document.getElementById('botonConsulta32');

botonConsulta32.addEventListener("click", function (e) {
    e.preventDefault();
    getConsulta32();
}); */

async function getConsulta20() {
    try {
        const response = await (await fetch(`${URL}${urlPersona }/consulta20/emepladoMasVentas`)).json();
        console.log(response);

        if (response) {
            let modalTitle = document.getElementById("TituloResultadoConsultaInventario");
            let h1 = document.createElement("h4");
            h1.innerHTML = "Consulta 20";
            modalTitle.appendChild(h1);
            let modalBody = document.getElementById("resultadoConsultaInventario");
            for(const element of response){
                let div = document.createElement("div");
                div.setAttribute("id",`${"IdBorrar"}`);
                div.setAttribute("class","col col-12 justify-content-center align-items-center");
                div.innerHTML = `
                <div id="${element.id}" class="card mt-3" style="width: auto-rem;">
                    <div class="card-body">
                        <h5 class="card-title text-center"><b>Nombre del empleado: </b>${element.nombre}</h5>
                        <p class="card-text"><b>Id del empleado: </b>${element.empleadoId}</p>
                        <p class="card-text"><b>Cantidad de ventas: </b>${element.numeroVentas}</p>
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

/* async function getConsulta23(anioElegido) {
    try {
        const response = await fetch(`${URL}${urlPersona}/consulta23/emepladoSinVentas/${anioElegido}`);

        let modalTitle = document.getElementById("TituloResultadoConsultaInventario");
        let modalBody = document.getElementById("resultadoConsultaInventario");
        modalTitle.innerHTML = '';
        let h4 = document.createElement("h4");
        h4.setAttribute("class", "text-center");
        h4.innerHTML = `Consulta 23 <br>Fecha: ${anioElegido}`;
        modalTitle.appendChild(h4);
        modalBody.innerHTML = '';

        const contentType = response.headers.get('Content-Type');

        if (contentType && contentType.includes('application/json')) {
            const data = await response.json();

            if (data && Array.isArray(data)) {
                for (const element of data) {
                    let div = document.createElement("div");
                    div.setAttribute("id", `${"IdBorrar"}`);
                    div.setAttribute("class", "col col-12 justify-content-center align-items-center");
                    div.innerHTML = `
                    <div id="${element.id}" class="card mt-3" style="width: auto-rem;">
                        <div class="card-body">
                            <h5 class="card-title text-center"><b>Nombre del empleado: </b>${element.nombre}</h5>
                            <p class="card-text"><b>Id del empleado: </b>${element.empleadoId}</p>
                            <p class="card-text"><b>Cantidad de ventas: </b>${element.numeroVentas}</p>
                        </div>
                    </div>`
                    modalBody.appendChild(div);
                }
            } else {
                console.error("La respuesta JSON no es un arreglo válido.");
            }
        } else {
            const textContent = await response.text();
            let div = document.createElement("div");
            div.setAttribute("id", `${"IdBorrar"}`);
                    div.setAttribute("class", "col col-12 justify-content-center align-items-center");
                    div.innerHTML = `
                    <div id="id" class="card mt-3" style="width: auto-rem;">
                        <div class="card-body">
                            <h5 class="card-title text-center"><b>Medicamento menos vendido: <br> </b>${textContent}</h5>
                        </div>
                    </div>`
                    modalBody.appendChild(div);
        }
    } catch (error) {
        console.error("Error de red: ", error);
    }
} */

/* async function getConsulta32(anioElegido) {
    try {
        const response = await fetch(`${URL}${urlPersona}/consulta32/empleadosMaxMedi/${anioElegido}`);

        let modalTitle = document.getElementById("TituloResultadoConsultaInventario");
        let modalBody = document.getElementById("resultadoConsultaInventario");
        modalTitle.innerHTML = '';
        let h4 = document.createElement("h4");
        h4.setAttribute("class", "text-center");
        h4.innerHTML = `Consulta 32 <br>Fecha: ${anioElegido}`;
        modalTitle.appendChild(h4);
        modalBody.innerHTML = '';

        const contentType = response.headers.get('Content-Type');

        if (contentType && contentType.includes('application/json')) {
            const data = await response.json();

            if (data && Array.isArray(data)) {
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
                    </div>`
                    modalBody.appendChild(div);
                }
            } else {
                console.error("La respuesta JSON no es un arreglo válido.");
            }
        } else {
            const textContent = await response.text();
            let div = document.createElement("div");
            div.setAttribute("id", `${"IdBorrar"}`);
                    div.setAttribute("class", "col col-12 justify-content-center align-items-center");
                    div.innerHTML = `
                    <div id="id" class="card mt-3" style="width: auto-rem;">
                        <div class="card-body">
                            <h5 class="card-title text-center"><b>Medicamento menos vendido: <br> </b>${textContent}</h5>
                        </div>
                    </div>`
                    modalBody.appendChild(div);
        }
    } catch (error) {
        console.error("Error de red: ", error);
    }
} */