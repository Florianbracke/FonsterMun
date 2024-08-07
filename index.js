import { Fonster } from "/model/fonster.js";
import { GameController } from "/controller/gameController.js";
import { GameView } from "/view/gameView.js";

document.addEventListener("DOMContentLoaded", () => {
	// Variables
	const updateInterval = 100;

	//create and map all fonsters
	const fonsters = [new Fonster("Freddy", 10, 100, "fire", "water"), new Fonster("Gice", 30, 10, "ice", "grass"), new Fonster("Fark", 100, 100, "dark", "fairy")];
	// init gameController
	const gameController = new GameController(fonsters);
	// init gameView with all Fonsters, items, trees,...
	const gameView = new GameView(fonsters);
	gameView.init();
	gameView.createTerrain();
	//gameController.setActiveFonster(fonsters[0]);

	// setTimeout(() => {
	// 	gameController.setActiveFonster(fonsters[1]);
	// }, 5000);

	// gebruiken om het verloop van het spel te doen
	function gameLoop() {
		gameView.update();
		//gameController.setFonsterExploration(fonsters[1]);
	}
	//setInterval(gameLoop, updateInterval);
});
