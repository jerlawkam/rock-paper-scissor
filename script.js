
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

const userChoice = 'scissors';
const compChoice = computerPlay();
console.log(playRound(userChoice, compChoice));