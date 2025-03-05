
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


function playRound(humanChoice, computerChoice) 
{
        if(humanChoice === 'rock' && computerChoice === 'rock' ) {
        return "its a draw!"; }
    else if(humanChoice === 'paper' && computerChoice === 'paper') {
        return "its a draw!"; }
    else if (humanChoice === 'scissors' && computerChoice === 'scissors') {
        return "its a draw!"; }
    else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        computerScore +=.5;  // tried using ++ but kept adding 2 instead of 1?
        return "Computer wins!  Scissors beats paper.";}
    else if (humanChoice === 'paper' && computerChoice === 'rock') {
        humanScore +=.5;
        return "Human wins!  Paper beats rock.";}
    else if (humanChoice === 'rock' && computerChoice === 'paper') {
        computerScore +=.5;
        return "Computer wins!  Paper beats rock.";}
    else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        humanScore +=.5;
        return "Human wins!  Rock beats scissors.";}
    else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore +=.5;
        return "Human wins!  Scissors beats paper.";}
    else if (humanChoice === 'scissors' && computerChoice === 'rock') { 
        computerScore +=.5;
        return "Computer wins!  Rock beats scissors.";}
    else { return ''
    };   
}

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();


playRound(humanSelection, computerSelection);
console.log(playRound(humanSelection, computerSelection));
console.log(humanScore);
console.log(computerScore);

// Decare winner and assign score to humanScore and computerScore under a single round (playRound)

// Loop game for 5 rounds, keeping overall score