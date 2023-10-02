const URL = "http://localhost:5115/api/farmacia/";
const urlRecetaMedica = "RecetaMedica";
const urlMovimientoInventario = "MovimientoInventario";
const headers = new Headers({ 'Content-Type': 'application/json' });

const botonConsulta4 = document.getElementById('botonConsulta4');
const botonConsulta22 = document.getElementById('botonConsulta22');

botonConsulta22.addEventListener("click", function (e) {
    e.preventDefault(); // Evita el envío del formulario por defecto
    getConsulta22();
});

botonConsulta4.addEventListener("click", function (e) {
    e.preventDefault(); // Evita el envío del formulario por defecto
    getConsulta4();
});



async function getConsulta4() {

    console.log("entrooooooo");
    /* const config = {
        method: 'GET',
        headers: headers,
        body: JSON.stringify()
    }; */
    let anio = document.getElementById('AñoConsulta4').value;

    try {
        if (anio.length == 4  ) {


            const response = await (await fetch(`${URL}${urlRecetaMedica}/consulta4/${anio}`)).json();
            console.log(response);

            if (response.length > 0) {
                let modalTitle = document.getElementById("TituloResultadoConsulta");
                let h1 = document.createElement("h4");
                h1.innerHTML = "Consulta 4";
                modalTitle.appendChild(h1);
                let modalBody = document.getElementById("resultadoConsulta");
                for (const element of response) {
                    let div = document.createElement("div");
                    div.setAttribute("id", `${"IdBorrar"}`);
                    div.setAttribute("class", "col col-12 justify-content-center align-items-center");
                    div.innerHTML = `
                <div id="${element.id}" class="card mt-3" style="width: auto-rem;">
                    <div class="card-body">
                        <h5 class="card-title text-center"><b>Doctor: </b>${element.doctor.nombre}<b> - Id: </b>${element.doctor.numeroDocumento}</h5>
                        <p class="card-text"><b>Creacion: </b>${element.fechaCreacion} - <b>Caducidad: </b>${element.fechaCaducidad}</p>
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

async function getConsulta22() {

    console.log("entrooooooo");
    const config = {
        method: 'GET',
        headers: headers,
        body: JSON.stringify()
    };
    try {
        let anio = document.getElementById("AñoConsulta22").value;
        if (anio.length == 4  ) {
            const response = await (await fetch(`${URL}${urlMovimientoInventario}/consulta22/${anio}`)).json();
            console.log(response);

            if (response) {
                let modalTitle = document.getElementById("TituloResultadoConsulta");
                let h1 = document.createElement("h4");
                h1.innerHTML = "Consulta 22";
                modalTitle.appendChild(h1);
                let modalBody = document.getElementById("resultadoConsulta");
                
                    let div = document.createElement("div");
                    div.setAttribute("id", `${"IdBorrar"}`);
                    div.setAttribute("class", "col col-12 justify-content-center align-items-center");
                    div.innerHTML = `
                    <div id="${"1"}" class="card mt-3" style="width: auto-rem;">
                        <div class="card-body">
                            <h5 class="card-title text-center"><b>Paciente: </b>${response.paciente}</h5>
                            <p class="card-text"><b>Total Gastado: </b>${response.totalGastado}</p>
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
