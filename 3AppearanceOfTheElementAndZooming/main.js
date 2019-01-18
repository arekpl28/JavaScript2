const btn = document.querySelector('button')

const liElements = document.querySelectorAll("li")

let size = 30;

btn.addEventListener("click", () => {
  size++
  liElements.forEach(liElement => {
    liElement.style.display = "block"
    liElement.style.fontSize = `${size}px`
  })
});