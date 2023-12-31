// Get elements
const InstBtn = document.getElementById("InstBtn")
const PlayBtn = document.getElementById("PlayBtn") 
const BackBtn = document.getElementById("BackBtn")

// Adding sound

const audio = document.querySelector("audio")
audio.volume = 0.2
audio.loop = true


// Adding functions to buttons
InstBtn.onclick = () => {
    // Redirect to instruction page
    window.location.href = "./Instruction.html"
}

PlayBtn.onclick = () => {
    // Get input values
    const Name = document.getElementById("name").value
    const Nickname = document.getElementById("nickname").value
    const selectedDifficulty = document.getElementById("difficulty").value

    // Check for empty fields
    if (Name === "" || Nickname === "") {
        alert("Enter Name and Nickname")
    } else {
        // Store names in local storage
        localStorage.setItem('Name', Name)
        localStorage.setItem('Nickname', Nickname)

        // Redirect based on selected difficulty
        if (selectedDifficulty) {
            if (selectedDifficulty === "easy") {
                location.href = "./Game1.html"
            } else if (selectedDifficulty === "medium") {
                location.href = "./Game2.html"
            } else if (selectedDifficulty === "difficult") {
                location.href = "./Game3.html"
            }
        }
    }
}

BackBtn.onclick = () => {
    // Redirect to the story page
    window.location.href = "./Story.html"
}
