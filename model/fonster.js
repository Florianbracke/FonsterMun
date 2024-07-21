export class Fonster {
	constructor(name) {
		this.name = name;
		this.is_playable = false;
		this.x = 0;
		this.y = 0;
	}

	makePlayable() {
		this.is_playable = true;
	}

	makeUnplayable() {
		this.is_playable = false;
	}

	move(direction) {
		let step = 10;
		if (this.is_playable) {
			switch (direction) {
				case "up":
					this.y -= step;
					break;
				case "down":
					this.y += step;
					break;
				case "left":
					this.x -= step;
					break;
				case "right":
					this.x += step;
					break;
			}
		}
	}
}
