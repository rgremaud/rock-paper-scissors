
// Create function named getComputerChoice where rock, paper or scissors is randomly selected

let randomNumber = Math.random()

console.log(randomNumber)

function getComputerChoice() {
        if (randomNumber < 0.33) {
             return "rock";
       } else if (randomNumber < 0.66) {
            return "paper";
       } else {
           return "scissors";
       }
    }

console.log(getComputerChoice())

// Prompt user to enter rock, paper or scissors and assign to getHumanChoice
// convert input to all lower case

let input = prompt("Please enter rock, paper or scissors");

function getHumanChoice() { 
    return input.toLowerCase();
}

console.log(getHumanChoice())

// Declare player score variables as humanScore and computerScore

let humanScore = 0;
let computerScore = 0;

// Write logic to play a single round

function playRound(humanChoice, computerChoice) {
    if(humanChoice === 'rock' && computerChoice === 'rock' )
        return "its a draw!";
    else if(humanChoice === 'paper' && computerChoice === 'paper')
        return "its a draw!";
    else if (humanChoice === 'scissors' && computerChoice === 'scissors')
        return "its a draw!";
    else if (humanChoice === 'paper' && computerChoice === 'scissors')
        return "add 1 to computerChoice";
    else if (humanChoice === 'paper' && computerChoice === 'rock')
        return "add 1 to humanChoice";
    else if (humanChoice === 'rock' && computerChoice === 'paper')
        return "add 1 to humanChoice";
    else if (humanChoice === 'rock' && computerChoice === 'scissors')
        return "add 1 to humanChoice";
    else if (humanChoice === 'scissors' && computerChoice === 'paper')
        return "add 1 to humanChoice";
    else if (humanChoice === 'scissors' && computerChoice === 'rock')
        return "add 1 to computerChoice";
    else {
        return '';
    }    
}

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();


playRound(humanSelection, computerSelection);
console.log(playRound(humanSelection, computerSelection));

// Decare winner and assign score to humanScore and computerScore under a single round (playRound)

// Loop game for 5 rounds, keeping overall score