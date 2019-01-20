const gameSummary = {
  numbers: 0,
  won: 0,
  lost: 0,
  draws: 0
}
const game = {
  playerHand: "",
  aiHand: "",
}

const hands = [...document.querySelectorAll(".select img")]

const btn = document.querySelector("button.start");
const yourChoice = document.querySelector('[data-summary="your-choice"]');
const aiChoice = document.querySelector('[data-summary="ai-choice"]');
const whoWin = document.querySelector('[data-summary="who-win"]');
const numbers = document.querySelector('.numbers span')
const wins = document.querySelector('.wins span')
const losses = document.querySelector('.losses span')
const draws = document.querySelector('.draws span')

function computerChoice() {
  const aiHand = hands[Math.floor(Math.random() * 3)].dataset.option
  return aiHand
}

handSelection = (event) => {
  game.playerHand = event.target.dataset.option;
  hands.forEach(hand => hand.style.boxShadow = "");
  event.target.style.boxShadow = "0 0 5px 5px yellow";
  yourChoice.textContent = "";
  aiChoice.textContent = "";
  whoWin.textContent = "";
}

stratGame = () => {
  if (!game.playerHand) return alert("wybierz dłoń")
  game.aiHand = computerChoice()
  yourChoice.textContent = game.playerHand;
  aiChoice.textContent = game.aiHand;
  if (game.playerHand === "peper" && game.aiHand === "stone" || game.playerHand === "stone" && game.aiHand === "scissors" || game.playerHand === "scissors" && game.aiHand === "peper") {
    whoWin.textContent = "You!!";
    whoWin.style.color = "green"
    gameSummary.won++;
  } else if (game.playerHand === game.aiHand) {
    whoWin.textContent = "Draw"
    whoWin.style.color = "blue"
    gameSummary.draws++
  } else {
    whoWin.textContent = "Computer!"
    whoWin.style.color = "red"
    gameSummary.lost++
  }
  wins.textContent = gameSummary.won
  draws.textContent = gameSummary.draws
  losses.textContent = gameSummary.lost
  gameSummary.numbers++
  numbers.textContent = gameSummary.numbers;
}

btn.addEventListener("click", stratGame)
hands.forEach(hand => hand.addEventListener("click", handSelection))