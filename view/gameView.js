//TODO
// - fonsters juiste classes meegeven
// - fonsters geen css properties meegeven
// - fonsters op gameContainer laten toekomen ipv body

export class GameView {
	constructor(fonsters) {
		this.fonsters = fonsters;
		this.fonsterElements = this.fonsters.map((fonster) => {
			const element = document.createElement("div");
			element.id = fonster.name;
			element.style.position = "absolute";
			element.style.backgroundColor = "red";
			document.body.appendChild(element);
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
}
