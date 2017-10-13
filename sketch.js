var PadL;
var PadR;
var ball;
var showScore;
var isMoving;
var RScore = 0;
var LScore = 0;
var scl = 7.5

function preload() {
	myFont = loadFont('https://cdn.rawgit.com/INeedMenta1Help/Pong/d51a9afc/FFFFORWA.TTF?raw=true');
}

function setup() {

	frameRate(60);
	rectMode(CENTER);
	createCanvas(window.innerWidth - 10, window.innerHeight - 10);
	PadL = new Paddle(20, height/2);
	PadR = new Paddle(width - 20, height/2);
	ball = new Ball(width/2, height/2, 20);
	showScore = new ScoreDisplay();
}

function draw() {
	background(0, 175);

	//paddles
	PadL.render();
	PadR.render();
	PadL.move();
	PadR.move();
	PadL.edges();
	PadR.edges();

	//bot
	//comment out PadL.bot if you want to play...
	PadL.botL();
	//Do not Comment Out PadR.Bot
	PadR.botR();

	//ball
	ball.render();
	ball.move();
	ball.score();
	ball.edges();
	ball.hit();

	//ScoreDisplay
	showScore.render();
}

function keyReleased() {
	if (PadL.isMoving) {
		PadL.dir = 0;
		PadL.isMoving = false;
	}
}
/*
function keyPressed() {
	if (keyCode === UP_ARROW) {
		PadL.isMoving= true;
		PadL.dir = -1;
	} else if (keyCode === DOWN_ARROW) {
		PadL.isMoving= true;
		PadL.dir = 1;
	}
}
*/

function ScoreDisplay() {
	console.log(LScore);
	console.log(RScore);

	this.render = function() {
		ScoreString = (str(LScore) + "-" + str(RScore));
		textAlign(CENTER);
		textFont(myFont);
		textSize(100);
		text(ScoreString, width/2, 175);
	}
}
