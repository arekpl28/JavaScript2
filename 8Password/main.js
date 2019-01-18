const input = document.getElementById("pass");
const div = document.querySelector('div');

const message = "Congratulations!!!"

const pass = "user"
input.addEventListener("input", (e) => {
  if (e.target.value.toLowerCase() === pass) {
    div.textContent = message;
    e.target.value = ""
  } else {
    div.textContent = ""
  }
})

input.addEventListener("focus", (e) => {
  e.target.classList.add("active");
})

input.addEventListener("blur", (e) => {
  e.target.classList.remove("active");
})