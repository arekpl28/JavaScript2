const square = document.querySelector("div");

let divY = 150;
let divX = 150;
square.style.top = `${divY}px`;
square.style.left = `${divX}px`;

let drawActive = false;

let insertDivY = 0;
let insertDivX = 0;

square.addEventListener("mousedown", (event) => {
  square.style.backgroundColor = "#ddd"
  drawActive = !drawActive;
  insertDivY = event.offsetY;
  insertDivX = event.offsetX;
})

window.addEventListener("mousemove", (event) => {
  if (drawActive) {
    divY = event.clientY
    divX = event.clientX
    square.style.top = `${divY-(insertDivY)}px`;
    square.style.left = `${divX-(insertDivX)}px`;
  }
})

square.addEventListener("mouseup", () => {
  drawActive = !drawActive;
  square.style.backgroundColor = "#000"
})