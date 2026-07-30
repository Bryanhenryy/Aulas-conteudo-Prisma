const emojis = ['🐶', '🐱', '🦊', '🐼', '🐨', '🦁', '🐯', '🐰'];
const gameCards = [...emojis, ...emojis];
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let moves = 0;
let score = 0;

const grid = document.getElementById('grid');
const movesDisplay = document.getElementById('moves');
const scoreDisplay = document.getElementById('score');

function shuffle() {
    gameCards.sort(() => Math.random() - 0.5);
}

function createBoard() {
    shuffle();
    gameCards.forEach(emoji => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.emoji = emoji;

        card.innerHTML = `
            <div class="card-face card-front">?</div>
            <div class="card-face card-back">${emoji}</div>
        `;

        card.addEventListener('click', flipCard);
        grid.appendChild(card);
    });
}

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    moves++;
    movesDisplay.textContent = moves;
    checkForMatch();
}

function checkForMatch() {
    const isMatch = firstCard.dataset.emoji === secondCard.dataset.emoji;
    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    score++;
    scoreDisplay.textContent = score;
    resetBoard();
}

function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    }, 1000);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

createBoard();