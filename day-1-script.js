
// var generatedAnswer = document.getElementById('generatedAnswer');
// generatedAnswer.setAttribute("class", "generatedAnswer");
// var answersFromList;

// var generateButton = document. getElementById('generateButton');
generateButton.addEventListener('click', generateAnswer);
var ideasArray = ["Go Skydiving", "Go Mountain Climbing", "Book a flight to Somewhere You've Never Been", "Go Kayaking", "Go on a Hike", "Go Somewhere in Your City You've Never Been", "Go Scubadiving", "Go Snorkeling", "Go on a Climbing Expedition", "Go Visit the Mountains", "Go Swimming in the Nearest Ocean", "Go Parasailing", "Go Paragliding", "Go Surfing", "Go Climb a Tree", "Go Walk in the Woods", "Go on a Helicopter", "Take a Ride on a Small Plane", "Learn How to Fly a Plane", "Try Food You've Never Tried Before", "Do Something that Makes You Uncomfortable"]


function generateAnswer() {
	var generatedAnswer = document.getElementById('generatedAnswer');
	var answer = ideasArray[Math.floor(Math.random() * ideasArray.length)];
	console.log(answer);
	// document.getElementById("generatedAnswer").innerHTML = answer;
	generatedAnswer.innerText = answer;

	// document.getElementById("generatedAnswer").textContent = answer;

	// var generateButton = document.getElementById('generateButton');
	// var generatedAnswer = document.getElementById('generatedAnswer');
	// var generatedAnswer = document.createElement('p');

	// var answerFromList = ideasArray[Math.floor(Math.random()*ideasArray.length)];
	// generatedAnswer.innerText = answersFromList;

	 // generateButton.style.display = "none";

	// var r = Math.floor(Math.random()*19);
	// generatedAnswer = ideasArray[r];
	// document.body.innerHTML += emoji[r];

}

// generateAnswer();