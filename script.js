document.addEventListener('DOMContentLoaded', () =>{
    const gridDisplay = document.querySelector('.grid')
    const scoreDisplay = document.getElementById('score')
    const resultDisplay = document.getElementById('result')
    const widths = 4;
    let squares = []
    
    
    // create the play area

    function createBoard() {
     for (let i = 0; i < widths * widths; i++) {
           let square = document.createElement('div')
            square.innerHTML = 0
            gridDisplay.appendChild(square)
           squares.push(square)
        }
        generateNumber()
        generateNumber()
    }
    createBoard()


    
    // random number generator
    function generateNumber(){
       let randomNumber = Math.floor(Math.random() * squares.length)
       if(squares[randomNumber].innerHTML == 0) {
           squares[randomNumber].innerHTML = 2
       } else
           generateNumber()
    }




})


