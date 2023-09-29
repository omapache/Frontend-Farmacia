
const URL = "http://localhost:5115/api/farmacia/";
const urlInventario = "inventarioMedicamento";
const headers = new Headers({ 'Content-Type': 'application/json' });

let modalTitle = document.getElementById("TituloResultadoConsultaInventario");
let modalBody = document.getElementById("resultadoConsultaInventario");
const botonConsulta3 = document.getElementById('botonConsulta3');
botonConsulta3.addEventListener("click", function (e) {
    e.preventDefault(); // Evita el envío del formulario por defecto
    getConsulta3();
});
let inputFecha = document.getElementById('input-fecha');
inputFecha.addEventListener('input', function () {
    // Obtén el valor del campo de fecha
    getConsulta6();
});

var inputAnio = document.getElementById('inputAnio');
inputAnio.addEventListener('input', function () {
    validarAnio();
});
function validarAnio() {
    var anio = inputAnio.value;
    if (anio.length === 4 && !isNaN(anio)) {
        var anioElegido = anio;
        getConsulta9(anioElegido);
    } 
}
const botonConsulta12 = document.getElementById('botonConsulta12');

botonConsulta12.addEventListener("click", function (e) {
    e.preventDefault(); // Evita el envío del formulario por defecto
    getConsulta12();
});


async function getConsulta3() {
    let proveedores = document.getElementById('dropdownProveedor');
    let proveedorSeleccionado = proveedores.selectedIndex;
    let proveedorSeleccionadoNombre = proveedores.options[proveedorSeleccionado].text;
    try {
        const response = await (await fetch(`${URL}${urlInventario}/consulta3/${proveedorSeleccionadoNombre}`)).json();
        if (response) {
            modalTitle.innerHTML = '';
            
            let h4 = document.createElement("h4");
            h4.setAttribute("class", "text-center");
            h4.innerHTML = `Consulta 3 <br>Proveedor: ${proveedorSeleccionadoNombre}`;
            modalTitle.appendChild(h4);
            modalBody.innerHTML = '';
            for (const element of response) {
                let div = document.createElement("div");
                div.setAttribute("id", `${"IdBorrar"}`);
                div.setAttribute("class", "col col-12 justify-content-center align-items-center");
                div.innerHTML = `
                <div id="${element.id}" class="card mt-3" style="width: auto-rem;">
                    <div class="card-body">
                        <h5 class="card-title text-center"><b>Medicamento: </b>${element.nombre}</h5>
                        <p class="card-text text-center"><b>Cantidad: </b>${element.cantidad}</p>
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

async function getConsulta6() {
    var fechaSeleccionada = inputFecha.value;
    try {
        const response = await (await fetch(`${URL}${urlInventario}/consulta6/${fechaSeleccionada}`)).json();
        if (response) {
            modalTitle.innerHTML = '';
            let h4 = document.createElement("h4");
            h4.setAttribute("class", "text-center");
            h4.innerHTML = `Consulta 3 <br>Fecha: ${fechaSeleccionada}`;
            modalTitle.appendChild(h4);
            modalBody.innerHTML = '';
            for (const element of response) {
                let div = document.createElement("div");
                div.setAttribute("id", `${"IdBorrar"}`);
                div.setAttribute("class", "col col-12 justify-content-center align-items-center");
                div.innerHTML = `
                <div id="${element.id}" class="card mt-3" style="width: auto-rem;">
                    <div class="card-body">
                        <h5 class="card-title text-center"><b>Medicamento: </b>${element.nombre}</h5>
                        <p class="card-text text-center"><b>Stock: </b>${element.stock}</p>
                        <p class="card-text text-center"><b>Fecha Expiracion: </b>${element.fechaExpiracion}</p>
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

async function getConsulta9(anioElegido) {
    try {
        const response = await (await fetch(`${URL}${urlInventario}/consulta9/${anioElegido}`)).json();
        if (response) {
            modalTitle.innerHTML = '';
            let h4 = document.createElement("h4");
            h4.setAttribute("class", "text-center");
            h4.innerHTML = `Consulta 3 <br>Fecha: ${anioElegido}`;
            modalTitle.appendChild(h4);
            modalBody.innerHTML = '';
            for (const element of response) {
                let div = document.createElement("div");
                div.setAttribute("id", `${"IdBorrar"}`);
                div.setAttribute("class", "col col-12 justify-content-center align-items-center");
                div.innerHTML = `
                <div id="${element.id}" class="card mt-3" style="width: auto-rem;">
                    <div class="card-body">
                        <h5 class="card-title text-center"><b>Medicamento: </b>${element.nombre}</h5>
                        <p class="card-text text-center"><b>Stock: </b>${element.stock}</p>
                        <p class="card-text text-center"><b>Fecha Expiracion: </b>${element.fechaExpiracion}</p>
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
async function getConsulta12() {
    let Medicamentos = document.getElementById('dropdownMedicamento');
    let MedicamentosSeleccionado = Medicamentos.selectedIndex;
    let MedicamentosSeleccionadoNombre = Medicamentos.options[MedicamentosSeleccionado].text;
    try {
        const response = await (await fetch(`${URL}${urlInventario}/consulta12/${MedicamentosSeleccionadoNombre}`)).json();
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