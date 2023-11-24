const back = document.getElementById("BackBtn")
const play = document.getElementById("PlayBtn")

back.onclick=()=>{
    location.href = "./index.html"
}

play.onclick=()=>{
    location.href = "./Name1.html"
}

//getting the sound
window.addEventListener("DOMContentLoaded",()=>{
    const audio  = document.querySelector("audio")
    audio.volume = 0.8
    audio.loop = true
})
