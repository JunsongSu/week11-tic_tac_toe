$(document).ready(function(){
    // the begining player is X, and each of the cell is empty
    let currentPlayer = 'X';
    let gameBoard = ['', '', '', '', '', '', '', '', ''];
    let gameActive = true;

    const checkResult = () => {
        for (let i = 0; i <3; i++){
            // check if row and colum is the same player 
            if (
                (gameBoard[i*3] === currentPlayer && gameBoard [i*3 +1] === currentPlayer && gameBoard [i*3+2] === currentPlayer)||(gameBoard[i] === currentPlayer && gameBoard[i+3] === currentPlayer && gameBoard[i+6]=== currentPlayer)
            ){
                return true;
            }
            
            // check if diagonally the same player
            if (
                (gameBoard[0] === currentPlayer && gameBoard[4] === currentPlayer && gameBoard[8] === currentPlayer) || (gameBoard[2] === currentPlayer && gameBoard[4] === currentPlayer && gameBoard [6] === currentPlayer)
            ){
                return true;
            }
            // check for a draw
            if (!gameBoard.includes('')){
                displayResult ('It\'s a draw!');
                return false;
            }

        }
        return false;   
    }

    // this function displays a winner or draw 
    const displayResult = (message) => {
        alert(message);
        gameActive = false;
    };


    const handleCellClick = (index) => {
        if (gameBoard[index] === '' && gameActive) {
            gameBoard[index] = currentPlayer;
            $(`td[data-index = ${index}]`).text(currentPlayer);
            // it will check for winner, otherwise will switch player
            if (checkResult()){
                displayResult (`Player ${currentPlayer} wins!`);
            } else {
                currentPlayer =currentPlayer === 'X' ? 'O' : 'X';
                $('#turnText').text(`It's ${currentPlayer}'s turn`);
            }
        }
    }

    // it get the indext from cell clicked
    $('#gameBoard td').on('click', function (){
        const index = $(this).data('index');
        handleCellClick(index);
    });

    // the reset button will clear the board
    $('#restartBtn').on('click', function(){
        gameBoard = ['', '', '', '', '', '', '', '', ''];
        gameActive = true;
        currentPlayer ='X';
        $('#gameBoard td').text ('');
        $('#turnText').text(`It's ${currentPlayer}'s turn`);
    });
});

