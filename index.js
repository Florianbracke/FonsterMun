import { Fonster } from "/model/fonster.js";
import { GameController } from "/controller/gameController.js";
import { GameView } from "/view/gameView.js";

document.addEventListener("DOMContentLoaded", () => {

	// Variables
	const updateInterval = 100;

	//create and map all fonsters
	const fonsters = [new Fonster("fonster1"), new Fonster("fonster2"), new Fonster("fonster3")];
	// init gameController
	const gameController = new GameController(fonsters);
	// init gameView with all Fonsters, items, trees,...
	const gameView = new GameView(fonsters);



	//gameController.setActiveFonster(fonsters[0]);

	// setTimeout(() => {
	// 	gameController.setActiveFonster(fonsters[1]);
	// }, 5000);

	function gameLoop() {
		gameView.update();
		//gameController.setFonsterExploration(fonsters[1]);
	}

	setInterval(gameLoop, updateInterval);
});
