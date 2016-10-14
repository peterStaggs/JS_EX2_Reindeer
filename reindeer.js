var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];

for (i = 0; i < 8; i++) {
	var coloredReindeer= colors[i] + " " + reindeer[i]; 
	console.log(coloredReindeer); 
	var hohohoElement = document.getElementById("coloredReindeer");
	hohohoElement.innerHTML += "<div id='coloredReindeer'>" + coloredReindeer + "</div>";
}
