class Game {
    constructor() {
        this.canvas = null;
        this.context = null;
        this.timeout = null;
        this.newLap = true;
        this.init();
    }

    init() {
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');
        this.canvas.width = GAME_WIDTH;
        this.canvas.height = GAME_HEIGHT;
        document.body.appendChild(this.canvas);
        this.board = new Board(this);
        this.loop();
    }

    loop() {
        this.render();
        this.update();
        if (this.timeoutID) {
            clearTimeout(this.timeoutID);
            this.timeoutID = null;
        }

        this.timeoutID = setTimeout(() => {
            this.loop()
        }, 200)
    }

    update() {
        if (this.newLap) {
            this.tetro = new Tetromino(this, 0, 0)
            this.tetro.render()
        }
        this.tetro.fall()

    }

    render() {
        this.clearScreen();
        this.board.render()
    }

    clearScreen() {
        this.context.fillStyle = '#ffffff';
        this.context.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
        this.context.strokeRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    }
}


let game = new Game();