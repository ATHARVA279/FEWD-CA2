const Home = document.getElementById("BackBtn")
const PlayAgain = document.getElementById("PlayBtn")
const Resultname = document.getElementById("Result-name")
const Score = document.getElementById("numZom")

Home.onclick=()=>{
    location.href = "./index.html"
    localStorage.clear();
}

PlayAgain.onclick=()=>{
    location.href = "./Name1.html"
    localStorage.clear();
}

const scr = localStorage.getItem("score")
const b = localStorage.getItem("Name")

Resultname.innerHTML = b
Score.innerHTML = scr