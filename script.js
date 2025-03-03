const words = ["apple", "grape", "peach", "berry", "melon"];
const answer = words[Math.floor(Math.random() * words.length)];
let currentRow = 0;

function initializeBoard() {
    const board = document.getElementById('board');
    for (let i = 0; i < 30; i++) { // 6 rows of 5 cells
        const cell = document.createElement('div');
        board.appendChild(cell);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initializeBoard();
});

document.getElementById('submit-guess').addEventListener('click', () => {
    const guessInput = document.getElementById('guess-input');
    const guess = guessInput.value.toUpperCase();
    if (guess.length !== 5) {
        alert("Please enter a 5-letter word.");
        return;
    }

    const board = document.getElementById('board');
    for (let i = 0; i < 5; i++) {
        const cell = board.children[currentRow * 5 + i];
        cell.textContent = guess[i];
        if (guess[i] === answer[i].toUpperCase()) {
            cell.style.backgroundColor = 'green';
        } else if (answer.toUpperCase().includes(guess[i])) {
            cell.style.backgroundColor = 'yellow';
        } else {
            cell.style.backgroundColor = 'gray';
        }
    }

    currentRow++;
    guessInput.value = '';
    if (guess === answer.toUpperCase()) {
        alert("Congratulations! You've guessed the word!");
    } else if (currentRow === 6) {
        alert(`Game over! The word was ${answer.toUpperCase()}.`);
    }
}); 