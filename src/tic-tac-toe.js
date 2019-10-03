class TicTacToe {
    constructor() {
        this.field = [
            [null,null,null],
            [null,null,null],
            [null,null,null]
        ]
        this.playerToGo = 'x';
    }

    getCurrentPlayerSymbol() {
        return this.playerToGo;
    }

    nextTurn(rowIndex, columnIndex) {
        if ((!this.isFinished()) && this.field[rowIndex][columnIndex] === null) {
            this.field[rowIndex][columnIndex] = this.playerToGo;
            if (this.playerToGo === 'x') {this.playerToGo = 'o'
            } else {this.playerToGo = 'x'}  
        }
    }

    isFinished() {
        if ((this.getWinner() !== null) || (this.noMoreTurns())) {return true
        } else {return false}
    }

    getWinner() {
        if (this.field[0][0] === this.field[1][1] && this.field[0][0] === this.field[2][2] && typeof this.field[0][0] !== 'object') return this.field[0][0];
        if (this.field[0][0] === this.field[1][0] && this.field[0][0] === this.field[2][0] && typeof this.field[0][0] !== 'object') return this.field[0][0];
        if (this.field[0][1] === this.field[1][1] && this.field[0][1] === this.field[2][1] && typeof this.field[0][1] !== 'object') return this.field[0][1];
        if (this.field[0][2] === this.field[1][2] && this.field[0][2] === this.field[2][2] && typeof this.field[0][2] !== 'object') return this.field[0][2];
        if (this.field[0][0] === this.field[0][1] && this.field[0][0] === this.field[0][2] && typeof this.field[0][0] !== 'object') return this.field[0][0];
        if (this.field[1][0] === this.field[1][1] && this.field[1][0] === this.field[1][2] && typeof this.field[1][0] !== 'object') return this.field[1][0];
        if (this.field[2][0] === this.field[2][1] && this.field[2][0] === this.field[2][2] && typeof this.field[2][0] !== 'object') return this.field[2][0];
        if (this.field[0][2] === this.field[1][1] && this.field[0][2] === this.field[2][0] && typeof this.field[0][2] !== 'object') return this.field[0][2];
        return null;
    }

    noMoreTurns() {
        for (let i = 0; i <= 2; i++) {
            for (let j = 0; j <= 2; j++) {
                if (this.field[i][j] === null) return false;
            }
        }
        return true;
    }

    isDraw() {
        if ((this.noMoreTurns()) && (this.getWinner() === null)) return true;
        return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return (this.field[rowIndex][colIndex])
    }
}


module.exports = TicTacToe;
