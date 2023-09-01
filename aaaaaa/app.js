const form = document.getElementById('game-form');
const userChoiceInput = document.getElementById('user-choice');
const resultText = document.getElementById('result');

const options = ['piedra', 'papel', 'tijera'];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Obtener la elección del usuario
    const userChoice = userChoiceInput.value.toLowerCase();

    // Generar una elección aleatoria para la computadora
    const computerChoice = options[Math.floor(Math.random() * 3)];

    // Mostrar la elección de la computadora
    console.log(`El servidor ha elegido: ${computerChoice}`);

    // Determinar el resultado del juego
    const result = determineWinner(userChoice, computerChoice);

    // Mostrar el resultado en la página
    resultText.textContent = result;
});

function determineWinner(user, computer) {
    if (user === computer) {
        return "Empate :/";
    } else if ((user === 'piedra' && computer === 'tijera') || (user === 'papel' && computer === 'piedra') || (user === 'tijera' && computer === 'papel')) {
        return "Ganaste :D";
    } else {
        return "Perdiste :(";
    }
}
