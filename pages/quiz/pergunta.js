let quiz = {};
let pontos = 0;
let contador = 1;
let respostaCorretaId = "";
let perguntaIndex = 0;

async function buscarPerguntas() {
    const urlDados = "./pergunta.json";

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
            <button class="verify-button" onclick="validarResposta()">Verificar</button>
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

function validarResposta() {
    const selectedButton = document.querySelector('.option.selected');
    if (!selectedButton) {
        alert('Por favor, selecione uma opção.');
        return;
    }

    const respostaSelecionada = selectedButton.textContent;
    if (respostaSelecionada === quiz.perguntas[perguntaIndex].respostaCorresta) {
        pontos++;
    }

    perguntaIndex++;
    contador++;
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

iniciar();