// Create two snails

class snail{
    constructor(name){
        this.name =name
        this.speed = 1
        this.wins = 0
    }
    move(){
        this.speed ++
    }
    stop(){
        this.speed--
    }
    rewards(){
        this.wins++ 
    }
    revoke(){
        this.wins--
    }
}

const Tom = new snail('Dom Tomato')
const Brian = new snail('Brian o Corn')

console.log(Tom.speed)
console.log(Brian.speed)

// This function should determine which snil is in the lead. This is not the final decision maker.
function score(){
    if(Tom.speed > Brian.speed){
        const lead = document.querySelector('#lead')
        lead.textContent =`${Tom.name} IS IN THE LEAD`
    } if(Tom.speed < Brian.speed){
        const lead = document.querySelector('#lead')
        lead.textContent =`${Brian.name} IS IN THE LEAD`
    }
}

// This function is meatn to determine who is the winner at the end of the race
// The way it should work is that it should read the to numbers labelled as this.speed
// on each snail, and from that determine if one has the speed larger than the other than that means
// the that the larger number is the winner. It does require a stopping counter which is my main issue at the moment
function winner(){
    if(Tom.speed==30 && Brian.speed == 0){
        Tom.rewards();

        leader.textContent = `${Tom.wins}` 
    } if(Brian.speed==30 && Tom.speed == 0){
        Brian.rewards();
        console.log(Brian.wins)
    }
}

const triumph = document.querySelector('#leader')
triumph.textContent =`${Tom.wins}-${Brian.wins}`

//Create a function that moves to images accross the screen 
// in incredibly small units depending on if you tap the specific key,
// to start players will need to spam one key on their available set,
//Player 1: 'D'
//Player 2: 'Right'

window.addEventListener('keyup', e =>{
    if(e.keyCode === 68){
        Tom.move();   
    }
    console.log(Tom.speed)
    if(Tom.speed>=10){
        const stats = document.querySelector('#P1')
        stats.textContent =`${Tom.name} has reached CHECK PT1`
    }
    if(Tom.speed>=20){
        const stats = document.querySelector('#P1')
        stats.textContent =`${Tom.name} has reached CHECK PT 2`
    }if(Tom.speed>=30){
        const stats = document.querySelector('#P1')
        stats.textContent =`${Tom.name} Finished the Race`
    }if(Tom.speed==31){
        Tom.stop();
        Tom.move();
        Tom.stop();
        Brian.speed = 0
    }if(Brian.speed==31){
        Tom.stop();
        Tom.move();
        Tom.stop();
        Tom.speed = 0
    }
    const check = document.querySelector('.p1')
    check.textContent =`${Tom.name}: ${Tom.speed}`
    score();
    winner();
});

const s1 =document.querySelector('#snail1')
s1.addEventListener('ketyup', e =>{
    if(e.keyCode === 68){
        document.getElementById('snail1').style.position =`translate-x(${Tom.speed}px)`
    }
})

document.getElementById('snail1').style.position =`translate-X(500px)`


window.addEventListener('keyup', e =>{
    if(e.keyCode === 39){
        Brian.move();   
    }
    console.log(Brian.speed)
    if(Brian.speed>=10){
        const stats = document.querySelector('#P2')
        stats.textContent =`${Brian.name} has reached CHECK PT1`
    }if(Brian.speed>=20){
        const stats = document.querySelector('#P2')
        stats.textContent =`${Brian.name} has reached CHECK PT2`
    }if(Brian.speed>=30){
        const stats = document.querySelector('#P2')
        stats.textContent =`${Brian.name} Finished the Race`
    }if(Brian.speed==31){
        Brian.stop();
        Brian.move();
        Brian.stop();
        Tom.speed = 0
    }if(Tom.speed==31){
        Brian.stop();
        Brian.move();
        Brian.stop();
        Brian.speed =0
    }
    const check = document.querySelector('.p2')
    check.textContent =`${Brian.name}: ${Brian.speed}`
    score();
    winner();
});



//Create a function that reads if the snail has reached a check point so that once you
// it starts asking for a sequence of keys such as doing a pattern.
//Player 1 'w','s','a','d','w','s','a','d','w','s','a','d'
//Player 2 'up', down', 'left', 'right', 'up', down', 'left', 'right', 'up', 'down', 'left', 'right','up', 'down', 'left', 'right'


//Once again create a function for that when you reach the second checkpoint your
//snail will start going faster than the beginning, while still requiring you
//spam a key on the keyboard.

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


//Add a function that changes the rounds
//It should be 3 races long and be best out of three