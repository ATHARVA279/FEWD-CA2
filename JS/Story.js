const back = document.getElementById("BackBtn")
const Play = document.getElementById("PlayBtn")

back.onclick=()=>{
    location.href = "../index.html"
}
Play.onclick=()=>{
    location.href = "../HTML/Name1.html"
}

window.addEventListener("DOMContentLoaded",()=>{
    const audio  = document.querySelector("audio")
    audio.volume = 0.8
    audio.loop = true;
})