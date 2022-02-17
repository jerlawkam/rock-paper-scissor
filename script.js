
//let compPlay = choices[Math.floor(Math.random() * choices.length)];
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

const userChoice = 'Scissors';
const compChoice = computerPlay();
const pR = playRound(userChoice.toLowerCase(), compChoice);
console.log(pR);

//function game() {
//    let pR = playRound(userChoice.toLowerCase(), compChoice)
//    for (let i = 0; i < 5; i++) {
//        if (pR === `It's a tie.`) {
//            
//        } 
//    }
//}

//game();