export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game')
  }

  create() {
    this.add.text(16, 16, 'Game Start!', { fontSize: '32px', fill: '#fff' });
  }
}
