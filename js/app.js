
// * Reset Button
resetButton = document.querySelector('#reset')


// * ID Message
idMessage = document.querySelector("#message")




/*-------------------------------- Constants --------------------------------*/


turn = 'O'
winner = false
tie = false



let board = [
    '', '', '',
    '', '', '',
    '', '', ''
]


squareElement = document.querySelectorAll('.sqr');


squareElement.forEach((square) => {
    
    square.addEventListener('click', handleClick) 
})

    
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

// we could use 'turn' here

const checkForWinner = () => {
    winningCombos.forEach((winningCombo) => {
        if ((board[winningCombo[0]]) === "") {
            return
        } else if ((board[winningCombo[0]] === board[winningCombo[1]]) && (board[winningCombo[0]] === board[winningCombo[2]])) {
            winner = true
        } else {
            return
        }
        
        updateMessage()
        render()
    })
    
    }







/*------------------------ Cached Element References ------------------------*/

// * Reset Button
resetButton = document.querySelector('#reset')



// * ID Message
idMessage = document.querySelector("#message")

/*-------------------------------- Functions --------------------------------*/


function render() {
    updateBoard
    updateMessage
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




/*----------------------------- Event Listeners -----------------------------*/

resetButton.addEventListener('click', reset)



