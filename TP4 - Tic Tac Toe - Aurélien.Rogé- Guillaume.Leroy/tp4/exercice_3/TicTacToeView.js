class TicTacToeView extends TicTacToe {
    constructor(game, gameName) {//Constructeur pour assigner toutes les variables utilisées et initialiser les listeners sur les cases.
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
        this.endGameTextShown = false;
        this.EventListeners();
    }

    //Ajout des listeners pour chaque case du jeu
    EventListeners() {
        for (let i = 0; i < 9; i++) {
            this.TilesTab[i].addEventListener('click', this.clickOnTile.bind(this.TilesTab[i]));
            this.TilesTab[i].gameName = this.gameName;
            this.TilesTab[i].game = this.game;
            this.TilesTab[i].parent = this;
        }
    }

    //Fonction qui va s'effectuer quand on clic sur une case
    clickOnTile(TileClicked) {
        if (!this.game.isFinished()) {
            this.game.play(Math.floor(parseInt(TileClicked.target.dataset.value) % 3), Math.floor(parseInt(TileClicked.target.dataset.value) / 3)); //On convertit les coordonnées en 1D pour correspondre au système de coordonnées en 2D du morpion.
            this.parent.updateVisuals();
        }
        else {//Si la partie est terminée, alors un clic sur une case le remet à 0;
            this.game.reset();
            this.parent.updateVisuals();
        }
        this.parent.printEndOfGameInfo();//Si la partie est terminée, on affiche le résultat.

    }

    //Mise à jour du tableau de jeu -> on parcourt la grille du jeu et on assigne le visuel correspondant à chaque case.
    updateVisuals() {
        for (let i = 0; i < 9; i++) {
            if (this.game.getCaseState(i % 3, Math.floor(i / 3)) == 1) {
                this.TilesTab[i].innerHTML = "X";
            }
            if (this.game.getCaseState(i % 3, Math.floor(i / 3)) == 0) {
                this.TilesTab[i].innerHTML = "O";
            }
            if (this.game.getCaseState(i % 3, Math.floor(i / 3)) == undefined) {
                this.TilesTab[i].innerHTML = "";
            }
        }
        if (!this.game.isFinished()) {
            //Mise à jour du texte pour afficher quel joueur doit jouer.
            let currentPlayerText = document.getElementById("player_number");
            currentPlayerText.innerHTML = this.game.getCurrentPlayer();
            if (this.game.getCurrentPlayer() == 0) {
                currentPlayerText.innerHTML += " (Il joue les O)";
            }
            else {
                currentPlayerText.innerHTML += " (Il joue les X)";
            }
        }

    }

    //Affichage du texte de fin de partie si la partie est terminée, et effacage de celui-ci sinon.
    printEndOfGameInfo() {
        if (this.game.isFinished()) {
            console.log("Game is finished !");
            this.endGameTextShown = true;

            let endGameText = document.createElement("div");
            endGameText.id = "endGameText";
            document.body.appendChild(endGameText);
            endGameText.innerHTML = "La partie est terminée";

            if (this.game.hasWinner()) {
                endGameText.innerHTML += " et le gagnant est le joueur " + this.game.getWinner();
                if (this.game.getCurrentPlayer() == 0) { //J'inverse pour l'affichage de joueur X et O car le currentPlayer change avant que l'on affiche le texte.
                    endGameText.innerHTML += " (Joueur X)";
                }
                else {
                    endGameText.innerHTML += " (Joueur O)";
                }
                console.log("Winner is player " + this.game.getWinner());
            }

        }
        else {
            this.endGameTextShown = false;

            let deleteEndGameText = document.getElementById("endGameText");
            if (deleteEndGameText != null) {
                document.body.removeChild(deleteEndGameText);
            }
        }
    }
}

