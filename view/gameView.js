//TODO
// - gameview moet wss ook map meekrijgen

export class GameView {
	constructor(fonsters) {
		this.fonsters = fonsters;
		console.log(this.fonsters);
	}

	init() {
		this.fonsters.forEach((fonster) => {
			const fonsterDiv = document.createElement("div");
			fonsterDiv.id = fonster.id;
			fonsterDiv.className = fonster.name + " fonster";
			fonsterDiv.style.left = `${fonster.x}px`;
			fonsterDiv.style.top = `${fonster.y}px`;
			document.querySelector(".gameWrapper").appendChild(fonsterDiv);
		});
	}

	createTerrain() {
		const terrainHeight = 40;
		const terrainWidth = 60;
		let tile = document.createElement("div");
		const tileSize = 10;
		tile.className = "tile";
		tile.style.width = tileSize + "px";
		tile.style.height = tileSize + "px";
		for (let heightIndex = 0; heightIndex < terrainHeight; heightIndex++) {
			for (let widthIndex = 0; widthIndex < terrainWidth; widthIndex++) {
				let newTile = tile.cloneNode(true);
				newTile.style.left = widthIndex * tileSize + "px";
				newTile.style.top = heightIndex * tileSize + "px";
				document.querySelector(".gameWrapper").appendChild(newTile);
			}
		}
	}

	// fromJson()
	// toJson()
}
