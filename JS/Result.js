const Home = document.getElementById("BackBtn")
const PlayAgain = document.getElementById("PlayBtn")
const Resultname = document.getElementById("Result-name")
const Score = document.getElementById("numZom")

Home.onclick=()=>{
    location.href = "../index.html"
    localStorage.clear();
}

PlayAgain.onclick=()=>{
    location.href = "../HTML/Name1.html"
    localStorage.clear();
}

const scr = localStorage.getItem("score")
const b = localStorage.getItem("Name")

Resultname.innerHTML = b
Score.innerHTML = scr

var first= [
    "Congratulations,",
    "Well done,",
    "",
    "Victory is yours,",
    "Hats off,"
]

var second = [
    "! You annihilated ",
    "! You killed :",
    "you're a zombie-slaying hero! You have killed : ",
    "! You've exterminated "

]



const view= document.getElementById("message")

var random = first[Math.floor(Math.random()*first.length)]
var random1 = second[Math.floor(Math.random()*second.length)]

view.innerHTML = random + " " + b + " " + random1 + scr + " zombies"


