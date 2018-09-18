function ColisionHandler() {

 	/**
 	 * Checks the colision between two objects
 	 * @param obj1 - first object
 	 * @param obj2 - second object
 	 */
 	this.detectColisionBetweenObjects = function(obj1, obj2) {
 		if((obj1.getPositionY() + obj1.height) < obj2.getPositionY()) {
 			return false;
 		}
 		else if(obj1.getPositionY() > (obj2.getPositionY() + obj2.height)) {
 			return false;
 		}
 		else if((obj1.getPositionX() + obj1.width) < obj2.getPositionX()) {
 			return false;
 		}
 		else if(obj1.getPositionX() > (obj2.getPositionX() + obj2.width)) {
 			return false;
 		}
 		return true;
 	}
 }

function Enemy(initPosX, initPosY) {

	//image src
	var imgSrc = 'images/enemy.png';
	//width
	this.width = 22;
	//height
	this.height = 16;

	//enemy sprite
	var sprite = new Sprite(3);
	//set image and size
	sprite.initImage(imgSrc, this.width, this.height);
	//set initial position of the sprite
	sprite.initPosition(initPosX, initPosY);

	//initial action
	var currentAction = 'left';

	/**
	 * Draws the enemy sprite
	 */
	this.draw = function() {
		sprite.draw();
	}

	/**
	 * Simulates one step of the enemy
	 * @param action - indicates the action of the enemy
	 */
	this.step = function() {
		if(currentAction == 'left') {
			sprite.moveLeft();
		}else if(currentAction == 'right') {
			sprite.moveRight();
		}
	}

	/**
	 * Simulates one jump forward
	 */
	this.jump = function() {
		if(currentAction == 'left') {
			currentAction = 'right';
		}else {
			currentAction = 'left';
		}
		sprite.moveFront();
	}

	/**
	 * Verifies if the enemies needs to change of action
	 */
	this.checkStep = function() {
		if(sprite.x <= 10 && currentAction == 'left') {
			currentAction = 'right';
		}else if(sprite.x >= (WINDOW_WIDTH - 10) && currentAction == 'right') {
			currentAction = 'left';
		}
		return currentAction;
	}

	/**
	  * Return the position xx of the enemy
	  */
	 this.getPositionX = function() {
	 	return sprite.x;
	 }

	 /**
	  * Return the position yy of the enemy
	  */
	 this.getPositionY = function() {
	 	return sprite.y;
	 }
}

function KeyHandler() {
	//define the Z key
 	this.Z_KEY = 122;
 	this.z_KEY = 90;
 	//define the X key
 	this.X_KEY = 120;
 	this.x_KEY = 88;
 	//define the space key
 	this.SPACE_KEY = 32;

 	/**
 	 * Handle the events when a key is pressed
 	 * @param e - event
 	 * @param player - player
 	 */
 	this.keyPress = function(e) {
 		keyPressed = e.which ? e.which : window.event.keyCode;

 		switch(keyPressed) {
 			case this.Z_KEY:
 			case this.z_KEY:
 				player.movingLeft = true;
 				break;
 			case this.X_KEY:
 			case this.x_KEY:
 				player.movingRight = true;
 				break;
 			case this.SPACE_KEY:
 				lasers[lasers.length] = new Laser(player);
 				break;
 		}
 	}

 	/**
 	 * Handle events when key is released
 	 * @param e - event
 	 */
 	this.keyUp = function(e) {
 		keyPressed = e.which ? e.which : window.event.keyCode;

 		switch(keyPressed) {
 			case this.Z_KEY:
 			case this.z_KEY:
 				player.movingLeft = false;
 				break;
 			case this.X_KEY:
 			case this.x_KEY:
 				player.movingRight = false;
 				break;
 		}
 	}
}

function Laser(player) {
	//increment
	const INCREMENT = 20;
	//laser width
	this.width = 5;
	//laser height
	this.height = 5;
	//intial position xx
	this.x = player.getPositionX() - 2;
	//initial position yy
	this.y = player.getPositionY() - 15;

	/**
	 * Draw the laser
	 */
	this.draw = function() {
		//context style
		context.fillStyle = "red";
		//draw the rectangle laser
		context.fillRect(this.x, this.y, this.width, this.height);
	}

	/**
	 * Simulate one step of the laser and verifies if it
	 * already reach the top of the screen
	 */
	this.step = function() {
		this.y = this.y - INCREMENT;
		if(this.y <= 0)	return true;
		return false;
	}

	/**
	  * Return the position xx of the laser
	  */
	 this.getPositionX = function() {
	 	return this.x;
	 }

	 /**
	  * Return the position yy of the laser
	  */
	 this.getPositionY = function() {
	 	return this.y;
	 }
}

function Player() {

	//image src
	var imgSrc = 'images/ship.png';
	//width
	this.width = 26;
	//height
	this.height = 16;

  this.lives = 3;

	//indicates if the sprite is moving left
	this.movingLeft = false;
	//indicates if the sprite is moving right
	this.movingRight = false;

	//create the player sprite
	var sprite = new Sprite(20);
	//set sprite image and size
	sprite.initImage('images/ship.png', 26, 16);
	//set initial position of the sprite
	sprite.initPosition(WINDOW_WIDTH / 2, WINDOW_HEIGHT - 100);

	/**
	 * Draw the player
	 */
	this.draw = function() {
		sprite.draw();
	}

	/**
	 * Moves the player character to left
	 */
	this.moveLeft = function() {
		sprite.moveLeft();
	}

	/**
	 * Moves the player character to right
	 */
	 this.moveRight = function() {
	 	sprite.moveRight();
	 }

	 /**
	  * Return the position xx of the player
	  */
	 this.getPositionX = function() {
	 	return sprite.x;
	 }

	 /**
	  * Return the position yy of the player
	  */
	 this.getPositionY = function() {
	 	return sprite.y;
	 }
}

function Sprite(increment) {
	//increment
	var increment = increment;

	/**
	 * Initialize sprite image and size
	 * @param src - image source
	 * @param widht - image width
	 * @param height - image height
	 */
	this.initImage = function(src, width, height) {
		//set image sprite
		this.image = new Image();
		//set image source
		this.image.src = src;
		//set image width
		this.width = width;
		//set image height
		this.height = height;
	}
	/**
	 * Initialize the sprite position
	 * @param initPosX - initial position xx
	 * @param initPosY - initial position yy
	 */
	this.initPosition = function(initPosX, initPosY) {
		this.x = initPosX;
		this.y = initPosY;
	}

	/**
	 * Set sprite position
	 * @param posX - position xx
	 * @param posY - position yy
	 */
	this.setPosition = function(posX, posY) {
		if((posX > 0) && (posX < WINDOW_WIDTH)) { //check the position boundaries
			this.x = posX;
	 		this.y = posY;
		}
	}

	/**
	 * Draw sprite
	 */
	this.draw = function() {
		//removes image size
		var positionX = this.x - (this.width / 2);
		var positionY = this.y - (this.height / 2);
		//draw image
		context.drawImage(this.image, positionX, positionY);
	}

	/**
	 * Move sprite to the left
	 */
	this.moveLeft = function() {
		this.setPosition(this.x - increment, this.y);
	}

	/**
	 * Move sprite to the right
	 */
	this.moveRight = function() {
		this.setPosition(this.x + increment, this.y);
	}

	/**
	 * Move sprite to the front
	 */
	this.moveFront = function() {
		this.setPosition(this.x, this.y + (increment * 3));
	}
}

var drawWindow = function() {
 	context.fillStyle = '#000';
	context.clearRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);
	context.beginPath();
	context.rect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);
	context.closePath();
	context.fill();
}

/**
 * Create an horde of enemies, the horde is divided in columns and rows
 * @param numRows - indicate the number of rows
 * @param numCols - indicate the number of columns
 */
var createEnemies = function(numRows, numCols) {
	//reference position xx
	var refPosX = (WINDOW_WIDTH / 2);
	//reference position yy
	var refPosY = (WINDOW_HEIGHT / 10);
	//add enemies horde
	for(var x = 0;  x < numRows; ++x) {
		for(var y = 0; y < numCols; ++y) {
			//position xx
			var posX = refPosX + (40 * x);
			//position yy
			var posY = refPosY + (40 * y);
			//add an enemy to the array
			enemies[enemies.length] = new Enemy(posX, posY);
		}
	}
}

/**
 * Animate elements
 */
var animate = function() {
	var currentAction = '';

	if(player.movingLeft)	player.moveLeft();
	else if(player.movingRight)	player.moveRight();

	//iterate through all the lasers
	for(index in lasers) {
		//draw laser
		lasers[index].draw();
		//simulate one step
		if(lasers[index].step()){
			lasers.splice(index, 1);
		}
	}

	//check the movement of the enemies
	for(index in enemies) {
		currentAction = enemies[index].checkStep();
		if(currentAction != previousAction){
			break;
		}
	}

	//iterate through all the enemies
	for(index in enemies) {
		//draw enemy
		enemies[index].draw();
		//jump enemy
		if(currentAction != previousAction){
			enemies[index].jump();
		}else{
			//simulate step
			enemies[index].step();
		}
	}
	previousAction = currentAction;
}

/**
 * Detect colisions between the lasers and enemies
 */
var detectColisions = function() {
  var lives = document.getElementById('playerLives');
	for(indexLaser in lasers) {
		for(indexEnemy in enemies) {
			if(colisionHandler.detectColisionBetweenObjects(lasers[indexLaser], enemies[indexEnemy])) {
				lasers.splice(indexLaser, 1);
				enemies.splice(indexEnemy, 1);
				break;
			}
      else if (colisionHandler.detectColisionBetweenObjects(enemies[indexEnemy], player))
      {
        player.lives--;
        lives.innerText = "Lives left: " + player.lives;
      }
		}
	}
}

var checkWinner = function() {
  var header = document.getElementById('myHeader');
  var subheader = document.getElementById('controls');
  var flag = false;
  if (enemies.length === 0) {
    flag = true;
  }
  if (flag === true)
  {
    header.innerText = "Congrats!";
    subheader.innerText = "You won!";
  }


}

/**
 * Run the game
 */
var runGame = function() {
 	//draw the window game
 	drawWindow();
 	//draw the player
	player.draw();
	//animate all the elements
	animate();
	//check colisions
	detectColisions();
  //check winner
  checkWinner();
	//set timeout function
	gameLoop = window.requestAnimationFrame(runGame);
}

//window width
const WINDOW_WIDTH = 600;
//window height
const WINDOW_HEIGHT = 600;
//frame rate
const FRAME_RATE = 60;

//game loop
var gameLoop;
//interval time
var intervalTime = 1000 / FRAME_RATE;

//previous action of enemies
var previousAction = 'left';

//get frame window
var frameWindow = document.getElementById("content");
//frame window width
frameWindow.width = WINDOW_WIDTH;
//frame window height
frameWindow.height = WINDOW_HEIGHT;
//get context
var context = frameWindow.getContext("2d");

//keyhandler object
var keyHandler = new KeyHandler();
//colisionhandler object
var colisionHandler = new ColisionHandler();
//player object
var player = new Player();
//array that store the lasers
var lasers = new Array();
//array that store the enemies
var enemies = new Array();

//add enemies
createEnemies(6, 6);

//handle events when the a key is pressed
document.onkeypress = function(e) {
	keyHandler.keyPress(e);
}

//handle events when the key is released
document.onkeyup = function(e) {
	keyHandler.keyUp(e);
}

//run the game
runGame();
