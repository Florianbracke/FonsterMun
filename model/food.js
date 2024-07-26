export class Food {
	constructor(x, y, nutrition) {
		this.x = x;
		this.y = y;
		this.isEaten = false;
		this.nutrition = nutrition;
	}

	render(context) {
		if (!this.isEaten) {
			context.fillStyle = "green"; // Color of the food item
			context.beginPath();
			context.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
			context.fill();
		}
	}

	consume(fonster) {
		this.isEaten = true;
		fonster.eatsFood(this);
		fonster;
	}
}
