// Generate random number for rock, paper or scissors for computer
// New formatting to allow calling function in playGame

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

// Function for human selection
// New formatting so I can call it in playGame

function getHumanChoice() { 
    let input = prompt("Please enter rock, paper or scissors");
    return input.toLowerCase();
        }

// set initial scores to 0

let humanScore = 0;
let computerScore = 0;

// play a single round of rock, paper, scissors

function playRound() {
    let computerSelection = getComputerChoice();
    console.log("Computer has selected " +computerSelection)
    let humanSelection = getHumanChoice();
    console.log("Human has selected " +humanSelection)
    if(humanSelection === computerSelection) {
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

//const computerSelection = getComputerChoice();
//const humanSelection = getHumanChoice();

// Loop game for 5 rounds, keeping overall score
// endGame function to display when game is over

function gameOver() {
    if (humanScore > computerScore) {
        console.log("Congrats you win with a total of " +humanScore);
    }
    else if (computerScore > humanScore) {
        console.log("You lose! The computer won with a total of " +computerScore);
    }
    else if (computerScore === humanScore) {
        console.log("Its a draw!  You both scored " +humanScore);
    }
}

// Function to call playRound until five rounds are played

function playGame() { 
    console.log(playRound());
    if (humanScore + computerScore <= 5) {
        playGame();
    } else { 
   gameOver();
   }
}

//playGame();