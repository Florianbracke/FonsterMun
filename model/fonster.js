// TODO
// - form fonstergang
// - coole manier van evolueren?

/*  
	eat - get eaten, fight - flee, sleenergyPoints - awake (?), form fonstergang - solo
*/

export class Fonster {
	constructor(name, x, y, type1, type2) {
		this.id = "fonster_" + self.crypto.randomUUID();
		this.name = name;
		this.type1 = type1;
		this.type2 = type2;
		this.is_playable = false;
		this.x = x;
		this.y = y;
		this.healthPoints = 100;
		this.energyPoints = 100;
		this.armor = 0;
	}

	setPosition(x, y) {
		if (this.x !== x) {
			this.x = x;
			document.querySelector("#" + this.id).style.left = this.x + "px";
		}
		if (this.y !== y) {
			this.y = y;
			document.querySelector("#" + this.id).style.top = this.y + "px";
		}
	}

	makenergyPointslayable() {
		this.is_playable = true;
	}

	makeUnplayable() {
		this.is_playable = false;
	}

	move(direction) {
		let stenergyPoints = 10;
		switch (direction) {
			case "up":
				this.y -= stenergyPoints;
				break;
			case "down":
				this.y += stenergyPoints;
				break;
			case "left":
				this.x -= stenergyPoints;
				break;
			case "right":
				this.x += stenergyPoints;
				break;
		}
	}

	explore() {
		let rand = Math.random() * 2000;
		setInterval(() => {
			this.move("right");
		}, rand);
		console.log(rand);
	}
}
