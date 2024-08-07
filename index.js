import { Fonster } from "/model/fonster.js";
import { GameController } from "/controller/gameController.js";
import { GameView } from "/view/gameView.js";

document.addEventListener("DOMContentLoaded", () => {
	const fonsters = [new Fonster("fonster1"), new Fonster("fonster2"), new Fonster("fonster3")];
	const gameController = new GameController(fonsters);
	const gameView = new GameView(fonsters);
	const updateInterval = 100;

	gameController.setActiveFonster(fonsters[0]);

	setTimeout(() => {
		gameController.setActiveFonster(fonsters[1]);
	}, 5000);

	function gameLoop() {
		gameView.update();
		//		requestAnimationFrame(gameLoop);
		gameController.setFonsterExploration(fonsters[1]);
	}

	setInterval(gameLoop, updateInterval);
});
