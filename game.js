var config = {
    type: Phaser.AUTO,
    width: 598,
    height: 587,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: [
        SceneMainMenu,
        SceneMain,
        SceneGameOver
    ],
    pixelArt: true,
};

var game = new Phaser.Game(config);




