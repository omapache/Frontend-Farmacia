const URL = "http://localhost:5115/api/farmacia/";
const urlInventario = "InventarioMedicamento";
const urlProducto = "Producto";
const urlMovimientoInventario = "MovimientoInventario";
const headers = new Headers({ 'Content-Type': 'application/json' });

const botonConsulta37 = document.getElementById('botonConsulta37');

botonConsulta37.addEventListener("click", function (e) {
    e.preventDefault(); // Evita el envío del formulario por defecto
    getConsulta37();
});

async function getConsulta37() {

    console.log("entrooooooo");
    const config = {
        method: 'GET',
        headers: headers,
        body: JSON.stringify()
    };

    try {
        const response = await (await fetch(`${URL}${urlMovimientoInventario}/consulta37/2023/04`)).json();
        console.log(response);
        if (response.length > 0) {
            let modalTitle = document.getElementById("TituloResultadoConsulta");
            let h1 = document.createElement("h4");
            h1.innerHTML = "Consulta 37";
            modalTitle.appendChild(h1);
            let modalBody = document.getElementById("resultadoConsulta");
            for (const element of response) {
                let div = document.createElement("div");
                div.setAttribute("id", `${"IdBorrar"}`);
                div.setAttribute("class", "col col-12 justify-content-center align-items-center");
                div.innerHTML = `
                    <div id="${element.id}" class="card mt-3" style="width: auto-rem;">
                        <div class="card-body">
                            <h5 class="card-title text-center"><b>Empleado: </b>${element.nombre}</h5>
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
