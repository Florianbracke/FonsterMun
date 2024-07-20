// TODO
// - meer classes? Modal, ..
// - controler systeem? Classe kan enkel state bepalen ( is_moveable, is_targetable,...)


import { Game } from "/classes/game.js";

window.addEventListener("load", () => {
	const game = new Game();

	game.addFonster( 'tetten', 10,0, 100,10,10,10,10)
	game.addFonster( 'konten', 150,50, 100,10,10,10,10)


})
