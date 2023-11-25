//declaring the variables
const car = document.getElementById("car")
const leftButton = document.getElementById("left-mv")
const rightButton = document.getElementById("right-mv")

//movement of the car
let l = 0
let velocityX = 0
let isMoving = false

const carContainer = document.getElementById("road")
const containerWidth = carContainer.clientWidth

function update() {
  l += velocityX * 5
  l = Math.max(0, Math.min(l, containerWidth-car.clientWidth))
  car.style.left = `${l}px`

  if (isMoving) {
    requestAnimationFrame(update)
  }
}

function startMoving(direction) {
  if (direction === "left") {
    velocityX = -1
  } else if (direction === "right") {
    velocityX = 1
  }

  if (!isMoving) {
    isMoving = true
    update()
  }
}

function stopMoving() {
  velocityX = 0
  isMoving = false
}

leftButton.addEventListener("touchstart", function () {
  startMoving("left")
})

rightButton.addEventListener("touchstart", function () {
  startMoving("right")
})

document.addEventListener("mouseup", stopMoving)

window.addEventListener("keydown", function (event) {
  if (event.key === "a" || event.key === "A") {
    startMoving("left")
  } else if (event.key === "d" || event.key === "D") {
    startMoving("right")
  }
})

window.addEventListener("keyup", function (event) {
  if (event.key === "a" || event.key === "A" || event.key === "d" || event.key === "D") {
    stopMoving()
  }
})

leftButton.addEventListener("mouseleave", stopMoving)
rightButton.addEventListener("mouseleave", stopMoving)

leftButton.addEventListener("touchend", stopMoving)
rightButton.addEventListener("touchend", stopMoving)

// Adding Properties to the box
document.getElementById("box").style.animation = "box1 3s linear infinite"

setInterval(() => {
  num = (Math.floor(Math.random() * 3) * 33)
  document.getElementById("box").style.left = `${num}%`
}, 3000)

// Adding lives
const lives = document.getElementById("lives")
let life = 3

// Adding Collision
let collisionDetected = false

setInterval(() => {
  var b1Left = Math.abs(document.getElementById("box").getBoundingClientRect().left)
  var b1Right = Math.abs(document.getElementById("box").getBoundingClientRect().right)
  var b1Top = Math.abs(document.getElementById("box").getBoundingClientRect().top)
  var b1Bottom = Math.abs(document.getElementById("box").getBoundingClientRect().bottom)

  var bLeft = Math.abs(document.getElementById("car").getBoundingClientRect().left)
  var bRight = Math.abs(document.getElementById("car").getBoundingClientRect().right)
  var bTop = Math.abs(document.getElementById("car").getBoundingClientRect().top)
  var bBottom = Math.abs(document.getElementById("car").getBoundingClientRect().bottom)

  if (
    b1Left < bRight &&
    b1Right > bLeft &&
    b1Top < bBottom &&
    b1Bottom > bTop
  ) {
    if (!collisionDetected) {
      life--
      lives.innerHTML = life
      collisionDetected = true

      // Adding collision effect
      document.getElementById("car").classList.add("animation")
      setTimeout(() => {
        document.getElementById("car").classList.remove("animation")
      }, 1000)

      // Adding collision sound
      const audio = new Audio("./Assets/car collision.mp3")
      audio.currentTime = 0
      audio.play()
      audio.volume = 0.6

      if (life == 0) {
        location.href = "./Result1.html"
        localStorage.setItem("score", score)
      }
    }
  } else {
    collisionDetected = false
  }
}, 10)

// Destroying zombies
function zomdestroy1() {
  let zom1 = document.getElementById("zom1")
  zom1.onclick = () => {
    zom1.style.display = "none"
  }
  makezom1()
}
zomdestroy1()

function zomdestroy2() {
  let zom2 = document.getElementById("zom2")
  zom2.onclick = () => {
    zom2.style.display = "none"
  }
  makezom2()
}
zomdestroy2()

// Score
const kills = document.getElementById("kills")
let score = 0

// Making zombies
function makezom1() {
  let num = Math.ceil(Math.random() * 6)
  let duration = Math.floor(Math.random() * (6 - 4 + 1) + 4)
  let side1 = document.getElementById("side1")
  side1.innerHTML = `<img src="./Assets/zom${num}.png" id="zom1" style="animation: z1 ${duration}s linear infinite;">`
  let zombie1 = document.getElementById("zom1")
  zombie1.style.animationDuration = `${duration}`

  zombie1.onclick = () => {
    zomdestroy1()
    score++
    kills.innerHTML = score
  }
}

function makezom2() {
  let num = Math.ceil(Math.random() * 6)
  let side2 = document.getElementById("side2")
  let duration = Math.floor(Math.random() * (6 - 4 + 1) + 4)
  side2.innerHTML = `<img src="./Assets/zom${num}.png" id="zom2" style="animation: z2 ${duration}s linear infinite;">`
  let zombie2 = document.getElementById("zom2")
  zombie2.onclick = () => {
    zomdestroy2()
    score++
    kills.innerHTML = score
    localStorage.setItem("score", score)
  }
}

// Creating a timer
const timer = document.getElementById("timer")
var time = 30
timer.innerHTML = time
setInterval(() => {
  time--
  if (time == 0) {
    window.location.href = "./Result.html"
    localStorage.setItem("score", score)
  }
  timer.innerHTML = time
}, 1000)

// Adding bg sound
window.addEventListener("DOMContentLoaded", () => {
  const audio = document.querySelector("audio")
  audio.volume = 0.5
  audio.loop = true
})

// Adding SHOT-GUN SOUND
window.onclick = () => {
  const audio = new Audio("./Assets/Gun-shot.mp3")
  audio.currentTime = 0
  audio.play()
}
