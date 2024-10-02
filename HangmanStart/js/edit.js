// JavaScript Document

function generatebuttons() {
    const keys = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "à", "â", "æ", "ç", "é", "è", "ê", "ë", "œ", "î", "ï", "ô", "ù", "û", "ü", "ÿ", "ß", "ä", "ö","á","í","ó","ú"]

    const letters = document.getElementById('letters')
    keys.forEach(letter => {
        const button = document.createElement('button')


        button.onclick = () => guess(letter)
        button.innerText = letter
        button.id = letter
        letters.appendChild(button)
        if (letter == "j" || letter == "t" || letter == "ç" || letter == "û") {
            letters.appendChild(document.createElement('br'))
        }
    })
}

function display() {
    var x = ""
    for (i = 0; i < word.length; i++) {
        result[i] = word.charAt(i)
        guessed[i] = "_"
        x = x + "_" + "  "
    }
    console.log(result)
    document.getElementById("phrase").innerHTML = x

}

function reset() {
    const keys = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "à", "â", "æ", "ç", "é", "è", "ê", "ë", "œ", "î", "ï", "ô", "ù", "û", "ü", "ÿ", "ß", "ä", "ö","á","í","ó","ú"]

    for (i = 0; i < keys.length; i++) {
        document.getElementById(keys[i]).style.display = "inline"
    }


    fetchword()
    wrong = 0
    document.getElementById("image").src = "images/hangman0.png"
}