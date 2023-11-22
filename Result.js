const Home = document.getElementById("BackBtn")
const PlayAgain = document.getElementById("PlayBtn")
const Resultname = document.getElementById("Result-name")
const Score = document.getElementById("numZom")

Home.onclick=()=>{
    location.href = "./index.html"
}

PlayAgain.onclick=()=>{
    location.href = "./Name1.html"
}

a = localStorage.getItem('Name')

Score.innerHTML = a
Resultname.innerHTML = 4