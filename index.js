const outcomes = {
    rock: {scissors: "win", paper: "lose", rock:"draw" },
    paper: {scissors: "lose", paper: "draw", rock:"win"},
    scissors: {scissors: "draw", paper: "win", rock: "lose"}
};

function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const index = Math.floor(Math.random() * choices.length);
    return choices[index];
}
function playRound(playerChoice, computerChoice){
    const result = outcomes[playerChoice][computerChoice];
    switch(result){
        case "win":
            console.log(`You win! ${playerChoice} beats ${computerChoice}`);
            break;
        case "lose":
            console.log(`You lose. ${computerChoice} beats ${playerChoice}`);
            break;
        case "draw":
            console.log("Draw.");
            break;
    }
}

const playerChoice = prompt("Enter your choice: ").toLowerCase();
const computerChoice = getComputerChoice();
playRound(playerChoice, computerChoice);
