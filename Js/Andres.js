const URL = "http://localhost:5115/api/farmacia/";
const urlInventario = "InventarioMedicamento";
const urlProducto = "Producto";
const urlMovimientoInventario = "MovimientoInventario";
const headers = new Headers({ 'Content-Type': 'application/json' });
const botonConsulta1 = document.getElementById('botonConsulta1');
const botonConsulta10 = document.getElementById('botonConsulta10');
const botonConsulta13 = document.getElementById('botonConsulta13');
const botonConsulta19 = document.getElementById('botonConsulta19');

botonConsulta1.addEventListener("click", function (e) {
    e.preventDefault(); // Evita el envío del formulario por defecto
    getConsulta1();
});
botonConsulta10.addEventListener("click", function (e) {
    e.preventDefault(); // Evita el envío del formulario por defecto
    getConsulta10();
});
botonConsulta13.addEventListener("click", function (e) {
    e.preventDefault(); // Evita el envío del formulario por defecto
    getConsulta13();
});
botonConsulta19.addEventListener("click", function (e) {
    e.preventDefault(); // Evita el envío del formulario por defecto
    getConsulta19();
});


async function getConsulta1() {

    console.log("entrooooooo");
    const config = {
        method: 'GET',
        headers: headers,
        body: JSON.stringify()
    };

    try {
        const response = await (await fetch(`${URL}${urlInventario}/consulta1`)).json();
        console.log(response);

        if (response) {
            let modalTitle = document.getElementById("TituloResultadoConsulta");
            let h1 = document.createElement("h4");
            h1.innerHTML = "Consulta 1";
            modalTitle.appendChild(h1);
            let modalBody = document.getElementById("resultadoConsulta");
            for (const element of response) {
                let div = document.createElement("div");
                div.setAttribute("id", `${"IdBorrar"}`);
                div.setAttribute("class", "col col-12 justify-content-center align-items-center");
                div.innerHTML = `
                <div id="${element.id}" class="card mt-3" style="width: auto-rem;">
                    <div class="card-body">
                        <h5 class="card-title text-center"><b>Medicamento: </b>${element.descripcionMedicamento.nombre}</h5>
                        <p class="card-text"><b>Fecha de expiración: </b>${element.fechaExpiracion}</p>
                        <p class="card-text"><b>Cantidad de Mg: </b>${element.descripcionMedicamento.cantidadMg}</p>
                        <p class="card-text"><b>Descripción: </b>${element.descripcionMedicamento.descripcion}</p>
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


async function getConsulta10() {

    console.log("entrooooooo");
    const config = {
        method: 'GET',
        headers: headers,
        body: JSON.stringify()
    };
    /* cantidadMg: "200 mg"
    cantidadProductos: 10
    marcaMedicamento: "Ibuprofeno"
    medicamento:  "Analgésico y antiinflamatorio."
    precio: 10 */
    try {
        const response = await (await fetch(`${URL}${urlProducto}/consulta10`)).json();
        console.log(response);
        if (response) {
            let modalTitle = document.getElementById("TituloResultadoConsulta");
            let h1 = document.createElement("h4");
            h1.innerHTML = "Consulta 10";
            modalTitle.appendChild(h1);
            let modalBody = document.getElementById("resultadoConsulta");

            let div = document.createElement("div");
            div.setAttribute("id", `${"IdBorrar"}`);
            div.setAttribute("class", "col col-12 justify-content-center align-items-center");
            div.innerHTML = `
            <div id="${"1"}" class="card mt-3" style="width: auto-rem;">
                <div class="card-body">
                    <h5 class="card-title text-center"><b>Medicamento: </b>${response.medicamento}<b> <br> Marca: </b>${response.marcaMedicamento}</h5>
                    <p class="card-text ms-5"><b>  Cantidad Mg: </b>${response.cantidadMg}</p>
                    <p class="card-text ms-5"><b>  Cantidad: </b>${response.cantidadProductos}</p>
                    <p class="card-text ms-5"><b>  Precio: </b>${response.precio}</p>
                </div>
            </div>`
            modalBody.appendChild(div)

            console.log(response);
        } else {
            let modalTitle = document.getElementById("TituloResultadoConsulta");
            let h1 = document.createElement("h4");
            h1.innerHTML = "No Hay Registros ";
            modalTitle.appendChild(h1);
        }
    } catch (error) {
        console.error("Error de red: ", error);
    }
}


async function getConsulta13() {

    console.log("entrooooooo");
    const config = {
        method: 'GET',
        headers: headers,
        body: JSON.stringify()
    };
    /* cantidadMg: "200 mg"
    cantidadProductos: 10
    marcaMedicamento: "Ibuprofeno"
    medicamento:  "Analgésico y antiinflamatorio."
    precio: 10 */
    try {
        const response = await (await fetch(`${URL}${urlMovimientoInventario}/consulta13`)).json();
        console.log(response);

        if (response) {
            let modalTitle = document.getElementById("TituloResultadoConsulta");
            let h1 = document.createElement("h4");
            h1.innerHTML = "Consulta 13";
            modalTitle.appendChild(h1);
            let modalBody = document.getElementById("resultadoConsulta");
            for (const element of response) {
                let div = document.createElement("div");
                div.setAttribute("id", `${"IdBorrar"}`);
                div.setAttribute("class", "col col-12 justify-content-center align-items-center");
                div.innerHTML = `
                <div id="${element.id}" class="card mt-3" style="width: auto-rem;">
                    <div class="card-body">
                        <h5 class="card-title text-center"><b>Proveedor: </b>${element.proveedor}</h5>
                        <p class="card-text"><b>Documento: </b>${element.documento}</p>
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


async function getConsulta19() {

    console.log("entrooooooo");
    /* const config = {
        method: 'GET',
        headers: headers,
        body: JSON.stringify()
    }; */
    let anio = document.getElementById('AñoConsulta19').value;

    try {
        if (anio.length == 4  ) {


            const response = await (await fetch(`${URL}${urlMovimientoInventario}/consulta19/${anio}`)).json();
            console.log(response);

            if (response.length > 0) {
                let modalTitle = document.getElementById("TituloResultadoConsulta");
                let h1 = document.createElement("h4");
                h1.innerHTML = "Consulta 19";
                modalTitle.appendChild(h1);
                let modalBody = document.getElementById("resultadoConsulta");
                for (const element of response) {
                    let div = document.createElement("div");
                    div.setAttribute("id", `${"IdBorrar"}`);
                    div.setAttribute("class", "col col-12 justify-content-center align-items-center");
                    div.innerHTML = `
                    <div id="${element.id}" class="card mt-3" style="width: auto-rem;">
                        <div class="card-body">
                            <h5 class="card-title text-center"><b>Nombre: </b>${element.nombre}</h5>
                            <p class="card-text"><b>Stock: </b>${element.stock}</p>
                            <p class="card-text"><b>Fecha de expiracion: </b>${element.fechaExpiracion}</p>
                            <p class="card-text"><b>Descripción: </b>${element.descripcion}</p>
                        </div>
                    </div>`
                    modalBody.appendChild(div)
                }
                console.log(response);
            } else {
                let modalTitle = document.getElementById("TituloResultadoConsulta");
                let h1 = document.createElement("h4");
                h1.innerHTML = "No Hay Registros ";
                modalTitle.appendChild(h1);
            }
        }else {
            let modalTitle = document.getElementById("TituloResultadoConsulta");
            let h1 = document.createElement("h4");
            h1.innerHTML = "Error en la cantidad de caracteres "+typeof(parseInt(anio));
            modalTitle.appendChild(h1);
        }
    } catch (error) {
        console.error("Error de red: ", error);
    }
}