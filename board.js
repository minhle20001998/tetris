class Board {
    constructor(game) {
        this.game = game;
        this.data = Array.from({ length: 24 }, (item) => {
            return Array.from({ length: 10 }, (item) => {
                return null
            })
        })
    }

    getData(row, col) {
        return this.data[row][col]
    }

    addSquareToBoard(square, row, col) {
        this.data[row][col] = square;
    }

    removeSquareFromBoard(row, col) {
        this.data[row][col] = null
    }

    render() {
        for (let row = NUM_ROWS - 1; row >= 0; row--) {
            for (let column = NUM_COLS - 1; column >= 0; column--) {
                let curr = this.data[row][column]
                if (curr != null) {
                    curr.render()
                }
            }
        }
    }

}