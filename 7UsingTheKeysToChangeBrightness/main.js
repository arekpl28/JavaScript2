let red = 150;
let green = 150;
let blue = 150;
document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

window.addEventListener("keydown", () => {
  switch (event.keyCode) {
    case 38:
      document.body.style.backgroundColor = `rgb(${red<255?red+=5:red}, ${green<255?green+=5:green}, ${blue<255?blue+=5:blue})`
      break;
    case 40:
      document.body.style.backgroundColor = `rgb(${red>0?red-=5:red}, ${green>0?green-=5:green}, ${blue>0?blue-=5:blue})`
      break;
    default:
      break;
  }
})