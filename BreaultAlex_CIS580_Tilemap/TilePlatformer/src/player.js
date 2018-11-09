var tilemap = require('./tilemap.js');
var playersprite = require('../sprite/Mushroom.png');
/** @module Player
  * A class representing the player.
  */
export default class Player {
  /** @constructor
    * Constructs a new player instance
    * @param {float} x - the player's x position
    * @param {float} y - the player's y position
    */
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.sprites = [];
    this.direction = 'south';
    this.spritesheet = new Image();
    this.spritesheet.src = '../sprite/Mushroom.png';

    // Create the tileset's tiles
    var colCount = Math.floor(224 / 32),
    rowCount = Math.floor(32 / 32),
    spriteCount = colCount * rowCount;

    for(i = 0; i < spriteCount; i++) {
      var sprite = {
        // Reference to the image, shared amongst all tiles in the tileset
        image: this.spritesheet,
        sx: (i % colCount) * 32,
        sy: 0
      }
      this.sprites.push(sprite);
    }
    console.log(this.sprites);
  }

  // Helper function to check for non-existent or solid tiles
  isPassible(x, y) {
    var data = tilemap.tileAt(x, y, 0);
    console.log(data);
    // if the tile is out-of-bounds for the tilemap, then
    // data will be undefined, a "falsy" value, and the
    // && operator will shortcut to false.
    // Otherwise, it is truthy, so the solid property
    // of the tile will determine the result
    return data && !data.solid;
  }

  /** @method update
    * Updates the player
    * @param {double} deltaT - the elapsed time
    * @param {Input} input - the input object
    */
  update(deltaT, input) {

    if(input.keyPressed("ArrowLeft") && this.isPassible(this.x - 16, this.y)){
      this.x--;
      this.direction = 'west';
    }
    if(input.keyPressed("ArrowRight") && this.isPassible(this.x + 16, this.y)){
      this.x++;
      this.direction = 'east';
    }
    if(input.keyPressed("ArrowUp") && this.isPassible(this.x, this.y - 16)){
      this.y--;
      this.direction = 'north';
    }
    if(input.keyPressed("ArrowDown") && this.isPassible(this.x, this.y+16)){
      this.y++;
      this.direction = 'south';
    }
  }

  /** @method render
    * Renders the player
    * @param {double} deltaT - elapsed time
    * @param {Context2D} context - the rendering context
    */
  render(deltaT, context) {
    context.beginPath();
    switch(this.direction) {
      case 'north':
          context.drawImage(
            this.spritesheet,     // The image to draw
            this.sprites[4].sx, this.sprites[4].sy, 32, 32, // The portion of image to draw
            this.x, this.y, 32, 32 // Where to draw the image on-screen
          );
          break;
      case 'east':
          context.drawImage(
            this.spritesheet,     // The image to draw
            this.sprites[3].sx, this.sprites[3].sy, 32, 32, // The portion of image to draw
            this.x, this.y, 32, 32 // Where to draw the image on-screen
          );
          break;
      case 'west':
          context.drawImage(
            this.spritesheet,     // The image to draw
            this.sprites[6].sx, this.sprites[6].sy, 32, 32, // The portion of image to draw
            this.x, this.y, 32, 32 // Where to draw the image on-screen
          );
          break;
      default:
          context.drawImage(
            this.spritesheet,     // The image to draw
            this.sprites[1].sx, this.sprites[1].sy, 32, 32, // The portion of image to draw
            this.x, this.y, 32, 32 // Where to draw the image on-screen
          );
  }
  }

}
