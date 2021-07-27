const x = 'x';
const _ = null;
class Tetromino {
    constructor(game, row, col) {
        this.game = game;
        this.row = row;
        this.col = col;
        this.shape = this.makeShape();
        this.init()
    }

    init() {
        this.game.newLap = false;
    }

    makeShape() {
        const tetros = [
            //I
            [
                [
                    [x, x, x, x]
                ],
                [
                    [x],
                    [x],
                    [x],
                    [x]
                ]
            ],
            //O
            [
                [
                    [x, x],
                    [x, x]
                ]
            ],
            //T
            [
                [
                    [x, x, x],
                    [_, x, _]
                ],
                [
                    [_, x, _],
                    [_, x, x],
                    [_, x, _]

                ],
                [
                    [_, x, _],
                    [x, x, _],
                    [_, x, _]

                ],
                [
                    [_, x, _],
                    [x, x, x]
                ],
            ],
            //Z
            [
                [
                    [x, x, _],
                    [_, x, x]
                ],
                [
                    [_, x],
                    [x, x],
                    [x, _]
                ]
            ],
            //S
            [
                [
                    [_, x, x],
                    [x, x, _]
                ],
                [
                    [x, _],
                    [x, x],
                    [_, x]
                ]
            ],
        ]

        this.r = Math.floor(Math.random() * (tetros.length - 1));
        return tetros[this.r][0]

    }

    fall() {
        if (this.canFall()) {
            for (let i = 0; i < this.squares.length; i++) {
                this.squares[i].fall()
            }
        } else {
            this.game.newLap = true;
        }
    }

    canFall() {
        for (let i = 0; i < this.squares.length; i++) {
            if (!(this.squares[i].canFall() && this.squares[i].collideFree())) {
                return false;
            }
        }
        return true;
    }

    render() {
        const id = Date.now();
        this.squares = []
        for (let row = this.shape.length - 1; row >= 0; row--) {
            for (let column = this.shape[0].length - 1; column >= 0; column--) {
                if (this.shape[row][column] == x) {
                    const newSquare = new Square(this.game, row + this.row, column + this.col, id)
                    this.squares.push(newSquare)
                    this.game.board.data[row + this.row][column + this.column] = newSquare
                }
            }
        }
    }
}