let board = document.getElementById('board');
let cells = document.querySelectorAll('.cell');
let statusText = document.getElementById('status');
let resetBtn = document.getElementById('reset-btn');
let gameState = ["","","","","","","","",""];
let currentPlayer = "X";
let isGameActive = true;
const winningConditions = [, [3, 4, 5], [6, 7, 8], // Linhas, [1, 4, 7], [2, 5, 8], // Colunas, [2, 4, 6]             // Diagonais
];
function handleCellClick(event) {
    const clickedCell = event.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));
    if (gameState[clickedCellIndex] !== "" || !isGameActive) {
        return;
    }
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.textContent = currentPlayer;
    clickedCell.classList.add(currentPlayer.toLowerCase());
    checkResult();
}
function checkResult() {
    let roundWon = false;
    for (let i = 0; i < winningConditions.length; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break;
        }
    }
    if (roundWon) {
        statusText.textContent = `Jogador ${currentPlayer} venceu!`;
        isGameActive = false;
        return;
    }
    let roundDraw = !gameState.includes("");
    if (roundDraw) {
        statusText.textContent = "O jogo empatou!";
        isGameActive = false;
        return;
    }
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusText.textContent = `Vez do ${currentPlayer}`;
}
function resetGame() {
    gameState = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    isGameActive = true;
    statusText.textContent = `Vez do ${currentPlayer}`;

    cells.forEach(cell => {
        cell.textContent = "";
        cell.classList.remove('x', 'o');
    });
}
cells.forEach(cell => cell.addEventListener('click', handleCellClick));
resetBtn.addEventListener('click', resetGame);
