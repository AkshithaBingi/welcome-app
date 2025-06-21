let currentPlayer = 'X';
let board = ["", "", "", "", "", "", "", "", ""];
let gameOver = false;

function makeMove(index) {
  if (!gameOver && board[index] === "") {
    board[index] = currentPlayer;
    document.getElementsByClassName('cell')[index].textContent = currentPlayer;

    if (checkWin()) {
      document.getElementById('status').textContent = `Player ${currentPlayer} wins!`;
      gameOver = true;
    } else if (board.every(cell => cell !== "")) {
      document.getElementById('status').textContent = "It's a draw!";
      gameOver = true;
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      document.getElementById('status').textContent = `Player ${currentPlayer}'s turn`;
    }
  }
}

function checkWin() {
  const winPatterns = [
    [0,1,2], [3,4,5], [6,7,8], // rows
    [0,3,6], [1,4,7], [2,5,8], // columns
    [0,4,8], [2,4,6]           // diagonals
  ];

  return winPatterns.some(pattern => {
    return pattern.every(i => board[i] === currentPlayer);
  });
}

function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  gameOver = false;
  currentPlayer = 'X';
  document.getElementById('status').textContent = `Player X's turn`;

  Array.from(document.getElementsByClassName('cell')).forEach(cell => {
    cell.textContent = "";
  });
}
