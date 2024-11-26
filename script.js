function verifyToken() {
    // pega o token no localstorage
    const token = localStorage.getItem("token")

    // se n tiver token, manda pra página de login
    if(!token) {
        window.location.href= "./frontend/pages/login-cadastro/login.html"
        return
    }


}

verifyToken()