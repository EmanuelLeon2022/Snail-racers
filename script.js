// Create two snails

class snail{
    constructor(name){
        this.name =name
        this.speed = 7
    }
    move(){
        this.speed ++
    }
}

const Tom = new snail('Dom')

console.log(Tom.speed)


//use a query selector to read two separate keys on the computer.
// The keys I want to select for snail 1 are 'A', 'W', 'S', 'D'
// The keys I want to select for snail 2 are 'Left', 'Up', 'Down', 'Right'
const run = document.querySelector('.run')
run.addEventListener('click', ()=>{
    Tom.move();
    Tom.move();
    Tom.move();
    const check = document.querySelector('.count')
    check.textContent =`${Tom.speed}`
})

//Create a function that moves to images accross the screen 
// in incredibly small units depending on if you tap the specific key,
// to start players will need to spam one key on their available set,
//Player 1: 'D'
//Player 2: 'Right'

//Create a function that reads if the snail has reached a check point so that once you
// it starts asking for a sequence of keys such as doing a pattern.
//Player 1 'w','s','a','d','w','s','a','d','w','s','a','d'
//Player 2 'up', down', 'left', 'right', 'up', down', 'left', 'right', 'up', 'down', 'left', 'right','up', 'down', 'left', 'right'

//Once again create a function for that when you reach the second checkpoint your
//snail will start going faster than the beginning, while still requiring you
//spam a key on the keyboard.
//Player 1: 'A'
//Player 2: 'Left'

//Lastly create a function that sees which snail crossed the finish line first
//This will declare the person to have crossed the finish line first as the TURBO THUNDER SNAIL RACING CHAMPION!!!

// From there also create atie function that determinse that if you both were
// in between a 5px range at the finish line, have a rematch, flip a coin, or do RPS(Rock, Paper, Scissors)"P.S. I MIGHT NOT DO THIS YET DUE TO POSSIBLE TIME AND CODING ISSUES"

//If rematch it will reset the entire race and you start of with the same controls.

//If flip a coin, make a function that math randoms a 1 or a 0
// if the value is 1, than player 1 wins, if the value is 0 than player 2 will win.

//THIS WILL BE ONLY IF PLAYER CHOOSES TO DO RPS INSTEAD OF COIN FLIP

//If Rock Paper Scissors
//then create a timer to choose what item you will use.
//Player 1:
    //Rock = 'A'
    //Paper = 'S'
    //Scissors = 'D'
//Player 2:
    //Rock = 'Left'
    //Paper = 'Down'
    //Scissors = 'Right'
//If timer is still going hit 'W'/'Up' to store your item
//Once timer is finished it evaluates these truths
    //Rock beats Scissors
    //Rock vs Rock = stalemate
    //Paper beats rock
    //Paper vs Paper = stalemate
    //Scissors beats paper
    //Scissors vs Scissors = stalemate
    //if stalemate then repeat timer
//Once someone wins this declare the winning RPS winner as the TURBO THUNDER SNAIL RACING CHAMPION!!!
