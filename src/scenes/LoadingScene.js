export default class LoadingScene extends Phaser.Scene {
  constructor() {
    super('Loading')
  }

  create() {
    this.add.text(16, 16, 'Loading...', { fontSize: '32px', fill: '#fff' });
    setTimeout(() => {
      this.scene.start('Game');
    }, 5000);
  }
}
