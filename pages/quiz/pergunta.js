function selectOption(selectedButton) {
    const options = document.querySelectorAll('.option');
    options.forEach(option => option.classList.remove('selected'));

    selectedButton.classList.add('selected');
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