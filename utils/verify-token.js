export async function verifyToken(url) {
    // pega o token no localstorage
    const token = localStorage.getItem("token")

    // se n tiver token, manda pra página de login
    if(!token) {
        window.location.href= url
        return
    }

    const response = await fetch("http://localhost:3000/verify", {
        headers: {
            "Authorization": token
        }
    }).then(response => response.json())

    if(!response.ok) {
        alert(response.message)
        window.location.href = url
    }
}