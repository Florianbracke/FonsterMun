export class GameController {
	constructor(fonsters) {
		this.fonsters = fonsters;
		this.activeFonster = null;
		//this.movementActiveFonster();
	}

	// setActiveFonster(fonster) {
	// 	if (this.activeFonster) {
	// 		this.activeFonster.makeUnplayable();
	// 	}

	// 	this.activeFonster = fonster;
	// 	this.activeFonster.makePlayable();
	// }

	// movementActiveFonster() {
	// 	document.addEventListener("keydown", (event) => {
	// 		if (this.activeFonster) {
	// 			switch (event.key) {
	// 				case "ArrowUp":
	// 					this.activeFonster.move("up");
	// 					break;
	// 				case "ArrowDown":
	// 					this.activeFonster.move("down");
	// 					break;
	// 				case "ArrowLeft":
	// 					this.activeFonster.move("left");
	// 					break;
	// 				case "ArrowRight":
	// 					this.activeFonster.move("right");
	// 					break;
	// 			}
	// 		}
	// 	});
	// }

	// setFonsterExploration(fonster) {
	// 	if (fonster) {
	// 		if (fonster.x > -1 && fonster.x < 100) {
	// 			fonster.move("right");
	// 		}
	// 		if (fonster.y > -1 && fonster.y < 100) {
	// 			fonster.move("down");
	// 		}
	// 	}
	// }
}
