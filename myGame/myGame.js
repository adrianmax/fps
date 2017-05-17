/*global Phaser*/

// STEP FOR PERSON POPPING UP//
/*
1) Replace the crosshairs
2) Add all enemies
        this.man = game.add.sprite(227,227,"man")
        this.man.scale.setTo(0.2,0.2)
        
3) Create a new key to press
    save in variable, use keyboard addKey
4) if key is pressed, check for overlap between crosshairs and each enemy 
5) .kill() if overlapped

*/


var game = new Phaser.Game(960, 585, Phaser.AUTO, '');
var game_state = {}

game_state.main = function() {};
game_state.main.prototype = {

    preload: function() {
        game.load.image('rectical', 'assets/rectical.png');
        game.load.image('weapon', 'assets/weapon.png');
        game.load.image('background','assets/CO3.jpg');
        game.load.image('man', 'assets/man.png');
        game.load.image('man1','assets/man1.png');
        game.load.image('man2','assets/man2.png');
        game.load.image('man3','assets/man3.png');
        game.load.image('man4','assets/man4.png');
        game.load.image('man5','assets/man5.png');
      //game.load.spritesheet('','assets/', 64, 64);
      
    },

    create: function() {
        //we are going to be using physics, so enable the arcade physics system
        game.physics.startSystem(Phaser.Physics.ARCADE);

        // game.stage.background;
        this.CO3 = game.add.sprite(0,0,"background");
        this.CO3.scale.setTo(0.5,0.5)
        
        this.rectical = game.add.sprite(400,220,"rectical");
        game.physics.arcade.enable(this.rectical);
        this.rectical.scale.setTo(0.2,0.2)
        
        this.weapon = game.add.sprite(400,340,"weapon");
        game.physics.arcade.enable(this.weapon);
        this.weapon.scale.setTo(0.55,0.55)
        
        this.man = game.add.sprite(227,227,"man")
        this.man.scale.setTo(0.2,0.2)
        
        //this.man1 = game.add.sprite()
        //this.man1.scale.setTo()
        
        //this.man2 = game.add.sprite()
        //this.man2.scale.setTo()
        
        //this.man3 = game.add.sprite()
        //this.man3.scale.setTo()
        
        //this.man4 = game.add.sprite()
        //this.man4.scale.setTo()
        
        //this.man5 = game.add.sprite()
        //this.man5.scale.setTo()
         this.cursors = game.input.keyboard.createCursorKeys();        
        

    },

    update: function() {
        this.rectical.body.velocity.x = 0;
                this.rectical.body.velocity.y = 0;
            this.weapon.body.velocity.x=0
        
         if (this.cursors.left.isDown) { // move to the left
            this.rectical.body.velocity.x = -150
            this.weapon.body.velocity.x=-50
            
        }
        else if (this.cursors.right.isDown) {
            this.rectical.body.velocity.x = 150;
            this.weapon.body.velocity.x=50
        }
        
        if(this.cursors.up.isDown){
            this.rectical.body.velocity.y=-100
        }
        else if(this.cursors.down.isDown){
            this.rectical.body.velocity.y=100

        }
        else{
            
        }
        
        /*
        
        if(whateverkey .isDown){
            check for a overlap between each enemy and receptical
        }
        */
        

    },

}
game.state.add('main', game_state.main);
// game.state.start('main');
