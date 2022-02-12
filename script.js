let choices = ['Rock', 'Paper', 'Scissors'];
let compPlay = choices[Math.floor(Math.random() * choices.length)];
function computerPlay() {
    console.log(compPlay);
}
computerPlay();