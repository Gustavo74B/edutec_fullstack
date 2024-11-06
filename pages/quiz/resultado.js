document.addEventListener("DOMContentLoaded", function() {
    // Obtém a pontuação armazenada no localStorage
    const pontos = localStorage.getItem("pontos") || 0;
  
    // Exibe a pontuação na página
    document.getElementById("pontos").textContent = pontos;
  
    // Aqui você pode adicionar a lógica para exibir o ranking se necessário
    // Exemplo:
    // atualizarRanking(pontos);
  });
  
  function voltarParaQuiz() {
    window.location.href = "../quiz.html"; // Redireciona de volta para a página do quiz
  }
  
  const ranking = []; // Array para armazenar o ranking
  
  function atualizarRanking(nome, pontos) {
      ranking.push({ nome, pontos });
      ranking.sort((a, b) => b.pontos - a.pontos); // Ordena do maior para o menor
      exibirRanking();
  }