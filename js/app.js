




/*-------------------------------- Constants --------------------------------*/

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [2, 4, 7],
    [3, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

/*-------------------------------- Variables --------------------------------*/

turn = 'O'
winner = false
tie = false



let board = [
    '', '', '',
    '', '', '',
    '', '', ''
]

/*------------------------ Cached Element References ------------------------*/


// Select Squares
const squareElement = document.querySelectorAll('.sqr');
// Reset Button
const resetButton = document.querySelector('#reset')
// ID Message
const idMessage = document.querySelector("#message")


/*----------------------------- Event Listeners -----------------------------*/

resetButton.addEventListener('click', reset)

/*----------------------------- Functions -----------------------------*/

function reset() {
    // BOARD RESET
    board = ['', '', '', '', '', '', '', '', '']
    // CLICK COUNT RESET
    clickCount = 0
    // MESSAGE
    idMessage.innerText = ''
    // DISPLAY RESET
    squareElement.forEach((square) => {
        square.innerText = ''
    })
    winner = false
    tie = false
}

squareElement.forEach((square) => {
    
    square.addEventListener('click', handleClick) 
})






const checkForWinner = () => {
    if(
        (board[0] !== '' && board[0] === board[1] && board[0] === board[2]) ||
        (board[3] !== '' && board[3] === board[4] && board[3] === board[5]) ||
        (board[6] !== '' && board[6] === board[7] && board[6] === board[8]) ||
        (board[0] !== '' && board[0] === board[3] && board[0] === board[6]) ||
        (board[1] !== '' && board[1] === board[4] && board[1] === board[7]) ||
        (board[2] !== '' && board[2] === board[5] && board[2] === board[8]) ||
        (board[0] !== '' && board[0] === board[4] && board[0] === board[8]) ||
        (board[2] !== '' && board[2] === board[4] && board[2] === board[6])
    ) {
        winner = true;
    }
    render()
}   



// Level Up approach:
// const checkForWinner = () => {
//   winningCombos.forEach((winningCombo) => {
//     if (
//       board[winningCombo[0]] !== '' && 
//       board[winningCombo[0]] === board[winningCombo[1]] &&
//       board[winningCombo[0]] === board[winningCombo[2]]
//     ) {
//       winner = true;
//     }
//   })
// };



const checkForTie = () => {
    if (winner) {
      return;
    }
  
    if (!board.includes('')) {
      tie = true;
    }
  };




function render() {
    updateBoard
    updateMessage()
}


function updateBoard() {
    // DOES NOTHING CURRENTLY
}


function updateMessage() {
    if (winner === false && tie === false) {
        return
    } else if (winner === true) {
        idMessage.innerText = "We have a winner!"
    } else {
        idMessage.innerText = "We have a tie! 🙀"
    }
}








function handleClick(event) {
    switchPlayerTurn()


    const clickSquare = event.target.id

    
    
    if (winner === true) {
        return
    }    
    if(board[clickSquare] !== '') {
        return
    } else if (board[clickSquare] === '') {
        board.splice(clickSquare, 1, turn)
        event.target.innerText = turn
    } 

    checkForWinner()
    checkForTie()
    render()
}


function switchPlayerTurn() {
    if(winner === true) {
        return
    } else if (turn === 'X') {
        turn = "O"
    } else if (turn === "O") {
        turn = "X"
    }
}


