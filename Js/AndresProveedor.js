const URL = "http://localhost:5115/api/farmacia/";
const urlMovimientoInventario = "movimientoinventario";
const urlPersona = "persona";

const botonConsulta7 = document.getElementById('botonConsulta7');
const botonConsulta16 = document.getElementById('botonConsulta16');

botonConsulta16.addEventListener("click", function (e) {
    e.preventDefault(); // Evita el envío del formulario por defecto
    getConsulta16();
});
botonConsulta7.addEventListener("click", function (e) {
    e.preventDefault(); // Evita el envío del formulario por defecto
    getConsulta7();
});



async function getConsulta7() {

    console.log("entrooooooo");
    /* const config = {
        method: 'GET',
        headers: headers,
        body: JSON.stringify()
    }; */

    try {
        const response = await (await fetch(`${URL}${urlMovimientoInventario}/consulta7`)).json();
        console.log(response);

        if (response.length > 0) {
            let modalTitle = document.getElementById("TituloResultadoConsulta");
            let h1 = document.createElement("h4");
            h1.innerHTML = "Consulta 7";
            modalTitle.appendChild(h1);
            let modalBody = document.getElementById("resultadoConsulta");
            for (const element of response) {
                let div = document.createElement("div");
                div.setAttribute("id", `${"IdBorrar"}`);
                div.setAttribute("class", "col col-12 justify-content-center align-items-center");
                div.innerHTML = `
                <div id="${element.id}" class="card mt-3" style="width: auto-rem;">
                    <div class="card-body">
                        <h5 class="card-title text-center"><b>Proveedor: </b>${element.proveedor}<b> - Id: </b>${element.documento}</h5>
                        <p class="card-text ms-5"><b>  Cantidad: </b>${element.cantidadProductos}</p>
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
    } catch (error) {
        console.error("Error de red: ", error);
    }
}

async function getConsulta16() {

    console.log("entrooooooo");
    /* const config = {
        method: 'GET',
        headers: headers,
        body: JSON.stringify()
    }; */

    try {
        const response = await (await fetch(`${URL}${urlPersona}/consulta16`)).json();
        console.log(response);

        if (response.length > 0) {
            let modalTitle = document.getElementById("TituloResultadoConsulta");
            let h1 = document.createElement("h4");
            h1.innerHTML = "Consulta 16";
            modalTitle.appendChild(h1);
            let modalBody = document.getElementById("resultadoConsulta");
            for (const element of response) {
                let div = document.createElement("div");
                div.setAttribute("id", `${"IdBorrar"}`);
                div.setAttribute("class", "col col-12 justify-content-center align-items-center");
                div.innerHTML = `
                <div id="${element.id}" class="card mt-3" style="width: auto-rem;">
                    <div class="card-body">
                        <h5 class="card-title text-center"><b>Proveedor: </b>${element.nombreProveedor}<b> - Id: </b>${element.identificacion}</h5>
                        <p class="card-text ms-5"><b>  Producto: </b>${element.producto} - <b> Id: </b>${element.idProducto}</p>
                        <p class="card-text ms-5"><b>  Ganancia: </b>${element.ganancia}</p>
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
    } catch (error) {
        console.error("Error de red: ", error);
    }
}