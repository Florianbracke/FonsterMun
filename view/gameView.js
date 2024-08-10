//TODO
// - gameview moet wss ook map meekrijgen

export class GameView {
	constructor(fonsters) {
		this.fonsters = fonsters;
		console.log(this.fonsters);
	}

	//init() {}

	drawFonsters() {
		this.fonsters.forEach((fonster) => {
			var canvas = document.getElementById("myCanvas");
			var context = canvas.getContext("2d");
			const fonsterWidth = 10;
			fonster.x = fonster.x + 100;
			context.beginPath();
			context.arc(fonster.x, fonster.y, fonsterWidth, 0, 2 * Math.PI);
			context.stroke();
			console.log(fonster);
		});
	}

	drawEnvironment() {
		var canvas = document.getElementById("myCanvas");
		var context = canvas.getContext("2d");
		var cellSize = 20;
		context.strokeStyle = "#fae4ed"; // Grid line color

		for (let x = 0; x <= canvas.width; x += cellSize) {
			context.moveTo(x, 0);
			context.lineTo(x, canvas.height);
		}

		// Draw horizontal lines
		for (let y = 0; y <= canvas.height; y += cellSize) {
			context.moveTo(0, y);
			context.lineTo(canvas.width, y);
		}

		context.stroke();
	}

	// function collision({ box1, box2 }) {
	// 	return (
	// 		box1.position.x + box1.width >= box2.position.x && // box1 right collides with box2 left
	// 		box2.position.x + box2.width >= box1.position.x && // box2 right collides with box1 left
	// 		box1.position.y + box1.height >= box2.position.y && // box1 bottom collides with box2 top
	// 		box2.position.y + box2.height >= box1.position.y // box1 top collides with box2 bottom
	// 	)
	// }

	// createTerrain() {
	// 	const terrainHeight = 40;
	// 	const terrainWidth = 60;
	// 	let tile = document.createElement("div");
	// 	const tileSize = 10;
	// 	tile.className = "tile";
	// 	tile.style.width = tileSize + "px";
	// 	tile.style.height = tileSize + "px";
	// 	for (let heightIndex = 0; heightIndex < terrainHeight; heightIndex++) {
	// 		for (let widthIndex = 0; widthIndex < terrainWidth; widthIndex++) {
	// 			let newTile = tile.cloneNode(true);
	// 			newTile.style.left = widthIndex * tileSize + "px";
	// 			newTile.style.top = heightIndex * tileSize + "px";
	// 			document.querySelector(".gameWrapper").appendChild(newTile);
	// 		}
	// 	}
	// }

	// fromJson()
	// toJson()
}
