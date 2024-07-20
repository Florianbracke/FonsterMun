// TODO
// - save en load snappen
// - addFonsters hoort hier mss niet thuis? Hoe aanpakken? Controller?

import { Fonster } from "/classes/fonster.js";

export class Game {
    constructor() {
        this.fonsters = [] // dynamisch begin fonsters toevoegen
        this.startAutoSave();
    }

    saveGame() {
        const gameState = {
            fonsters: this.fonsters.map(f => f.toJSON())
        };
        localStorage.setItem('gameState', JSON.stringify(gameState));
        console.log('Game saved!');
    }

    loadGame() {
        const savedState = localStorage.getItem('gameState');
        if (savedState) {
            const gameState = JSON.parse(savedState);
            this.fonsters = gameState.fonsters.map(Fonster.fromJSON);
            console.log('Game loaded!');
        } else {
            console.log('No saved game found.');
        }
        console.log('Game saved!');
    }

    startAutoSave() {
        setInterval(() => this.saveGame(), 10000); // Save every 10 seconds
    }

    addFonster(name, x, y, health, physicalEnergy, physicalEnergyProtection, mentalEnergy, mentalEnergyProtection) {
        if(!name){ name = 'Fonsterke_69' }
        if(!x){ x = 0 }
        if(!y){ y = 0 }
        if(!health){ health = 100 }
        if(!physicalEnergy){ physicalEnergy = 0 }
        if(!physicalEnergyProtection){ physicalEnergyProtection = 0 }
        if(!mentalEnergy){ mentalEnergy = 0 }
        if(!mentalEnergyProtection){ mentalEnergyProtection = 0 }

        let fonster = new Fonster({
                name: name,
                x: x,
                y: y,
                health: health,
                physicalEnergy: physicalEnergy,
                physicalEnergyProtection: physicalEnergyProtection,
                mentalEnergy: mentalEnergy,
                meentalEnergyProtection: mentalEnergyProtection,
        });

        fonster.draw();


    }
}
