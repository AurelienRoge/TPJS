class TicTacToe extends Observable {
    constructor() { //Le constructeur hérite des méthodes de "Observable", défini le joueur actuel et créé la grille 3x3
        super();
        this.currentPlayer = 0;
        this.grid = new Array(3);//Tableau à une dimension de taille 3
        for (let i = 0; i < this.grid.length; i++) {
            this.grid[i] = new Array(3); //Pour chaque case du tableau, on lui crée un tableau de taille 3
        }//On a ainsi un tableau à deux dimensions de taille 3x3
        this.finished = false;
        this.winner = undefined;
    }


}

//On effectue l'action entrée (si case possible) et ENSUITE on change de joueur
TicTacToe.prototype.play = function (x, y) {
    if (this.grid[x][y] == undefined) {
        this.grid[x][y] = this.currentPlayer;
    }
    if (this.currentPlayer == 0) {
        this.currentPlayer = 1;
    }
    else { this.currentPlayer = 0; }
}

TicTacToe.prototype.reset = function () {
    this.currentPlayer = 0;
    this.grid = new Array(3);
    for (let i = 0; i < this.grid.length; i++) {
        this.grid[i] = new Array(3);
    }
    this.finished = false;
    this.winner = undefined;
}

TicTacToe.prototype.getCurrentPlayer = function () {
    return this.currentPlayer;
}

TicTacToe.prototype.getCaseState = function (x, y) {
    return this.grid[x][y];
}

TicTacToe.prototype.isFinished = function () {
    //Check columns :
    for (let i = 0; i < 3; i++) {
        if ((this.grid[i][0] == 0 && this.grid[i][1] == 0 && this.grid[i][2] == 0) || (this.grid[i][0] == 1 && this.grid[i][1] == 1 && this.grid[i][2] == 1) && this.grid[i][0] != undefined) {
            this.finished = true;
            this.winner = this.grid[i][0];
            return this.finished;
        }
    }
    //Check lines :
    for (let i = 0; i < 3; i++) {
        if ((this.grid[0][i] == 0 && this.grid[1][i] == 0 && this.grid[2][i] == 0) || (this.grid[0][i] == 1 && this.grid[1][i] == 1 && this.grid[2][i] == 1) && this.grid[0][i] != undefined) {
            this.finished = true;
            this.winner = this.grid[0][i];
            return this.finished;
        }
    }
    //Check diag :
    if ((this.grid[0][0] == 0 && this.grid[1][1] == 0 && this.grid[2][2] == 0) || (this.grid[0][0] == 1 && this.grid[1][1] == 1 && this.grid[2][2] == 1) && this.grid[1][1] != undefined) {
        this.finished = true;
        this.winner = this.grid[1][1];
        return this.finished;
    }
    if ((this.grid[2][0] == 0 && this.grid[1][1] == 0 && this.grid[0][2] == 0) || (this.grid[2][0] == 1 && this.grid[1][1] == 1 && this.grid[0][2] == 1) && this.grid[1][1] != undefined) {
        this.finished = true;
        this.winner = this.grid[1][1];
        return this.finished;
    }
    //Check mate :
    //On vérifie toutes les cases, si il en reste au moins une jouable, alors il n'y a pas nul et la partie n'est donc pas finie (sachant qu'aucune victoire n'a été détectée), sinon, la partie est terminée.
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (this.grid[i][j] == undefined) {
                return this.finished;
            }
        }
    }
    this.finished = true;
    return this.finished;
}

TicTacToe.prototype.hasWinner = function () {
    if (this.winner != undefined) {
        return true;
    }
    else { return false; }
}

TicTacToe.prototype.getWinner = function () {
    return this.winner;
}