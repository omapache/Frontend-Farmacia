const URL = "http://localhost:5115"
const urlValidation = "/api/farmacia/User/validate-credentials"
const headers = new Headers({'Content-Type': 'application/json'});
const botonLogin = document.getElementById('botoncito');


botonLogin.addEventListener("click", function (e) {
    e.eventpreventDefault();
    Validar2();
});

/* async function Validar() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const data = {
        Username: username,
        Password: password
    };

    try {
        const response = await fetch(`${url}/api/farmacia/User/validate-credentials`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            const result = await response.json();
            if (result === true) {
                console.log("ENTROOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO");
                    window.location.href = "../index.html";
            } else {
                console.error("Credenciales incorrectas");
            }
        } else {
            console.error("Error de red AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
        }
    } catch (error) {
        console.error("Error de red: ", error);
    }
} */

async function Validar2() {
    debugger
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    let data = {
        "username": "user5",
        "password": "password5"
    }
    let config = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
    }
    await fetch(`http://localhost:5115/api/farmacia/User/validate-credentials`,config).json();
}


