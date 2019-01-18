const square = document.querySelector('div');

let size = 10;

square.style.height = `${size}px`
square.style.width = `${size}px`

let grow = true;

const changingSizeSquare = () => {
  square.style.height = `${size}px`
  square.style.width = `${size}px`
  if (grow) {
    size += 5;
  } else if (!grow) {
    size -= 5;
  }
  if (size > window.innerHeight / 2) {
    grow = !grow;
  } else if (size < 0) {
    grow = !grow;
  }
}

window.addEventListener("scroll", changingSizeSquare)