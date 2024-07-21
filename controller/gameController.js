export class GameController {
	constructor(fonsters) {
		this.fonsters = fonsters;
		this.activeFonster = null;
		this.initEventListeners();
	}

	setActiveFonster(fonster) {
		if (this.activeFonster) {
			this.activeFonster.makeUnplayable();
		}
		this.activeFonster = fonster;
		this.activeFonster.makePlayable();
	}

	initEventListeners() {
		document.addEventListener("keydown", (event) => {
			if (this.activeFonster) {
				switch (event.key) {
					case "ArrowUp":
						this.activeFonster.move("up");
						break;
					case "ArrowDown":
						this.activeFonster.move("down");
						break;
					case "ArrowLeft":
						this.activeFonster.move("left");
						break;
					case "ArrowRight":
						this.activeFonster.move("right");
						break;
				}
			}
		});
	}
}
