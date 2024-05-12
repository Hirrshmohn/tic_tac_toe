let board = ['','','','','','','','',''];
let currentPlayer = 'x';

const cells = document.querySelectorAll('.cell');

cells.forEach(cell => cell.addEventListener('click', clickHandler));

function clickHandler(e) {
	const id = e.target.id;
	if (board[id] == '') {
		board[id] = currentPlayer;
		e.target.textContent = currentPlayer;
		if (currentPlayer == 'x') {
			currentPlayer = 'o';
		} else {
		