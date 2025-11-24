function getComputerChoice () {
    const choices = ["rock", "paper", "scissor"];
    const randomValue = Math.floor(Math.random()*choices.length);
    return choices[randomValue];

}

function getHumanChoice() {
    const userChoices = prompt("Please choose one: rock, paper or scissor");
    const choice = userChoices.toLowerCase();

    if (choice == "rock" || choice == "paper" || choice == "scissor") {
        return choice;
    } else {
        console.log("Invalid choice, please choose again: rock, paper, scissor");
        return getHumanChoice();
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    console.log(`You chose ${humanChoice}`);
    console.log(`Computer chose ${computerChoice}`);

    if (humanChoice === computerChoice) {
        console.log("It's a tie");
        humanScore++;
        computerScore++;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissor")|| 
        (humanChoice === "paper" && computerChoice === "rock") || 
        (humanChoice === "scissor" && computerChoice === "paper") 
    ) {
        humanScore++;
        console.log("You win this round");
    } else {
        console.log("Computer wins this round");
        computerScore++;
    }   

    console.log(`Your score: ${humanScore} - Computer score: ${computerScore}`);

}

// const humanChoice = () => getHumanChoice();
// const computerChoice = () => getComputerChoice();

// playRound(humanChoice, computerChoice);

// function playGame2(){
//     let round = 0;
//     do {
//         const humanChoice = getHumanChoice();
//         const ChcomputerChoiceoice = getComputerChoice();
//         playRound(humanChoice, ChcomputerChoiceoice);
//         console.log("Let's do another round");
//         round++;
//     } while (round < 5);
// }

// playGame2()

function playGame() {
    for (let round = 0; round < 5; round++) {
        const humanChoice = getHumanChoice();
        const ChcomputerChoiceoice = getComputerChoice();
        playRound(humanChoice, ChcomputerChoiceoice);
        console.log("Let's do another round");
    }
    console.log("We reached round limit");
}


playGame()
