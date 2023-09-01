const form = document.getElementById('game-form');
const userChoiceInput = document.getElementById('user-choice');
const resultText = document.getElementById('result');

const options = ['piedra', 'papel', 'tijera'];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    
    const userChoice = userChoiceInput.value.toLowerCase();

    
    const computerChoice = options[Math.floor(Math.random() * 3)];

    
    resultText.innerHTML = `<br> Elegiste: ${userChoice}<br>La computadora eligió: ${computerChoice}<br><hr>${determineWinner(userChoice, computerChoice)}`;
});

function determineWinner(user, computer) {
    if (user == computer) {
        return "Empate :/";
    } else if ((user == 'piedra' && computer == 'tijera') || (user == 'papel' && computer == 'piedra') || (user == 'tijera' && computer == 'papel')) {
        return "Ganaste :D";
    } else {
        return "Perdiste :(";
    }
}
