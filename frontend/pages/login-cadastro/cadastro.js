async function register () {
    const email = document.querySelector("#email").value
    const usuario = document.querySelector("#username").value
    const senha = document.querySelector("#password").value

    const user = {
        email,
        usuario,
        senha
    }

    const response = await fetch("https://backend-sideralis.vercel.app/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({user})
    }).then(response => response.json())

    alert(response.message)

    if(response.userExists) {
        window.location.reload()
        return
    }

    window.location.href = "./login.html"
}

const button = document.querySelector("form button")
button.addEventListener("click", (event) => {
    event.preventDefault()
    register()
})