//TODO
// - Fonster class terug omzetten naar leesbare classe / of leren deze lezen

export class Fonster {
	constructor({
		name = 'Fonster',
		x = 0,
		y = 0,
		health = 100,
		physicalEnergy = 10,
		physicalEnergyProtection = 100,
		mentalEnergy = 10,
		mentalEnergyProtection = 100,
		is_active = false
	} = {}) {
		this.id = Date.now();
		this.name = name;
		this.x = x;
		this.y = y;
		this.className = this.name + '_' + this.id;
		this.health = health;
		this.physicalEnergy = physicalEnergy;
		this.physicalEnergyProtection = physicalEnergyProtection;
		this.mentalEnergy = mentalEnergy;
		this.mentalEnergyProtection = mentalEnergyProtection;
		this.is_active = is_active;
	}

	draw() {
		let gameContainer = document.querySelector('.gameWrapper');
		let fonster = document.createElement('div');
		fonster.classList.add(this.className);
		fonster.classList.add(this.name);
		fonster.classList.add('fonster');
		fonster.style.backgroundColor = this.color;
		gameContainer.appendChild(fonster);
		fonster.addEventListener('click', () => {
			this.clickOnFonster(fonster);
		})
	}

	clickOnFonster(fonster){

		document.querySelector('.' + this.className).classList.toggle('active_fonster');

		if(this.is_active == false){
			this.is_active = true;
		} else{
			this.is_active = false;
		}

		console.log(this.is_active)

		if( this.is_active != false){
			window.addEventListener('keydown', (event) => {
				console.log(event);
				this.handleKeydown(event, fonster)
			});
		}

	}

 	handleKeydown(event, fonster) {

        const step = 10;

        switch (event.key) {
            case 'ArrowUp':
                this.y = this.y - step;
                break;
            case 'ArrowDown':
                this.y = this.y + step;
                break;
            case 'ArrowLeft':
                this.x = this.x - step;
                break;
            case 'ArrowRight':
                this.x = this.x + step;
                break;
            default:
                return;
        }
        fonster.style.left = `${this.x}px`;
        fonster.style.top = `${this.y}px`;
        console.log(`${this.name} moved to (${this.x}, ${this.y})`);
    }

}
