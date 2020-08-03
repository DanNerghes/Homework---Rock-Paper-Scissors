const start = document.querySelector('.start');
const buttons = document.querySelector('.buttons');
const message = document.querySelector('.message');
const playerOption = document.querySelector('.playerOption');
const computerOption = document.querySelector('.computerOption');
const playerPic = document.querySelector('#player-img');
const statusPic = document.querySelector('#status-img');
const computerPic = document.querySelector('#computer-img');
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');

const playerInitialScore = (function() {
    let pScore = 0;
    return {
        increment: function() {
            pScore++;
            playerScore.innerHTML = pScore;
            return pScore;
        },
        reset: function() {
            pScore = 0;
            playerScore.innerHTML = pScore;
            return pScore;
        },
    }
})();

const computerInitialScore = (function() {
    let cScore = 0;
    return {
        increment: function() {
            cScore++;
            computerScore.innerHTML = cScore;
            return cScore;
        },
        reset: function() {
            cScore = 0;
            computerScore.innerHTML = cScore;
            return cScore;
        },
    }
})();

start.addEventListener('click', play);

function play() {    
    
    playerPic.setAttribute('src', 'img/player.png');
    statusPic.setAttribute('src', 'img/default.jpg');
    computerPic.setAttribute('src', 'img/computer.png');
    
    playerOption.innerText = '';
    computerOption.innerText = '';
    message.innerText = 'Choose youre option!';

    playerInitialScore.reset();
    computerInitialScore.reset();
    
    buttons.addEventListener('click', gameResult);
}


function randomPick() {
    const pickOptions = ['rock', 'paper', 'scissors'];
    let randomNr = Math.floor(Math.random() * pickOptions.length);
    return pickOptions[randomNr];
}

function playerWin() {
    message.innerText = 'You win!';
    statusPic.setAttribute('src', 'img/win.jpg');
    playerInitialScore.increment();
}

function playerLose() {
    message.innerText = 'You lose';
    statusPic.setAttribute('src', 'img/lose.jpg');
    computerInitialScore.increment();
}

function gameDraw() {
    message.innerText = 'Draw game';
    statusPic.setAttribute('src', 'img/default.jpg');
}

function gameResult() {
    let playerPick = event.target.dataset.option;
    let computerPick = randomPick();
    
    playerPic.setAttribute('src', 'img/' + playerPick + '.png');
    computerPic.setAttribute('src', 'img/' + computerPick +'.png');
    
    playerOption.innerText = 'picked: ' + playerPick;
    computerOption.innerText = 'picked: ' + computerPick;
    
    if(playerPick === 'rock' && computerPick === 'paper'){
        playerLose();
    }else if(playerPick === 'rock' && computerPick === 'scissors'){
        playerWin();
    }else if(playerPick === 'scissors' && computerPick === 'rock'){
        playerLose();
    }else if(playerPick === 'scissors' && computerPick === 'paper'){
        playerWin();
    }else if(playerPick === 'paper' && computerPick === 'rock'){
        playerWin();
    }else if(playerPick === 'paper' && computerPick === 'scissors'){
        playerLose();
    }else{
        gameDraw();
    }
}