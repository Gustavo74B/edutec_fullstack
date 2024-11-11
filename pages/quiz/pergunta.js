let quiz = {};
let pontos = 0;
let contador = 1;
let perguntaIndex = 0;
let verifyQuestion = true;

async function buscarPerguntas() {
    const urlDados = "pergunta.json";

    await fetch(urlDados)
        .then(resposta => resposta.json())
        .then(dados => {
            quiz = dados;
            montarPergunta();
        });
}

function montarPergunta() {
    const main = document.querySelector(".bloco");
    if (perguntaIndex < quiz.perguntas.length) {
        main.innerHTML = `
            <div class="header">
                <button class="sair" onclick="mostrarPopup()">SAIR</button>
                <span>Pergunta ${contador}/10</span>
            </div>
            <div class="question">
                <p>${quiz.perguntas[perguntaIndex].pergunta}</p>
                <div class="options">
                    ${quiz.perguntas[perguntaIndex].opcoes.map((opcao, index) => `
                        <button class="option" onclick="selectOption(this)">${opcao}</button>
                    `).join('')}
                </div>
            </div>
            <button class="verify-button" onclick="handlerNext()">Verificar</button>
        `;
    } else {
        finalizar();
    }
}

function selectOption(selectedButton) {
    const options = document.querySelectorAll('.option');
    options.forEach(option => option.classList.remove('selected'));
    selectedButton.classList.add('selected');
}

function handlerNext(){
    // Se o botão for "Próximo", avança a pergunta
    if(!verifyQuestion){
        proximaPergunta();
        return;
    }
    validarResposta();
}

function validarResposta() {

    const selectedButton = document.querySelector('.option.selected');
    const verifyButton = document.querySelector('.verify-button');

    if (!selectedButton) {
        alert('Por favor, selecione uma opção.');
        return;
    }

    const respostaSelecionada = selectedButton.textContent;
    const respostaCorreta = quiz.perguntas[perguntaIndex].respostaCorresta;

    // Verificar se a resposta está correta
    if (respostaSelecionada === respostaCorreta) {
        pontos++;
        selectedButton.classList.add('correct'); // Adiciona a classe correto
    } else {
        selectedButton.classList.add('incorrect'); // Adiciona a classe incorreta
        // Marcar a resposta correta
        const options = document.querySelectorAll('.option');
        options.forEach(option => {
            if (option.textContent === respostaCorreta) {
                option.classList.add('correct'); // Adiciona a classe correto à resposta correta
            }
        });
    }

    verifyQuestion = false;
    verifyButton.textContent = 'Próxima';
}

function proximaPergunta(){
    const verifyButton = document.querySelector('.verify-button');
    perguntaIndex++;
    contador++;
    verifyQuestion = true;
    verifyButton.textContent = 'Verificar';
    montarPergunta();
}

function finalizar() {
    localStorage.setItem("pontos", pontos);
    window.location.href = "./resultado.html";
}

function mostrarPopup() {
    document.getElementById('popup').style.display = 'flex';
}

function tirarPopup() {
    document.getElementById('popup').style.display = 'none';
}

function redirecionar() {
    window.location.href = "../quiz.html";
}

async function iniciar() {
    await buscarPerguntas();
}

function finalizar() {
    localStorage.setItem("pontos", pontos); // Armazena a pontuação no localStorage
    window.location.href = "./resultado.html"; // Redireciona para a página de resultados
}

iniciar();