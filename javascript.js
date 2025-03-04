
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
// count is returning 2 for a win instead of 1

function playRound(humanChoice, computerChoice) 
{
    humanScore = 0;
    computerScore = 0;
    if(humanChoice === 'rock' && computerChoice === 'rock' ) {
        return "its a draw!"; }
    else if(humanChoice === 'paper' && computerChoice === 'paper') {
        return "its a draw!"; }
    else if (humanChoice === 'scissors' && computerChoice === 'scissors') {
        return "its a draw!"; }
    else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        return "Computer wins!  Scissors beats paper.", ++computerScore; }
    else if (humanChoice === 'paper' && computerChoice === 'rock') {
        return "Human wins!  Paper beats rock.", ++humanScore; }
    else if (humanChoice === 'rock' && computerChoice === 'paper') {
        return "Computer wins!  Paper beats rock.", ++computerScore; }
    else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        return "Human wins!  Rock beats scissors.", ++humanScore; }
    else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        return "Human wins!  Scissors beats paper.", ++humanScore; }
    else if (humanChoice === 'scissors' && computerChoice === 'rock') { 
        return "Computer wins!  Rock beats scissors.", ++computerScore; }
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