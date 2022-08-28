const enemiesConfig = {
    TOP_POS: 51,
    MIDDLE_POS: 141,
    BOTTOM_POS: 226,
};

const playerConfig = {
    POS_X: 200,
    POS_Y: 400
};

const canvasConfig = {
    CELL_WIDTH: 101,
    CELL_HEIGHT: 83,
    HEIGHT: 600,
    WIDTH: 500
};

const gameConfig = {
    PADDING_TOP: 20,
    PADDING_LEFT: 78,
}

// Enemies our player must avoid
const Enemy = function (x, y) {
    this.x = x;
    this.y = y;
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

const addEnemies = () => Object.values(enemiesConfig).map(pos => new Enemy(-canvasConfig.CELL_WIDTH, pos));

const allEnemies = addEnemies();

// Now write your own player class
const Player = function (x, y) {
    this.x = x;
    this.y = y;

    this.sprite = 'images/char-boy.png';
};

Player.prototype = Enemy.prototype;

Player.prototype.handleInput = function (key) {
    switch (key) {
        case 'ArrowUp':
            if (this.y > 0) {
                this.y -= canvasConfig.CELL_HEIGHT;
            }
            break;
        case 'ArrowDown':
            if (this.y < playerConfig.POS_Y) {
                this.y += canvasConfig.CELL_HEIGHT;
            }
            break;
        case 'ArrowLeft':
            if (this.x > 0) {
                this.x -= canvasConfig.CELL_WIDTH;
            }
            break;
        case 'ArrowRight':
            if (this.x < canvasConfig.WIDTH - canvasConfig.CELL_WIDTH) {
                this.x += canvasConfig.CELL_WIDTH;
            }
            break;
        default:
            break;

    }
}

const player = new Player(playerConfig.POS_X, playerConfig.POS_Y);

// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function ({ key }) {
    player.handleInput(key);
});
