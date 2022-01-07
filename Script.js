let deck = [];
    let player1 = [];
    let player2 = [];

    let box1 = document.querySelector(".box1");
    let box2 = document.querySelector(".box2");

function createDeck() {

    const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "0", "J", "Q", "K", "A"];
    const suits = ["H", "C", "D", "S"]

    for (let i=0; i<4; i++) {
        for (let x=0; x<13; x++) {
    
            deck.push({rank: ranks[x], 
            suits: suits[i], 
        value: x+1, 
        img: `https://deckofcardsapi.com/static/img/${ranks[x]}${suits[i]}.png`
    });
        }
    }
    return deck;
}
function shuffleDeck(deck) {
    for(let c=0; c<deck.length; c++) {
        const tempCard = deck[c];
        const randomIndex = Math.floor(Math.random() * 52);
        //deck[c] = deck[randomIndex];
        let x = deck[c];
        deck[c] = deck[randomIndex];
        deck[randomIndex] = x
        deck[randomIndex] = tempCard;
    }
}

const newDeck = createDeck();

shuffleDeck(newDeck);


function splitDecks(){
    const half = Math.ceil(newDeck.length / 2);
    player1 = (newDeck.slice(0, half))
    player2 = (newDeck.slice(-half))
}
    splitDecks();
    console.log(player1);
    console.log(player2);

//worked on this together

function playTurn() {
    scoresCheck();
    box1.innerHTML = `<img src="${player1[0].img}" class="cardsImg">`
    box2.innerHTML = `<img src="${player2[0].img}" class="cardsImg">`

    if(player1[0].value>player2[0].value) {
        document.querySelector('.points1').innerHTML = parseInt(document.querySelector('.points1').innerHTML)+1;
        
    } else {
        document.querySelector('.points2').innerHTML = parseInt(document.querySelector('.points2').innerHTML)+1;
    }
    if(player1[0].value)

    
    player1.shift();
    player2.shift();


}
const shuffleButton = document.querySelector("#shuffle-button")
shuffleButton.addEventListener("click", playTurn);


function startOver() {
   location.reload();
}
const scoreChange = document.querySelector("#whoWin");
const resetButton = document.querySelector("#reset-button")
resetButton.addEventListener("click", startOver)

function scoresCheck(whoWin) {

    if(player1.length<1 || player2.length<1) {
        scoreChange.innerText = "Game Over";
    }
    else if (player1[0].value>player2[0].value) {
      scoreChange.innerText = "Player1 Win!";
    } else if (player1[0].value<player2[0].value) {
        scoreChange.innerText = "Player2 Win!";
    } else {
        scoreChange.innerText = "It's Draw!";
    }
}
