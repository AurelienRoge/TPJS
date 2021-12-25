class TicTacToe extends Observable {
    constructor() { //Le constructeur hérite des méthodes de "Observable", défini le joueur actuel et créé la grille 3x3
        super();
        this.currentPlayer = 0;
        this.grid = new Array(3);//Tableau à une dimension de taille 3
        for (let i = 0; i < this.grid.length; i++) {
            this.grid[i] = new Array(3); //Pour chaque case du tableau, on lui crée un tableau de taille 3
        }//On a ainsi un tableau à deux dimensions de taille 3x3
    }


}

//On effectue l'action entrée et ENSUITE on change de joueur
TicTacToe.prototype.play = function (x, y) {
    this.grid[x][y] = this.currentPlayer;

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
}

TicTacToe.prototype.getCurrentPlayer = function () {
    return this.currentPlayer;
}

TicTacToe.prototype.getCaseState = function (x, y) {
    return this.grid[x][y];
}

TicTacToe.prototype.isFinished = function () {

}

TicTacToe.prototype.hasWinner = function () {

}

TicTacToe.prototype.getWinner = function () {

}