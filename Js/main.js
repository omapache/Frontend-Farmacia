const botonLogin = document.getElementById('botoncito');

botonLogin.addEventListener("click", console.log("entro"), Validar());
async function Validar(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const data = {
        Username: username,
        Password: password
    };

    try {
        const response = await fetch("http://localhost:5115/api/farmacia/User/validate-credentials", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            window.location.href = "pagina-deseada.html";
        } else {
            console.error("Credenciales incorrectas");
        }
    } catch (error) {
        console.error("Error de red", error);
    }
}