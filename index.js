let result = document.getElementById('result');
let user = document.getElementById('userscore');
let computer = document.getElementById('computerscore');

function buttonpressed(value) {
    play(value);
}

function reset(value) {
    result.value = "";
    user.value, computer.value = Number(0);
}

function play(value) {
    let choices = ["rock", "paper", "scissor"];
    let comp_index = Math.floor(Math.random() * choices.length);
    let comp = choices[comp_index];
    let me = value;

    switch (comp + me) {
        case 'rockrock':
        case 'paperpaper':
        case 'scissorscissor':
            result.value = `ITS A TIE! Your choice: ${me} Computer choice: ${comp}`;
            break;
        case 'paperrock':
        case 'scissorpaper':
        case 'rockscissor':
            result.value = `YOU LOSE! Your choice: ${me}  Computer choice: ${comp}`;
            computer.value = Number(computer.value)+1;
            break;
        case 'rockpaper':
        case 'paperscissor':
        case 'scissorrock':
            result.value = `YOU WIN! Your choice: ${me} Computer choice: ${comp}`;
            user.value = Number(user.value)+1;
            break;
        default:
            result.value = 'Invalid Input';
            break;
    }
}
