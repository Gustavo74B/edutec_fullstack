function register () {
    const email = document.querySelector("#email").value
    const usuario = document.querySelector("#username").value
    const senha = document.querySelector("#password").value

    const user = {
        email,
        usuario,
        password
    }
}

const button = document.querySelector(".submit")
button.addEventListener("click", (event) => {
    event.preventDefault
    register()
})