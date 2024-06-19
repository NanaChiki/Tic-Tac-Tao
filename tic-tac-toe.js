let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let isGameActive = true;

const messageElement = document.getElementById('info__message');
const buttonElement = document.getElementById('btn__restart');

const winnerConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8], 
  [2, 4, 6]
];

function makeMove(index) {
  if (board[index] !== '' || !isGameActive) return;
  board[index] = currentPlayer;
  document.getElementById(`board__cell-${index}`).innerHTML = currentPlayer;

  helperFunction();
}

function helperFunction() {
  let roundWon = false;

  for(let i = 0; i <= 7; i++) {
    const winCondition = winnerConditions[i];
    let a = board[winCondition[0]];
    let b = board[winCondition[1]];
    let c = board[winCondition[2]];

    if (a === '' || b === '' || c === '') continue;

    if (a === b && b === c) {
      roundWon = true;
      break;
    }
  }

  if (roundWon) {
    messageElement.innerHTML =  `${currentPlayer} Wins!`;
    isGameActive = false;
    return;
  }

  if (!board.includes('')) {
    messageElement.innerHTML = 'Draw';
    isGameActive = false;
    return;
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  messageElement.innerHTML = `${currentPlayer}'s Turn`;
}

function gameRestart() {
  for(let i = 0; i <= 8; i++) {
    document.getElementById(`board__cell-${i}`).innerHTML = '';
  }
  board = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  isGameActive = true;
  messageElement.innerHTML = `X's Turn`;
}


