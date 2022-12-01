const againBTn = document.querySelector('.again')
const checkBtn = document.querySelector('.check')
let messageState = document.querySelector('.message')
let number = document.querySelector('.number')
let scoreMessage = document.querySelector('.score')
let highScoreMessage = document.querySelector('.highscore')
// Css
let bgColor = document.querySelector('body')

let secretNumber = Math.trunc(Math.random()*20 + 1)
let score = 20
let highScore = 0

const displayMessage = function(message) {
    messageState.textContent = message
}

checkBtn.addEventListener('click', function(){    
    let guess = Number(document.querySelector('.guess').value);
    // No Number
    if(!guess) {
        displayMessage('⛔ No Number')
    } else if(guess < 1 || guess > 20) {
        displayMessage('⛔ Choose Number Between 1 and 20')
    }
    // Winning Case
    else if(guess===secretNumber) {
        displayMessage('🎉 You Win')
        bgColor.style.backgroundColor = '#faf2e6'
        number.textContent = secretNumber
        number.style.width = '30rem'
        
        if(score > highScore) {
            highScore = score
            highScoreMessage.textContent = highScore
        }
    }
    // Losing Case
    else if(guess!==secretNumber) {
        if(score > 1) {
            guess > secretNumber ? displayMessage('📈 Too High') : displayMessage('📉 Too Low')
            score--
            scoreMessage.textContent = score
        } else {
            displayMessage('🤯 You Lost')
            scoreMessage.textContent = 0
            bgColor.style.backgroundColor = '#272727'
        }
    }
})

againBTn.addEventListener('click', function() {
    secretNumber = Math.trunc(Math.random()*20 + 1)
    score = 20 
    
    scoreMessage.textContent = score
    messageState.textContent = 'Start guessing...'
    number.textContent = '?'
    bgColor.style.backgroundColor = '#ece6c2'
    number.style.width = '15rem'
    document.querySelector('.guess').value = ''
})