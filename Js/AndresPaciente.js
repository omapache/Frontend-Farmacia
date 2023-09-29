const URL = "http://localhost:5115/api/farmacia/";
const urlRecetaMedica = "RecetaMedica";

const botonConsulta4 = document.getElementById('botonConsulta4');

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
        if (anio.length <= 3 && anio.length > 4 ) {


            const response = await (await fetch(`${URL}${urlRecetaMedica}/consulta4/${anio}`)).json();
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
        }else {
            let modalTitle = document.getElementById("TituloResultadoConsulta");
            let h1 = document.createElement("h4");
            h1.innerHTML = "Error en la cantidad de caracteres";
            modalTitle.appendChild(h1);
        }
    } catch (error) {
        console.error("Error de red: ", error);
    }
}