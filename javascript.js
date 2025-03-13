// Generate random number for rock, paper or scissors for computer

function getComputerChoice() {
    let randomNumber = Math.random()
        if (randomNumber < 0.33) {
             return "rock";
       } else if (randomNumber < 0.66) {
            return "paper";
       } else {
           return "scissors";
       }
    }

// Button select for human selection

const buttons = document.querySelectorAll("button");
let humanSelection;

buttons.forEach((button) => {
    button.addEventListener("click", function() {
    humanSelection = this.value;
    console.log("You selected " + humanSelection);
  });
});

// set initial scores to 0

let humanScore = 0;
let computerScore = 0;
let tieScore = 0;

// play a single round of rock, paper, scissors

function playRound() {
    let computerSelection = getComputerChoice();
    let humanSelection = getHumanChoice();
    if(humanSelection === computerSelection) {
        tieScore +=1;
        return "its a draw!"; }
    else if (humanSelection === 'paper' && computerSelection === 'scissors') {
        computerScore +=1;  
        return "Computer wins!  Scissors beats paper.";}
    else if (humanSelection === 'paper' && computerSelection === 'rock') {
        humanScore +=1;
        return "Human wins!  Paper beats rock.";}
    else if (humanSelection === 'rock' && computerSelection === 'paper') {
        computerScore +=1;
        return "Computer wins!  Paper beats rock.";}
    else if (humanSelection === 'rock' && computerSelection === 'scissors') {
        humanScore +=1;
        return "Human wins!  Rock beats scissors.";}
    else if (humanSelection === 'scissors' && computerSelection === 'paper') {
        humanScore +=1;
        return "Human wins!  Scissors beats paper.";}
    else if (humanSelection === 'scissors' && computerSelection === 'rock') { 
        computerScore +=1;
        return "Computer wins!  Rock beats scissors.";}
    else { return ''
    };   
}

// gameOver function to display when game is over

function gameOver() {
    if (humanScore > computerScore) {
        console.log("Congrats! You win with a total of " + humanScore + ".  The computer scored " + computerScore +".");
    }
    else if (computerScore > humanScore) {
        console.log("You lose! The computer won with a total of " +computerScore + ".  You only scored " +humanScore + " point(s).");
    }
    else if (computerScore === humanScore) {
        console.log("Its a draw!  You both scored " + humanScore + ".");
    }
}

// Function to call playRound until five rounds are played

//function playGame() { 
    //console.log(playRound());
    //if (humanScore + computerScore + tieScore <= 4) {
        //playGame();
    //} else { 
   //gameOver();
   //}
//}

//playGame();