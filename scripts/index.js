//Index.js
//Create variables
//When adding a new scene, update generateSelf for unlocking the scene
var slideShowCounter = 0;
var slideShow = [];

localStorage.setItem("indexVisited","indexVisited");

var games =[
	{index: "LU", title: "Loli Universe", sponsor: ""},
];

var news =[
	{date: "7/4/22", game: "NaN", headline: "Website", link: "robloxianproductions.github.io", text: "Official Launch"},
];

var gamesAlreadyListed = "";

//Start & System Config Stuff
function startup() {
	sceneTransition("start");
}
function startupDesktop() {
	document.getElementById('output').innerHTML += `
		<p class="choiceText" onclick="window.location.href='no'">Click here for the mobile version!</p>
	`;
	writeScene("start");
}

function openLink(n){
	var win = window.open(n, '_blank');
	win.focus();
}

function generateNews() {
	for (x = 0; x < news.length; x++) {
		document.getElementById('newsFeed').innerHTML += `
			`+news[x].date+` - <a href="`+news[x].link+`">`+news[x].headline+`</a>
			<br>
			`+news[x].text+`
			<hr>
		`;
		for (y = 0; y < games.length; y++) {
			console.log("Attempting to write news entry "+news[x].game+news[x].text);
			if (games[y].index == news[x].game && gamesAlreadyListed.includes(news[x].game) == false) {
				if (gamesAlreadyListed == "") {
					document.getElementById('wrapperBG').style.backgroundImage = "url(images/"+news[x].game+".png)";
				}
				gamesAlreadyListed += games[y].index;
				document.getElementById('noodleGames').innerHTML += `
					<div class="gameContainer" onclick="sceneTransition('`+games[y].index+`')">
						<img class="bigPicture" src="images/`+games[y].index+`.png">
						<div id = "game`+games[y].index+`" class="gameTitle">
							<p class="gameTitleText">`+games[y].title+`</p>
						</div>
					</div>
				`;
				if (games[y].sponsor != "") {
					document.getElementById('game'+games[y].index).innerHTML += `
						<img class="sponsor" src="images/greenCrown.png">
					`;
				}
			}
		}
	}
}

function generateGame() {
	document.getElementById('output').innerHTML += `
	`;
}

//Scene creation

function writeBig (img) {
	document.getElementById('output').innerHTML += `
		<img class="bigPicture" src="` + img + `">
		<br>
	`;
}

function writeSlideshow(img){
	document.getElementById('output').innerHTML += `
	<div style="display: block;margin: auto;width:205.4px">
		<img src="images/leftArrow.png" onclick="slideshowLeft()">
		<img src="images/rightArrow.png" onclick="slideshowRight()">
	</div>
	<img id="slideshowImg" class="bigPicture" src="` + img + `">
	<br>
	`;
}

function slideshowLeft() {
	slideShowCounter -= 1;
	if (slideShowCounter < 0) {
		slideShowCounter = slideShow.length-1;
	}
	document.getElementById("slideshowImg").src = slideShow[slideShowCounter]; 
}

function slideshowRight() {
	slideShowCounter += 1;
	if (slideShowCounter > slideShow.length-1) {
		slideShowCounter = 0;
	}
	document.getElementById("slideshowImg").src = slideShow[slideShowCounter]; 
}

//Still need to do slideshow functionality and css

function writeTransition (name, scene) {
	document.getElementById('output').innerHTML += `
		<p class="choiceText" onclick="sceneTransition('` + name + `')">
			` + scene + `
		</p>
	`;
}

function writeSpecial (text) {
	document.getElementById('output').innerHTML += `
		<p class = "specialText">` + text + `</p>
	`;
}

function writeText (text) {
	document.getElementById('output').innerHTML += `
		<p class='rawText'>` + text + `</p>
	`;
}

function sceneTransition(scene) {
	console.log("scene transition started");
	wrapper.scrollTop = 0;
	document.getElementById('output').innerHTML = '';
	writeScene(scene);
	console.log("scene written");
}