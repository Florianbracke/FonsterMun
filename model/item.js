export class Item {
	constructor(x, y, healtPoints, defense) {
		this.id = new Date().valueOf();
		this.x = x;
		this.y = y;
		this.healtPoints = healtPoints;
		this.defense = defense;
	}

	setPosition(x, y) {
		if (x !== this.x) {
			this.x = x;
		}
		if (y !== this.y) {
			this.y = y;
		}
	}

	remove() {}
}
