//TODO
// - gameview moet wss ook map meekrijgen

export class GameView {
	constructor(fonsters) {
		this.fonsters = fonsters;
	}

	update() {

		this.fonsters.forEach(fonster => {
			const fonsterDiv = document.createElement("div");
			fonsterDiv.id = fonster.name;
			fonsterDiv.className = fonster.name + " fonster";
			fonsterDiv.style.left = `${fonster.x}px`;
			fonsterDiv.style.top = `${fonster.y}px`;
			document.querySelector(".gameWrapper").appendChild(fonsterDiv);
		});

		// Create Fonster divs
		// this.fonsterElements = this.fonsters.map((fonster) => {
		// 	const element = document.createElement("div");
		// 	element.id = fonster.name;
		// 	element.className = fonster.name + " fonster";
		// 	document.querySelector(".gameWrapper").appendChild(element);
		// 	return element;
		// });
		// // Set Fonster position
		// this.fonsters.forEach((fonster, index) => {
		// 	const element = this.fonsterElements[index];
		// 	element.style.left = `${fonster.x}px`;
		// 	element.style.top = `${fonster.y}px`;
		// });
	}

	// fromJson()
	// toJson()

}
