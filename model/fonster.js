// TODO
// - form fonstergang
// - coole manier van evolueren?

/*
	eat - get eaten, fight - flee, sleep - awake (?), form fonstergang - solo
*/

export class Fonster {
	constructor(name, type, hp, ep) {
		this.id = new Date().valueOf();
		this.name = name;
		this.type = type;
		this.is_playable = false;
		this.x = 0;
		this.y = 0;
		this.hp = hp;
		this.ep = ep;
	}

	setPosition(x, y) {
		if (this.x !== x) {
			this.x = x;
		}
		if (this.y !== y) {
			this.y = y;
		}
	}

	makePlayable() {
		this.is_playable = true;
	}

	makeUnplayable() {
		this.is_playable = false;
	}

	move(direction) {
		let step = 10;
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

	explore() {
		// let rand = Math.random() * 2000;
		// setInterval(() => {
		// 	this.move("right");
		// }, rand);
		// console.log(rand);
		console.log('Fonster-' + this.fonster.id + ' is currently exploring');
	}

	eat(){
		console.log('Fonster-' + this.fonster.id + ' is currently eating');
	}

	sleep(){
		console.log('Fonster-' + this.fonster.id + ' is currently sleeping');
	}
}
