const InstBtn = document.getElementById("InstBtn")
const PlayBtn = document.getElementById("PlayBtn")
const GitBtn = document.getElementById("GitBtn")

InstBtn.onclick=()=>{
    window.location.href = "./Instruction.html"
}

PlayBtn.onclick=()=>{
    window.location.href = "./Story.html"
}

GitBtn.onclick=()=>{
    window.location.href = "https://www.linkedin.com/in/atharva-kharade-604944287/"
}

//adding background sound
window.onload=()=>{
    const audio  = document.querySelector("audio")
    audio.volume = 0.5
    audio.loop = true;
}

