const back = document.getElementById("BackBtn")
const Play = document.getElementById("PlayBtn")

back.onclick=()=>{
    location.href = "../index.html"
}
Play.onclick=()=>{
    location.href = "../HTML/Story.html"
}

window.addEventListener("DOMContentLoaded",()=>{
    const audio  = document.querySelector("audio")
    audio.volume = 0.2
    audio.loop = true;
})