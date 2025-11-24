const attempt = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('#choice-btn');



function getComputerChoice () {
    const choices = ["rock", "paper", "scissor"];
    const randomValue = Math.floor(Math.random()*choices.length);
    return choices[randomValue];
}

button.addEventListener('click', (e) => {
    e.preventDefault();
    const currentRound = attempt.querySelectorAll('li').length + 1;
    if (currentRound > 5) {
        return; // Do nothing if already played 5 rounds
    }

    const humChoice = input.value.toLowerCase().trim();
    const message = document.createElement('p');

    if (!["rock", "paper", "scissor"].includes(humChoice)) {
        message.textContent = `Round ${currentRound} - Invalid choice, please choose again: rock, paper, scissor`;
        attempt.appendChild(message);
        return;
    }
        
    
    message.textContent = `You chose ${humChoice}`;
    const result = document.createElement('p');
    const newround = document.createElement('p');    

    const computerChoice = getComputerChoice();

    const comChoice = document.createElement('li');
    comChoice.textContent =`Round ${currentRound} - Human Choice: ${humChoice} - Computer Choice: ${computerChoice}`;
    attempt.appendChild(comChoice);
    attempt.appendChild(message);
    attempt.appendChild(result);
    attempt.appendChild(newround);

    newround.textContent = `You have ${5 - currentRound} rounds left`;
    

    if (humChoice === computerChoice) {
        result.textContent = 'It is a tie';
    } else if (
        (humChoice === "rock" && computerChoice === "scissor")|| 
        (humChoice === "paper" && computerChoice === "rock") || 
        (humChoice === "scissor" && computerChoice === "paper") 
    ) {
        result.textContent = 'You win this round';
    } else {
        result.textContent = 'Computer wins this round';
    }
    if (attempt.querySelectorAll('li').length === 5) {
        button.disabled = true;
        const finalMessage = document.createElement('p');
        finalMessage.textContent = 'Game over! You have played 5 rounds.';
        attempt.appendChild(finalMessage);
    }
    input.value = '';
    input.focus();
    



});



