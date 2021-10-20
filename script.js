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
    //  swipe right

    function rightSwipe(){
        for(let i = 0; i < 16; i++){
            if (i % 4 === 0){
                let totalOne = squares[i].innerHTML
                let totalTwo = squares[i+1].innerHTML
                let totalThree = squares[i+2].innerHTML
                let totalFour = squares[i+3].innerHTML
                let row =  [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]
                let filteredRow = row.filter(num => num)
                let missingElement = 4 - filteredRow.length
                let zeros = Array(missingElement).fill(0)
                let newRow = zeros.concat(filteredRow)

                squares[i].innerHTML = newRow[0]
                squares[i+1].innerHTML = newRow[1]
                squares[i+2].innerHTML = newRow[2]
                squares[i+3].innerHTML = newRow[3]
            
            }
        }
    }

 
// swipe left

function leftSwipe(){
    for(let i = 0; i < 16; i++){
        if (i % 4 === 0){
            let totalOne = squares[i].innerHTML
            let totalTwo = squares[i+1].innerHTML
            let totalThree = squares[i+2].innerHTML
            let totalFour = squares[i+3].innerHTML
            let row =  [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]
            let filteredRow = row.filter(num => num)
            let missingElement = 4 - filteredRow.length
            let zeros = Array(missingElement).fill(0)
            let newRow = filteredRow.concat(zeros)


            squares[i].innerHTML = newRow[0]
            squares[i+1].innerHTML = newRow[1]
            squares[i+2].innerHTML = newRow[2]
            squares[i+3].innerHTML = newRow[3]
        
        }
    }
}

    function combineRowNumbers(){
        for(let i = 0; i < 15; i++){
            if(squares[i].innerHTML === squares[i+1].innerHTML){
                let combinedTotal = parseInt(squares[i].innerHTML) + parseInt(squares[i+1].innerHTML)
                squares[i].innerHTML = combinedTotal
                squares[i+1].innerHTML = 0
            }
        }
    }

    // keyboard functionality

    function control(e){
        if(e.keyCode === 39){
            keyRight()
        } else if(e.keyCode === 37){
            keyLeft()
        }
    }
    document.addEventListener('keyup', control)

function keyRight(){
    rightSwipe()
    combineRowNumbers()
    rightSwipe()
    generateNumber()
}
 
function keyLeft(){
    leftSwipe()
    combineRowNumbers()
    leftSwipe()
    generateNumber()
}
 











})


