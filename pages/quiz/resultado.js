function mostrarResultado() {
    const pontos = localStorage.getItem("pontos");
    const totalPerguntas = 10; // Altere conforme o número total de perguntas
    const resultadoTexto = `Você acertou ${pontos} de ${totalPerguntas} perguntas.`;
    
    document.getElementById("resultado").innerText = resultadoTexto;
}

function reiniciarQuiz() {
    localStorage.removeItem("pontos");
    window.location.href = "./pergunta.html"; // Redireciona para a página do quiz
}

window.onload = mostrarResultado;