class Square {
    constructor(game, row, col, id) {
        this.game = game;
        this.size = GAME_WIDTH / 10;
        this.row = row;
        this.col = col;
        this.id = id;
        this.lastPos = [null, null]
        this.init()
    }

    init() {
        this.game.board.addSquareToBoard(this, this.row, this.col)
    }

    canFall() {
        return !(this.row == NUM_ROWS - 1)
    }

    collideFree() {
        const underBlock = this.game.board.getData(this.row + 1, this.col)
        if (underBlock) {
            if (underBlock.id === this.id) {
                return true;
            } else {
                return false;
            }
        }
        else {
            return true;
        }
    }

    setLastPos(row, col) {
        this.lastPos = [row, col]
    }

    fall() {
        if (this.canFall() && this.collideFree()) {
            this.setLastPos(this.row, this.col)
            this.row++;
            this.game.board.addSquareToBoard(this, this.row, this.col)
            this.game.board.removeSquareFromBoard(this.lastPos[0], this.lastPos[1])
        } else {
            this.game.newLap = true;
        }
    }

    render() {
        let x = this.col * this.size;
        let y = this.row * this.size;
        this.game.context.fillStyle = '#84A07C'
        this.game.context.fillRect(x + 1, y + 1, this.size - 2, this.size - 2)
    }
}