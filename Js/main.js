const URL = "http://localhost:5115";
const urlValidation = "/api/farmacia/User/validate-credentials";
const headers = new Headers({ 'Content-Type': 'application/json' });
const botonLogin = document.getElementById('botoncito');

botonLogin.addEventListener("click", function (e) {
    e.preventDefault(); // Evita el envío del formulario por defecto
    Validar();
});


async function Validar() {
    debugger;
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

        if (response.ok) {
            console.log("ENTROOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO");
            window.location.href = "../index.html";
        } else {
            console.error("Error de red");
        }
    } catch (error) {
        console.error("Error de red: ", error);
    }
}