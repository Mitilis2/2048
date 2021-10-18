document.addEventListener('DOMContentLoaded', () =>{
    const gridDisplay = document.querySelector('.grid')
    const scoreDisplay = document.getElementById('score')
    const resultDisplay = document.getElementById('result')
    const widths = 4;
    let squares = []
    
    
    // create the play area

    function createBoard() {
     for (let i = 0; i < widths * widths; i++) {
            square = document.createElement('div')
            square.innerHTML = 0
            gridDisplay.appendChild(square)
           squares.push(square)
        
        
        
        }
    }

    createBoard()





})


