const outcomes = {
    rock: {scissors: "win", paper: "lose", rock:"draw" },
    paper: {scissors: "lose", paper: "draw", rock:"win"},
    scissors: {scissors: "draw", paper: "win", rock: "lose"}
};

let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const index = Math.floor(Math.random() * choices.length);
    return choices[index];
}
function playRound(playerChoice, computerChoice){
    const result = outcomes[playerChoice][computerChoice];
    const resultsDiv = document.querySelector('#results');
    const scoreboard = document.querySelector('#scoreboard');
    const winner = document.querySelector('#winner');
    let message = '';
    switch(result){
        case "win":
            message = `You win! ${playerChoice} beats ${computerChoice}`;
            playerScore++;
            break;
        case "lose":
            message = `You lose. ${computerChoice} beats ${playerChoice}`;
            computerScore++;
            break;
        case "draw":
            message = "Draw.";
            break;
    }
    scoreboard.textContent = "Player Score: " + playerScore + " | Computer Score: " + computerScore;
    resultsDiv.textContent = message;

    if(playerScore === 5 || computerScore === 5){
        const winner = playerScore === 5? 'Player' : 'Computer';
        winner.textContent += `\n${winner} wins the game!`;
        playerScore = 0;
        computerScore = 0;
    }
}

const computerChoice = getComputerChoice();

const scissorsButton = document.querySelector('#scissors-button');
const rockButton = document.querySelector('#rock-button');
const paperButton = document.querySelector('#paper-button');

scissorsButton.addEventListener('click', () => {
    const player = "scissors";
    const computerChoice = getComputerChoice();
    playRound(player, computerChoice);
})

rockButton.addEventListener('click', () => {
    const player = "rock";
    const computerChoice = getComputerChoice();
    playRound(player, computerChoice)
})
paperButton.addEventListener('click', () => {
    const player = "paper";
    const computerChoice = getComputerChoice();
    playRound(player, computerChoice);
})




