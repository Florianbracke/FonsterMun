import { Fonster } from "/model/fonster.js";
import { GameController } from "/controller/GameController.js";
import { GameView } from "/view/GameView.js";

document.addEventListener("DOMContentLoaded", () => {
	const fonsters = [new Fonster("fonster1"), new Fonster("fonster2"), new Fonster("fonster3")];
	const gameController = new GameController(fonsters);
	const gameView = new GameView(fonsters);

	gameController.setActiveFonster(fonsters[0]);

	setTimeout(() => {
		gameController.setActiveFonster(fonsters[1]);
	}, 5000);

	function gameLoop() {
		gameView.update();
		requestAnimationFrame(gameLoop);
	}

	gameLoop();
});
