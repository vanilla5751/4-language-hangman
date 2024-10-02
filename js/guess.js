// JavaScript Document

function guess(key) {//start of function guess
    var correct = false
    //if the key is found in the word add it to the list of guessed characters
    for (i = 0; i < result.length; i++) {
        if (key == result[i]) {
            guessed[i] = key
            correct = true
        }
    }

    //set x equal to the phrase with each guessed letter
    x = ""
    for (i = 0; i < word.length; i++) {
        x = x + guessed[i] + "   "
    }
    //check if the player was incorrect
    if (correct == false) {
        wrong += 1
    }
    //add guessed letters to the board
    document.getElementById("phrase").innerHTML = x
    //make the pressed key dissapear
    document.getElementById(key).style.display = "none"
    //change the image used
    document.getElementById("image").src = "images/" + "hangman" + wrong + ".png"
    //reset variable correct
    correct = false

    //check if the player lost
    if (wrong == 6) {
        //reset the board and display a losing message
        document.getElementById("phrase").innerHTML = "you failed to get the word"
        document.getElementById("phrase").innerHTML += "<br>" + "the word was" + word
        reset()
    }
}//end of function guess