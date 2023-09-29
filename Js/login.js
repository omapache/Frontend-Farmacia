const URL = "http://localhost:5115";
const urlValidation = "/api/farmacia/User/validate-credentials";
const urlRefresh ="/api/farmacia/User/refresh-token";
const headers = new Headers({ 'Content-Type': 'application/json' });
const botonLogin = document.getElementById('botoncito');

botonLogin.addEventListener("click", function (e) {
    e.preventDefault(); // Evita el envío del formulario por defecto
    Validar();
});


async function Validar() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const data = {
        "username": username,
        "password": password
    };
    console.log(data);
    const config = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
    };

    try {
        const response = await fetch(`${URL}${urlValidation}`, config);
        
        /* setTimeout(function(){
            console.log(response);
        }, 10000);
        
        console.log(response); */


        if (response.ok) {
            const responseRefresh = await fetch(`${URL}${urlRefresh}`, config);
            if(responseRefresh.ok) {
                console.log("token OK");
            }
            else
            {
                console.error("Error de Refresh Token");
            }
            window.location.href = "../Html/homeEmpleado.html";
        } else {
            console.error("Error de red");
        }
    } catch (error) {
        console.error("Error de red: ", error);
    }
}