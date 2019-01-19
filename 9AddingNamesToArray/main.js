const btn = document.querySelector('button');
const input = document.querySelector('input');
const div = document.querySelector("div");

const names = [];

const addName = (event) => {
  //Removes page refresh
  event.preventDefault();

  const newName = input.value;
  if (input.value.length) {
    for (const name of names) {
      if (name.toLowerCase() === newName.toLowerCase()) {
        alert("This name is already here!");
        return;
      }
    }
  } else if (!input.value) {
    alert("The input has not been filled out")
    return
  }
  names.push(newName);
  div.textContent += `${newName}, `;
  input.value = "";
}

btn.addEventListener("click", addName)