//TODO
// - gameview moet wss ook map meekrijgen

export class GameView {
	constructor(fonsters) {
		this.fonsters = fonsters;

		this.fonsterElements = this.fonsters.map((fonster) => {
			const element = document.createElement("div");
			element.id = fonster.name;
			element.className = fonster.name + " fonster";
			document.querySelector(".gameWrapper").appendChild(element);
			return element;
		});
	}

	update() {
		this.fonsters.forEach((fonster, index) => {
			const element = this.fonsterElements[index];
			element.style.left = `${fonster.x}px`;
			element.style.top = `${fonster.y}px`;
		});
	}

	// fromJson()
	// toJson()

}
