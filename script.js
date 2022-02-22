
function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(userChoice, compChoice) {

    switch (true) {
        case userChoice === 'paper' && compChoice === 'paper':
        case userChoice === 'rock' && compChoice === 'rock':
        case userChoice === 'scissors' && compChoice === 'scissors':
            return `It's a tie.`;
            break;
        case userChoice === 'paper' && compChoice === 'scissors':
            return 'You lose, scissors beats paper.';
            break;
        case userChoice === 'paper' && compChoice === 'rock':
            return 'You win! Paper beats rock!';
            break;
        case userChoice === 'rock' && compChoice === 'paper':
            return 'You lose, paper beats rock.';
            break;
        case userChoice === 'rock' && compChoice === 'scissors':
            return 'You win! Rock beats scissors!';
            break;
        case userChoice === 'scissors' && compChoice === 'rock':
            return 'You lose, rock beats scissors.';
            break;
        case userChoice === 'scissors' && compChoice === 'paper':
            return 'You win! Scissors beats paper!';
            break;
        default:
            return '';            
    }
}


function game() {
    let pPt = 0
    let cPt = 0

    for (let i = 0; i < 5; i++) {
        const userChoice = prompt('Rock, Paper or Scissors?');
        const compChoice = computerPlay();
        let pR = playRound(userChoice.toLowerCase(), compChoice);
        if (pR === 'You win! Paper beats rock!' || pR === 'You win! Rock beats scissors!' || pR === 'You win! Scissors beats paper!') {
            pPt++;
        } else if (pR === `It's a tie.`) {
            pPt === pPt && cPt === cPt;
        } else {
            cPt++;
        }
        console.log(pR);
        console.log('your score = ' + pPt);
        console.log("Computer's score = " + cPt);

    }

    if (pPt > cPt) {
        console.log('You are the winner!');
    } else if (cPt > pPt) {
        console.log('You lose!');
    } else {
        console.log("Wah Wah Waahh..it's a tie.");
    }
}
game();
