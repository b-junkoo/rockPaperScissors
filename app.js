const choices = ["rock", "paper", "scissors"];

function computerPlay() {
    return choices[Math.floor(Math.random()*choices.length)];
}

function playerSelection() {
    while (true) {
        let choice = prompt("Let's play rock, paper, scissors.");
        choice = choice.toLowerCase();

        if (choices.includes(choice)) {
            return choice;
        }  else {
            alert("Invalid choice.")
        }
    }
}

function game() {
    let compChoice = computerPlay();
    let compVal = compChoice.length;
    let playerChoice = playerSelection();
    let playerVal = playerChoice.length;

    if ((playerVal - compVal) == 4) {
        console.log(`You win, ${playerChoice} beats ${compChoice}`);
        return "a";
    } else if ((compVal - playerVal) == 4) {
        console.log(`You lose ${compChoice} beats ${playerChoice}`);
        return "b";
    } else if (compVal == playerVal) {
        console.log("Tie!");
        return "c";
    } else if (compVal > playerVal) {
        console.log(`You lose ${compChoice} beats ${playerChoice}`)
        return "d";
    } else {
        console.log(`You win, ${playerChoice} beats ${compChoice}`)
        return "e";
    }
}

function fiveGames() {
    let playerPoints = 0;
    let compPoints = 0;
    let result = game();

    for ( let games=0; games<5; games++ ) {
        
        if (result == "a") {
            playerChoice++;
        } else if (result == "b") {
            compPoints++;
        } else if (result == "c") {
            playerPoints++;
            compPoints++;
        } else if (result == "d") {
            compPoints++;
        } else if (result == "e") {
            playerPoints++;
        }

        result = game();

    }
    if (playerPoints > compPoints) {
        return `You won ${playerPoints} to ${compPoints}`;
    } else if (playerPoints < compPoints) {
        return `You lost ${playerPoints} to ${compPoints}`
    } else {
        return `Tie!`
    }
}

console.log(fiveGames());
