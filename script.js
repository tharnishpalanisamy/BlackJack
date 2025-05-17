let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let infoEl = document.getElementById("info-el")
let messageEl = document.getElementById("message-el")
let cards = []
let sum = 0
let gameOn = false
let hasBlackJack = false
let player = {
    name:"Tharnish" , 
    money : 1000
}

infoEl.textContent = player.name +  ": $" + player.money 

function startGame(){
    gameOn = true
    let firstCard = randomCard()
    let secondCard = randomCard()
    sum = firstCard + secondCard
    cards = [firstCard , secondCard]
    renderGame()
}



function randomCard(){
    let randomCard = Math.floor(Math.random() * 13) + 1
    if ( randomCard == 1){
        return 11
    }
    else if(randomCard > 10) {
        return 10
    }
    else{
        return randomCard
    }
}


function newCard(){
    if (gameOn === true && hasBlackJack === false){
    let newCard = randomCard()
    sum += newCard
    cards.push(newCard)
    renderGame()
}}


function renderGame(){
    sumEl.textContent ="sum :" + sum
    cardsEl.textContent = "Cards: "
    for(i = 0 ; i< cards.length ; i++){
        cardsEl.textContent += cards[i] + " "
    }
    
    if(sum <21){
    hasBlackJack = false
    gameOn = true 
    messageEl.textContent = "do you want to take another Card?"
}
else if (sum===21){
    gameOn = false
    hasBlackJack = true 
    messageEl.textContent = "You've got blackjack you win"
}
else{
    gameOn = false
    messageEl.textContent = "You're out of the game"
}

}
