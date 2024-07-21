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
		if (this.is_playable) {
			switch (direction) {
				case "up":
					this.y -= 1;
					break;
				case "down":
					this.y += 1;
					break;
				case "left":
					this.x -= 1;
					break;
				case "right":
					this.x += 1;
					break;
			}
		}
	}
}
