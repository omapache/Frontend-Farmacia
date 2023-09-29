const URL = "http://localhost:5115/api/farmacia/";
const urlProducto = "Producto";
const headers = new Headers({ 'Content-Type': 'application/json' });
const botonConsulta2 = document.getElementById('botonConsulta2');

botonConsulta2.addEventListener("click", function (e) {
    e.preventDefault(); // Evita el envío del formulario por defecto
    getConsulta2();
});

const botonConsulta5 = document.getElementById('botonConsulta5');

botonConsulta5.addEventListener("click", function (e) {
    e.preventDefault();
    getConsulta5();
});

async function getConsulta2() {

    console.log("entrooooooo");
    const config = {
        method: 'GET',
        headers: headers,
        body: JSON.stringify()
    };

    try {
        const response = await (await fetch(`${URL}${urlProducto}/consulta2`)).json();
        console.log(response);

        if (response) {
            let modalTitle = document.getElementById("TituloResultadoConsultaInventario");
            let h1 = document.createElement("h4");
            h1.innerHTML = "Consulta 2";
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
    let Medicamentos = document.getElementById('dropdownMedicamento');
    let MedicamentosSeleccionado = Medicamentos.selectedIndex;
    let MedicamentosSeleccionadoNombre = Medicamentos.options[MedicamentosSeleccionado].text;
    try {
        const response = await (await fetch(`${URL}${urlInventario}/consulta5/${MedicamentosSeleccionadoNombre}`)).json();
        if (response) {
            modalTitle.innerHTML = '';
            let h4 = document.createElement("h4");
            h4.setAttribute("class", "text-center");
            h4.innerHTML = `Consulta 3 <br>Medicamento: ${MedicamentosSeleccionadoNombre}`;
            modalTitle.appendChild(h4);
            modalBody.innerHTML = '';
            for (const element of response) {
                let div = document.createElement("div");
                div.setAttribute("id", `${"IdBorrar"}`);
                div.setAttribute("class", "col col-12 justify-content-center align-items-center");
                div.innerHTML = `
                <div id="${element.id}" class="card mt-3" style="width: auto-rem;">
                    <div class="card-body">
                        <h5 class="card-title text-center"><b>Paciente: </b>${element}</h5>
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