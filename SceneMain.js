var platforms;
var cursors;
var bullet;
var player;

class SceneMain extends Phaser.Scene {
    constructor() {
      super({ key: "SceneMain" });
    }

    preload (){
        this.load.image('brick', 'assets/brick.png');
        this.load.image('steel', 'assets/steel.png');
        this.load.image('crown', 'assets/crown.png');
        this.load.image('bullet_up', 'assets/bullet_up.png');
        this.load.image('bullet_down', 'assets/bullet_down.png');
        this.load.image('bullet_left', 'assets/bullet_left.png');
        this.load.image('bullet_right', 'assets/bullet_right.png');
        this.load.spritesheet('tank', './assets/ada.png', { frameWidth: 36, frameHeight: 36 })
    }

    

    create (){
        platforms = this.physics.add.staticGroup();
    
        this.create_map();

        // tank configuration 
        player = this.physics.add.sprite(100, 450, 'tank');
        player.setCollideWorldBounds(true);

        this.anims.create({
            key: 'left',
            frames: [ { key: 'tank', frame: 0 } ],
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'up',
            frames: [ { key: 'tank', frame: 1 } ],
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'down',
            frames: [ { key: 'tank', frame: 2 } ],
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'right',
            frames: [ { key: 'tank', frame: 3 } ],
            frameRate: 10,
            repeat: -1
        });

        cursors = this.input.keyboard.createCursorKeys();
        this.physics.add.collider(player, platforms);

    }

    update (){
        // tank movement
        if (cursors.left.isDown)
        {
            player.setVelocityX(-100);

            player.anims.play('left', true);
        }
        else if (cursors.right.isDown)
        {
            player.setVelocityX(100);

            player.anims.play('right', true);
        }
        else if (cursors.up.isDown)
        {
            player.setVelocityY(-100);

            player.anims.play('up', true);
        }
        else if (cursors.down.isDown)
        {
            player.setVelocityY(100);

            player.anims.play('down', true);
        }
        else
        {
            player.setVelocityX(0);
            player.setVelocityY(0);

        }

        // tank fires
        if (cursors.space.isDown){
            fireBullet();
        }

    }

    create_map (){
        var i, j;
        
        //row 1-6, column 1-6
        for (i = 69; i <= 229; i = i + 40)
        { 
            for (j = 69; j <= 253; j= j + 92)
            {
                if (j > 161 && i > 189)
                {
                    break;
                }
                platforms.create(j, i, 'brick');
            }
        }

        // row 7, column 6
        platforms.create(253, 269, 'brick');

        // row 8, column 1-6
        platforms.create(23, 309, 'steel');
        platforms.create(115, 309, 'brick');
        platforms.create(161, 309, 'brick');

        // row 9, column 6
        platforms.create(253, 349, 'brick');

        // row 10-14, column 1-6
        for (i = 389; i <= 509; i = i + 40)
        {
            for (j = 69; j <= 253; j = j + 92)
            {
                if (j > 161 && i > 429)
                {
                    break;
                }
                platforms.create(j, i, 'brick');
            }
        }

        platforms.create(299, 160, 'steel');

        // row 1-6, column 8-13
        for (i = 69; i <= 229; i = i + 40)
        {
            for (j = 529; j >= 345; j = j - 92)
            {
                if (j < 437 && i > 189)
                {
                    break;
                }
                platforms.create(j, i, 'brick');
            }
        }

        // row 7, column 8
        platforms.create(345, 269, 'brick');
        // row 8, column 8-13
        platforms.create(575, 309, 'steel');
        platforms.create(483, 309, 'brick');
        platforms.create(437, 309, 'brick');

        // row 9, column 6
        platforms.create(345, 349, 'brick');

        // row 10-14, column 8-13
        for (i = 389; i <= 509; i = i + 40)
        {
            for (j = 529; j >= 345; j = j - 92)
            {
                if (j < 437 && i > 429)
                {
                    break;
                }
                platforms.create(j, i, 'brick');
            }
        }

        platforms.create(299, 369, 'brick');

        platforms.create(276, 537, 'brick');
        platforms.create(322, 537, 'brick');
        platforms.create(276, 567, 'brick');
        platforms.create(322, 567, 'brick');
        platforms.create(299, 560, 'crown');
    }
}