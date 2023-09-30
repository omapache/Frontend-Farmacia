import {abrirModal} from "./Modal.js"

const URL = "http://localhost:5115/api/farmacia/";
const urlInventario = "inventarioMedicamento";
const urlMovimiento = "MovimientoInventario";
const urlDetalleMovimiento = "detallemovimiento";
const headers = new Headers({ 'Content-Type': 'application/json' });

let modalTitle = document.getElementById("TituloResultadoConsultaInventario");
let modalBody = document.getElementById("resultadoConsultaInventario");
const botonConsulta3 = document.getElementById('botonConsulta3');

var select = document.getElementById('dropdownProveedor');

if (select) {
    select.addEventListener('change', function () {
        abrirModal();
    });
}

if (selectm) {
    selectm.addEventListener('change', function () {
        abrirModal();
    });
}
let inputFecha = document.getElementById('input-fecha');

if (inputFecha) {
    inputFecha.addEventListener('input', function () {
    abrirModal();
    });
}
var inputAnio9 = document.getElementById('inputAnio9');
inputAnio9.addEventListener('input', function () {
    validarAnio(inputAnio9);
});
var inputAnio15 = document.getElementById('inputAnio15');
inputAnio15.addEventListener('input', function () {
    validarAnio(inputAnio15);
});
var inputAnio18 = document.getElementById('inputAnio18');
inputAnio18.addEventListener('input', function () {
    validarAnio(inputAnio18);
});
var inputAnio24 = document.getElementById('inputAnio24');
inputAnio24.addEventListener('input', function () {
    validarAnio(inputAnio24);
});
botonConsulta3.addEventListener("click", function (e) {
    e.preventDefault(); // Evita el envío del formulario por defecto
    getConsulta3();
});
inputFecha.addEventListener('input', function () {
    // Obtén el valor del campo de fecha
    getConsulta6();
});

var inputAnio9 = document.getElementById('inputAnio9');
inputAnio9.addEventListener('input', function () {
    validarAnio(inputAnio9, getConsulta9);
});

const botonConsulta12 = document.getElementById('botonConsulta12');

botonConsulta12.addEventListener("click", function (e) {
    e.preventDefault(); // Evita el envío del formulario por defecto
    getConsulta12();
});
var inputAnio15 = document.getElementById('inputAnio15');
inputAnio15.addEventListener('input', function () {
    validarAnio(inputAnio15, getConsulta15);
});

var inputAnio18 = document.getElementById('inputAnio18');
inputAnio18.addEventListener('input', function () {
    validarAnio(inputAnio18, getConsulta18);
});
botonConsulta21.addEventListener("click", function (e) {
    getConsulta21();
});
var inputAnio24 = document.getElementById('inputAnio24');
inputAnio24.addEventListener('input', function () {
    validarAnio(inputAnio24, getConsulta24);
});
function validarAnio(inputAnio,getConsulta) {
    var anio = inputAnio.value;
    if (anio.length === 4 && !isNaN(anio)) {
        var anioElegido = anio;
        getConsulta(anioElegido);
    } 
}
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
            h4.innerHTML = `Consulta 6 <br>Fecha: ${fechaSeleccionada}`;
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
            h4.innerHTML = `Consulta 9 <br>Fecha: ${anioElegido}`;
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

async function getConsulta15(anioElegido) {
    try {
        const response = await fetch(`${URL}${urlInventario}/consulta15/${anioElegido}`);

        modalTitle.innerHTML = '';
        let h4 = document.createElement("h4");
        h4.setAttribute("class", "text-center");
        h4.innerHTML = `Consulta 15 <br>Fecha: ${anioElegido}`;
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
                            <h5 class="card-title text-center"><b>Medicamento menos vendido: <br> </b>${element}</h5>
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
                            <h5 class="card-title text-center"><b>Medicamento menos vendido: <br> </b>${textContent}</h5>
                        </div>
                    </div>`
                    modalBody.appendChild(div);
        }
    } catch (error) {
        console.error("Error de red: ", error);
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
async function getConsulta21() {
    try {
        const response = await (await fetch(`${URL}${urlInventario}/consulta21`)).json();
        console.log(response);

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

async function getConsulta24(anioElegido) {
    try {
        const response = await fetch(`${URL}${urlDetalleMovimiento}/consulta24/${anioElegido}`);

        modalTitle.innerHTML = '';
        let h4 = document.createElement("h4");
        h4.setAttribute("class", "text-center");
        h4.innerHTML = `Consulta 21 <br>Fecha: ${anioElegido}`;
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
