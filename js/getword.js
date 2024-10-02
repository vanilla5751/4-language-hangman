// JavaScript Document

function fetchword() {
	let z = Math.floor(Math.random() * (4 - 0 + 1) + 0)
	if (z == 0) {
		fetch("https://random-word-api.herokuapp.com/word")
			.then(res => res.json())
			.then(data => {
				console.log(data[0])
				word = data[0]
				display()
				document.getElementById("lang").innerHTML = "Language:english"
			})
	} else if (z == 1) {
		fetch("https://random-word-api.herokuapp.com/word?lang=fr")
			.then(res => res.json())
			.then(data => {
				console.log(data[0])
				word = data[0]
				display()
				document.getElementById("lang").innerHTML = "Language:french"
			})
	} else if (z == 2) {
		fetch("https://random-word-api.herokuapp.com/word?lang=de")
			.then(res => res.json())
			.then(data => {
				console.log(data[0])
				word = data[0]
				display()
				document.getElementById("lang").innerHTML = "Language:german"
			})
	} else if (z==3) {
		fetch("https://random-word-api.herokuapp.com/word?lang=es")
			.then(res => res.json())
			.then(data => {
				console.log(data[0])
				word = data[0]
				display()
				document.getElementById("lang").innerHTML = "Language:spanish"
			})
	}else if (z==4) {
		fetch("https://random-word-api.herokuapp.com/word?lang=it")
			.then(res => res.json())
			.then(data => {
				console.log(data[0])
				word = data[0]
				display()
				document.getElementById("lang").innerHTML = "Language:italian"
			})
	}
}
//end of fetchword

