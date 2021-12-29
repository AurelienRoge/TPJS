class TicTacToeView extends TicTacToe {
    constructor(game, gameName) {
        super();
        this.game = game;
        this.gameName = gameName;
        this.table = document.getElementById("morpion");
        this.RowTab = new Array(3);
        this.TilesTab = new Array();
        for (let i = 0; i < 3; i++) {
            this.RowTab[i] = document.getElementsByTagName("tr")[i];
        }
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                this.TilesTab.push(this.RowTab[i].getElementsByTagName("td")[j]);
            }
        }
    }

}

TicTacToeView.prototype.EventListeners = function () {
    for (let i = 0; i < 9; i++) {
        this.TilesTab[i].addEventListener('click', TicTacToeView.prototype.clickOnTile.bind(this.TilesTab[i]));
    }
}

TicTacToeView.prototype.clickOnTile = function(TileClicked) {
    
}

TicTacToeView.prototype.updateVisuals = function(){
    
}