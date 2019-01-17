const btnAddSquare = document.querySelector("button");

let counter = 0;

const addElement = () => {
  const div = document.createElement("div");
  div.textContent = counter;
  document.body.appendChild(div);
  counter++
  if (!(counter % 5)) {
    div.classList.add("circle")
  }
  console.log('dziala');

}


btnAddSquare.addEventListener("click", addElement)