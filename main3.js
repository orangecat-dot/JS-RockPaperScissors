//1. the player should be able to play the game by clicking on buttons 
// rather than typing their answer in a prompt.
//2. Add a div for displaying results
//3. change all of your console.logs into DOM methods.
//4. Display the running score, 
//announce a winner of the game once one player reaches 5 points.

const attempt = document.querySelector('ul');
const input = document.querySelector('input');
const btnrock = document.querySelector('#rock');
const btnpaper = document.querySelector('#paper');
const btnscissor = document.querySelector('#scissor');
const p2 = document.createElement('p');
const p3 = document.createElement('p');



let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
    const choices = ["rock", "paper", "scissor"];
    const randomValue = Math.floor(Math.random()*choices.length);
    return choices[randomValue];

}

function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        console.log("It's a tie");
        p2.textContent = "It's a tie";
        humanScore++;
        computerScore++;

    } else if (
        (humanChoice === "rock" && computerChoice === "scissor")|| 
        (humanChoice === "paper" && computerChoice === "rock") || 
        (humanChoice === "scissor" && computerChoice === "paper") 
    ) {
        humanScore++;
        p2.textContent = "You win this round";
    } else {
        p2.textContent = "Computer wins this round";
        computerScore++;
    }   

    p3.textContent = `Your score: ${humanScore} - Computer score: ${computerScore}`;

}

// function playGame() {
//     for (let round = 0; round < 5; round++) {
//         const humanChoice = getHumanChoice();
//         const ChcomputerChoiceoice = getComputerChoice();
//         playRound(humanChoice, ChcomputerChoiceoice);
//         console.log("Let's do another round");
//     }
//     console.log("We reached round limit");
// }



let form = document.querySelector('form');

form.addEventListener('click', (event) => {
    event.preventDefault();
    const listAttempts = document.createElement('li');
    const currentRound = attempt.querySelectorAll('li').length + 1;
    if (currentRound > 5) {
        return; // Do nothing if already played 5 rounds
    }
    let target = event.target;
    let humChoice;
    switch(target.id) {
        case 'rock':
            console.log('Rock was chosen');
            humChoice = "rock";
            break;
        case 'paper':
            console.log('Paper was chosen');
            humChoice = "paper";
            break;
        case 'scissor':
            console.log('Scissor was chosen');
            humChoice = "scissor";
            break;

    }

    const comChoice = getComputerChoice();
    playRound(humChoice, comChoice);
    
    const p1 = document.createElement('p');
    p1.textContent = `Round ${currentRound} - Human Choice: ${humChoice} - Computer Choice: ${comChoice} `;
    const resultDiv = document.createElement('div');

    resultDiv.innerHTML = ''; // Clear previous results
    resultDiv.appendChild(p1);
    resultDiv.appendChild(p2);
    resultDiv.appendChild(p3);
    listAttempts.appendChild(resultDiv);
    attempt.appendChild(listAttempts);

    if (humanScore === 5 || computerScore === 5) {
        if (humanScore === 5) {
        winner = "Human";
        } else {winner = "Computer"
        }
        const p4 = document.createElement('p');
        p4.textContent =`${winner} reached 5 points first, ${winner} is the winner.`;
        attempt.appendChild(p4);
    }
    
});



        //translate the buttons into msg in resultDiv

