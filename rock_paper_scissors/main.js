const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0
}

 const game = {
     playerHand: '',
     aiHand: ''
 }

 const hands = [...document.querySelectorAll('.select img')]

 function handSelection(){   //deklaracja funkcji z użyciem this
     game.playerHand = this.dataset.option //pobranie data-option z HTML
     hands.forEach(hand => hand.style.boxShadow = '') // czyści ramkę za każdym razem po kliknięciu kolejnej
     this.style.boxShadow = '0 0 0 4px yellow' //przesyniecie x, y, rozmycie, grubosc, kolor - nadaje ramkę
 }

//  const handSelection = (e) => {
//      //this - nie tworzy, jest obiektem globalnym
//      console.log(e.target);
//  }

function aiChoice() {
    return hands[Math.floor(Math.random() * 3)].dataset.option
}

function checkResult(player,ai) {
    if(player === ai) {
        return 'draw'
    }
    else if((player === 'papier' && ai === 'kamień') || (player === 'kamień' && ai === 'nożyczki') || (player === 'nożyczki' && ai === 'papier')) {
        return 'win'
    }
    else return 'lose'

}

function publishResult(player, ai, result) {
    document.querySelector('[data-summary="your-choice"]').textContent = player
    document.querySelector('[data-summary="ai-choice"]').textContent = ai

    document.querySelector('p.numbers span').textContent = ++gameSummary.numbers

    if(result === 'win') {
        document.querySelector('p.wins span').textContent = ++gameSummary.wins
        document.querySelector('[data-summary="who-win"]').textContent = 'Ty wygrałeś!'
        document.querySelector('[data-summary="who-win"]').style.color = 'green'
    }
    else if(result === 'lose') {
        document.querySelector('p.losses span').textContent = ++gameSummary.losses
        document.querySelector('[data-summary="who-win"]').textContent = 'Komputer wygrał :('
        document.querySelector('[data-summary="who-win"]').style.color = 'red'
    }
    else{
        document.querySelector('p.draws span').textContent = ++gameSummary.draws
        document.querySelector('[data-summary="who-win"]').textContent = 'Remis :\\'
        document.querySelector('[data-summary="who-win"]').style.color = 'yellow'
    }
}

function endGame() {
    document.querySelector(`[data-option="${game.playerHand}"]`).style.boxShadow = ''
    game.playerHand = ''
}

//funkcja sterująca
function startGame() {
    if(!game.playerHand) return alert('wybierz dlon')
    game.aiHand = aiChoice() 
    
    const gameResult = checkResult(game.playerHand, game.aiHand)
    console.log(gameResult);

    publishResult(game.playerHand, game.aiHand, gameResult)

    endGame()
}

 hands.forEach(hand => hand.addEventListener('click', handSelection))

 document.querySelector('.start').addEventListener('click', startGame)