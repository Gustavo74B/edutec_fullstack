async function register () {
    const email = document.querySelector("#email").value
    const usuario = document.querySelector("#username").value
    const senha = document.querySelector("#password").value

    const user = {
        email,
        usuario,
        senha
    }

    await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({user})
    })
}

const button = document.querySelector("form button")
button.addEventListener("click", (event) => {
    register()
})