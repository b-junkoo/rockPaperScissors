function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random()*choices.length)];
}

function game(e) {
    let compChoice = computerPlay();
    let compVal = compChoice.length;
    let playerChoice = e.target.id;
    let playerVal = playerChoice.length;

    if ((playerVal - compVal) == 4) {
        results.textContent = `You win, ${playerChoice} beats ${compChoice}`;
        playerScore+=1;
        scores.textContent = `Your score: ${playerScore}, Gnome score: ${compScore}`

    } else if ((compVal - playerVal) == 4) {
        results.textContent = `You lose ${compChoice} beats ${playerChoice}`;
        compScore+=1;
        scores.textContent = `Your score: ${playerScore}, Gnome score: ${compScore}`

    } else if (compVal == playerVal) {
        results.textContent = "Tie!";

    } else if (compVal > playerVal) {
        results.textContent = `You lose ${compChoice} beats ${playerChoice}`;
        compScore+=1;
        scores.textContent = `Your score: ${playerScore}, Gnome score: ${compScore}`
    } else {
        results.textContent = `You win, ${playerChoice} beats ${compChoice}`;
        playerScore+=1;
        scores.textContent = `Your score: ${playerScore}, Gnome score: ${compScore}`
    }
}

const buttons = document.querySelectorAll('button');
let playerScore = 0;
let compScore = 0;

buttons.forEach((button) => {
    button.addEventListener('click', e => {
        game(e);
    });
})
