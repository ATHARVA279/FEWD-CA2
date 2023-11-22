const InstBtn = document.getElementById("InstBtn")

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

PlayBtn.onclick = () => {
    const Name = document.getElementById("name").value;
    const Nickname = document.getElementById("nickname").value;
    const selectedDifficulty = document.getElementById("difficulty").value;

    if (Name === "" || Nickname === "") {
        alert("Enter Name and Nickname");
    } else {
        // Storing the names in local storage
        localStorage.setItem('Name', Name);
        localStorage.setItem('Nickname', Nickname);

        if (selectedDifficulty) {
            if (selectedDifficulty === "easy") {
                location.href = "./Game1.html";
            } else if (selectedDifficulty === "medium") {
                location.href = "./Game2.html";
            } else if (selectedDifficulty === "difficult") {
                location.href = "./Game3.html";
            }
        }
    }
};


BackBtn.onclick=()=>{
    window.location.href = "./Story.html"
}