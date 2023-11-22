const InstBtn = document.getElementById("InstBtn")
const PlayBtn = document.getElementById("PlayBtn")
const BackBtn = document.getElementById("BackBtn")
let gameDifficulty = document.querySelector("#difficulty")

//Adding sound
window.addEventListener("DOMContentLoaded",()=>{
    const audio = document.querySelector("audio")
    audio.volume = 0.2
    audio.loop = true
})

//Adding functions to buttons
InstBtn.onclick=()=>{
    window.location.href = "./Instruction.html"
}

PlayBtn.onclick =()=>{
    const Name = document.getElementById("name").value
    const Nickname = document.getElementById("nickname").value

    if (Name==="" || Nickname==="") {
        alert("Enter Name and Nickname")
    } else {
        //Storing the names in local storage
        localStorage.setItem('Name', Name)
        localStorage.setItem('Nickname', Nickname)

        window.location.href = "./Game.html"
    }
}

BackBtn.onclick=()=>{
    window.location.href = "./Story.html"
}

//storing difficulty in local storage
localStorage.setItem("difficulty",gameDifficulty.value)
