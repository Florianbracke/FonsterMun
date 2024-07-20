import { Fonster } from '/model/fonster.js'
import { GameController } from '/controller/GameController.js'
import { GameView } from '/view/GameView.js'

document.addEventListener('DOMContentLoaded', () => {
  const fonsters = [
    new Fonster('fonster1'),
    new Fonster('fonster2'),
    new Fonster('fonster3')
  ];
  const gameController = new GameController(fonsters);
  const gameView = new GameView(fonsters);

  // Stel een fonster in als de actieve fonster (bijvoorbeeld de eerste)
  gameController.setActiveFonster(fonsters[0]);

  // Simuleer wisselen van actieve fonster na 5 seconden (voor demonstratie)
  setTimeout(() => {
    gameController.setActiveFonster(fonsters[1]);
  }, 5000);

  function gameLoop() {
    gameView.update();
    requestAnimationFrame(gameLoop);
  }

  gameLoop();
});
