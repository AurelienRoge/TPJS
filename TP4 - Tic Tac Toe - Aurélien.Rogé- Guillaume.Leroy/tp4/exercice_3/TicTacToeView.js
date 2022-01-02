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
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                this.TilesTab.push(this.RowTab[i].getElementsByTagName("td")[j]);
            }
        }
    }
    EventListeners() {
        for (let i = 0; i < 9; i++) {
            this.TilesTab[i].addEventListener('click', this.clickOnTile.bind(this.TilesTab[i]));
            this.TilesTab[i].gameName = this.gameName;
            this.TilesTab[i].game = this.game;
            this.TilesTab[i].parent = this;
        }
    }

    clickOnTile(TileClicked) {
        if(this.game.isFinished() == false){
            this.game.play(Math.floor(parseInt(TileClicked.target.dataset.value) % 3), parseInt(TileClicked.target.dataset.value) - Math.floor(parseInt(TileClicked.target.dataset.value) % 3)); //On convertit les coordonnées en 1D pour correspondre au système de coordonnées en 2D du morpion.
            this.parent.updateVisuals();
            for(let i = 0; i < 9 ;i++){
               console.log(this.parent.game.getCaseState(i % 3, i - i % 3));
               console.log("i = " + i);
               console.log("This game grid 2 1 : " + this.parent.game.grid[2][1]);
            }
        }
        else{
            console.log("Game is finished !");
        }
        

    }

    updateVisuals(){
        for(let i = 0; i < 9 ; i++){
            if (this.game.getCaseState(i % 3, i - i % 3) == 1) {
                this.TilesTab[i].innerHTML = "1";
            }
            if (this.game.getCaseState(i % 3, i - i % 3) == 0) {
                this.TilesTab[i].innerHTML = "0";
            }
        }
        let currentPlayerText = document.getElementById("player_number");
        currentPlayerText.innerHTML = this.game.getCurrentPlayer();
    }


}

