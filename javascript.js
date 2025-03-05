
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

console.log(getComputerChoice()) // shows computer choice in console

// Prompt user to enter rock, paper or scissors and assign to getHumanChoice
// convert input to all lower case

let input = prompt("Please enter rock, paper or scissors");

function getHumanChoice() { 
    return input.toLowerCase();
}

console.log(getHumanChoice()) // shows human choice in console

// Declare player score variables as humanScore and computerScore

let humanScore = 0;
let computerScore = 0;

// Write logic to play a single round
// Declare winner and assign score to humanScore and computerScore under a single round (playRound)



function playRound(humanChoice, computerChoice) 
{
    // write a check for if humanScore + computerScore = 0 
    // if 0 set both humanScore and computerScore to 0
    // if humanScore + computerScore >= 1 then allow to run as-is
        if(humanChoice === 'rock' && computerChoice === 'rock' ) {
        return "its a draw!"; }
    else if(humanChoice === 'paper' && computerChoice === 'paper') {
        return "its a draw!"; }
    else if (humanChoice === 'scissors' && computerChoice === 'scissors') {
        return "its a draw!"; }
    else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        computerScore +=1;  // increments by 2 on first loop?
        return "Computer wins!  Scissors beats paper.";}
    else if (humanChoice === 'paper' && computerChoice === 'rock') {
        humanScore +=1;
        return "Human wins!  Paper beats rock.";}
    else if (humanChoice === 'rock' && computerChoice === 'paper') {
        computerScore +=1;
        return "Computer wins!  Paper beats rock.";}
    else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        humanScore +=1;
        return "Human wins!  Rock beats scissors.";}
    else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore +=1;
        return "Human wins!  Scissors beats paper.";}
    else if (humanChoice === 'scissors' && computerChoice === 'rock') { 
        computerScore +=1;
        return "Computer wins!  Rock beats scissors.";}
    else { return ''
    };   
}

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

console.log(playRound(humanSelection, computerSelection));
console.log(humanScore);
console.log(computerScore);



// Loop game for 5 rounds, keeping overall score
//create a playGame function to call playGame for 5 rounds
// move the playRound function inside of playGame
