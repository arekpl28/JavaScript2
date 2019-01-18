const btn = document.querySelector('button')
const ul = document.querySelector("ul")

let size = 10;
let counter = 0;

btn.addEventListener("click", () => {
  for (let i = 0; i < 10; i++) {
    counter++
    const li = document.createElement("li");
    li.textContent = `Element ${counter}`;
    li.style.fontSize = `${size}px`
    ul.appendChild(li);
    size++
  }
});