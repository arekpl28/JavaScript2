const h1 = document.querySelector("h1");

window.addEventListener("mousemove", (event) => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const fromLeft = event.clientX;
  const fromTop = event.clientY;
  const red = fromLeft / width * 100;
  const green = fromTop / height * 100;
  const blue = ((fromLeft / width * 100) + (fromTop / height * 100)) / 2;
  document.body.style.backgroundColor = `rgb(${red}% ,${green}%,${blue}%)`;
  h1.textContent = `${fromLeft}x : ${fromTop}y`;
})