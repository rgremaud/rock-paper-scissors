let humanScore = 0;
let computerScore = 0;
let tieScore = 0;
let computerChoice = "";
let humanChoice = "";

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

    const gameOverText = document.createElement("h3")
    gameOverText.classList.add("gameOverText");
    gameOverText.textContent = `First to five wins.  Good luck!`

    container.appendChild(gameOverText);

// randomNumber for computer selection    

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
    button.addEventListener("click", function buttonClick() {
    mouseSelection = this.value;
    console.log("You selected " + mouseSelection);
    playRound();
    contentHS.textContent = `Human score is: ${humanScore}`;
    contentCS.textContent = `Computer score is: ${computerScore}`;
    contentTS.textContent = `Number of draws: ${tieScore}`;
    if (humanScore === 5 || computerScore === 5) {
        console.log("Game end test!")
        gameOver();
        button.removeEventListener("click", buttonClick);  // removes button click for each option once, allowing for win condition three times    
        rock.setAttribute("style", "color: blue; background: pink;");
        paper.setAttribute("style", "color: blue; background: pink;");
        scissors.setAttribute("style", "color: blue; background: pink;");
      }
  });
});

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
    if (humanScore === 5) {
        const humanWins = document.createElement("h3");
        humanWins.classList.add("humanWins");
        humanWins.textContent = `You win!  Good job!`;

        container.appendChild(humanWins);
        
    }
    else if (computerScore === 5) {
        const computerWins = document.createElement("h3");
        computerWins.classList.add("computerWins");
        computerWins.textContent = `You suck!  The computer wins.`;

        container.appendChild(computerWins);
      
    }
    else {
        ''
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