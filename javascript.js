let humanScore = 0;
let computerScore = 0;
let tieScore = 0;
let computerChoice = "";
let humanChoice = "";


function getComputerChoice(computerChoice) {
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
    mouseSelection = this.value;
    console.log("You selected " + mouseSelection);
    playRound();
    contentHS.textContent = `Human score is: ${humanScore}`;
    contentCS.textContent = `Computer score is: ${computerScore}`;
    contentTS.textContent = `Number of draws: ${tieScore}`;
  });
});


const container = document.querySelector("#container");

    const contentHS = document.createElement("div");
    contentHS.classList.add("contentHS");
    contentHS.textContent = `Human score is: ${humanScore}`;

    container.appendChild(contentHS);

    const contentCS = document.createElement("div");
    contentCS.classList.add("contentHS");
    contentCS.textContent = `Computer score is: ${computerScore}`;

    container.appendChild(contentCS);

    const contentTS = document.createElement("div");
    contentTS.classList.add("contentTS");
    contentTS.textContent = `Number of draws: ${tieScore}`;

    container.appendChild(contentTS);



// define a function for updating the score board
// call the function as part of playRound function
// function updateScore(humanScore,computerScore)

function updateScoreboard(computerScore, humanScore) {
    document.querySelector('.computer_score').textContent = computerScore;
    document.querySelector('.player_score').textContent = humanScore;
}


// play a single round of rock, paper, scissors

function playRound() {
    let computerSelection = getComputerChoice();
    console.log("The computer selected " + computerSelection);
    let humanSelection = mouseSelection;
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