const car = document.getElementById("car");
const zom1 = document.getElementById("zom1")
const zom2 = document.getElementById("zom2")


//Moving the car
let l = 0;
let velocityX = 0;


function update() {
  l += velocityX * 5; 
  car.style.left = `${l}px`;
}

var intervalId = setInterval(update, 16);
window.addEventListener("keydown", function (event) {
  if (event.key === "a" || event.key === "A") {
    velocityX = -1;
  }

  if (event.key === "d" || event.key === "D") {
    velocityX = 1;
  }
});

window.addEventListener("keyup", function (event) {
  if (event.key === "a" || event.key === "A" || event.key === "d" || event.key === "D") {
    velocityX = 0;
  }
});


//Adding Properties to the box
document.getElementById("box").style.animation = "box1 3s linear infinite"

setInterval(()=>{
    num = (Math.floor(Math.random()*3)*134)
    document.getElementById("box").style.left = `${num}px`
 },3000)

//adding lives
const lives = document.getElementById("lives")
let life = 3

//Adding Collision
let collisionDetected = false;

setInterval(() => {
    var b1Left = Math.abs(document.getElementById("box").getBoundingClientRect().left);
    var b1Right = Math.abs(document.getElementById("box").getBoundingClientRect().right);
    var b1Top = Math.abs(document.getElementById("box").getBoundingClientRect().top);
    var b1Bottom = Math.abs(document.getElementById("box").getBoundingClientRect().bottom);

    var bLeft = Math.abs(document.getElementById("car").getBoundingClientRect().left);
    var bRight = Math.abs(document.getElementById("car").getBoundingClientRect().right);
    var bTop = Math.abs(document.getElementById("car").getBoundingClientRect().top);
    var bBottom = Math.abs(document.getElementById("car").getBoundingClientRect().bottom);

    if (bLeft < -5 || bRight > 402) {
        // location.reload()
    }

    if (
        b1Left < bRight &&
        b1Right > bLeft &&
        b1Top < bBottom &&
        b1Bottom > bTop
    ) {
        if (!collisionDetected) {
            life--;
            lives.innerHTML = life;
            collisionDetected = true;

          //adding collision effect
            document.getElementById("car").classList.add("animation")
            setTimeout(() => {
              document.getElementById("car").classList.remove("animation")
            }, "1000");

          //adding collision sound
            const audio =  new Audio("./Assets/car collision.mp3")
            audio.currentTime = 0; 
            audio.play()
            audio.volume = 0.04

            if(life == 0){
              location.href = "./Result.html"
            }
        }
    } else {
        collisionDetected = false;
    }
}, 10);


//destroying zombies
function zomdestroy1(){
  let zom1 = document.getElementById("zom1")
  zom1.onclick=()=>{
    zom1.style.display = "none"
  }
  makezom1()
}
zomdestroy1()

function zomdestroy2(){
  let zom2 = document.getElementById("zom2")
  zom2.onclick=()=>{
    zom2.style.display = "none"
  }
  makezom2()
}
zomdestroy2()

//score
const kills = document.getElementById("kills")
let score= 0;


//making zombies

function makezom1(){
  let num = Math.ceil(Math.random()*6)
  let duration = Math.floor(Math.random()*(6-4+1)+4)
  let side1 = document.getElementById("side1")
  side1.innerHTML = `<img src="./Assets/zom${num}.png" id="zom1" style="animation: z1 ${duration}s linear infinite;">`
  let zombie1 = document.getElementById("zom1")
  zombie1.style.animationDuration = `${duration}`
  
  zombie1.onclick=()=>{
    zomdestroy1()
    score++
    kills.innerHTML = score
    const audio =  new Audio("./Assets/car collision.mp3")
    audio.currentTime = 0; 
    audio.play()
  }
}

function makezom2(){
  let num = Math.ceil(Math.random()*6)
  let side2 = document.getElementById("side2")
  let duration = Math.floor(Math.random()*(6-4+1)+4)
  side2.innerHTML = `<img src="./Assets/zom${num}.png" id="zom2" style="animation: z2 ${duration}s linear infinite;">`
  let zombie2 = document.getElementById("zom2")
  zombie2.onclick=()=>{
    zomdestroy2()
    score++
    kills.innerHTML = score

  }
}

//Creating a timer
const timer = document.getElementById("timer")
var timerId;
var time = 30;
timer.innerHTML = time;
timerId = setInterval(()=>{
    time--
    if(time==0){
        // window.location.href = "./Result.html"
    }
    timer.innerHTML = time
},1000)

//adding bg sound
window.addEventListener("DOMContentLoaded",()=>{
  const audio  = document.querySelector("audio")
  audio.volume = 0.2
  audio.loop = true;
})

//Levels
function levels(){
  
}

