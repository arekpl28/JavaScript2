const slideList = [{
    img: "images/img1.jpg",
    text: "First text"
  },
  {
    img: "images/img2.jpg",
    text: "Second text"
  },
  {
    img: "images/img3.jpg",
    text: "Third text"
  }
]

const image = document.querySelector("img");
const h1 = document.querySelector("h1")
const dots = [...document.querySelectorAll(".dots span")]

const time = 2000;
let active = 0;

const changeDot = () => {
  const activeDot = dots.findIndex(dot => dot.classList.contains("active"))
  dots[activeDot].classList.remove("active")
  dots[active].classList.add("active")
  console.log(activeDot);
}

const changeSlide = () => {
  active++;
  if (active === slideList.length) {
    active = 0;
  }
  image.src = slideList[active].img;
  h1.textContent = slideList[active].text;
  changeDot()
}

let indexInterval = setInterval(changeSlide, time)

const keyChangeSlide = (event) => {
  const key = event.keyCode;
  clearInterval(indexInterval)
  if (event.keyCode === 37 || event.keyCode === 39) {
    event.keyCode == 37 ? active-- : active++;
    if (active === slideList.length) {
      active = 0;
    } else if (active < 0) {
      active = slideList.length - 1;
    }
  }
  image.src = slideList[active].img;
  h1.textContent = slideList[active].text;
  indexInterval = setInterval(changeSlide, time)
  changeDot();
}

window.addEventListener("keydown", keyChangeSlide)