/*global game phaser game_state*/
game_state.story = function() {}

game_state.story.prototype = {

    preload: function() {
        game.load.image("play", "assets/play.png")
        game.load.image("cowboy","assets/cowboy.png")
        game.load.image("wallpaper","assets/wallpaper.png")
        game.load.spritesheet("cowboy2","assets/cowboy2.png",650,650)
           },
    create: function() {
        this.play = game.add.sprite(0,0,"wallpaper");
        this.play.scale.setTo(0.7,0.7,"wallpaper")
        //this.cowboy = game.add.sprite(-55,35,"cowboy");
         this.cowboy2 = game.add.sprite(-165,-25,"cowboy2");
         //this.cowboy2.animations.add('smoking',)
         
         
         
        this.play.scale.setTo(0.8,0.8)
         this.play = game.add.sprite(400,300,"play");
        this.play.scale.setTo(0.1,0.1)   
        this.play.inputEnabled = true;
        this.play.events.onInputDown.add(function(){
            game.state.start('main');
        }, this);
        
        // The this.score
        this.scoreText = game.add.text(16, 16,'\n\n\n\n\n\n\n\n                                                        Play' , {
            frontSize: '24px',
            fill: '#ffffff'
        })
            
            
            
            this.scoreText = game.add.text (32,32, '\n\                                                                       Hello my name is bryan \n\                                                                     and adrian we are in a war \n\                                                                       where we have to surive \n\                                                                     and kill the enemis to move \n\                                                                   press the uper the botton and \n\                                                                           left and right arrows. \n\                                                                    Have fun and see you in war!' , {
            frontSize:'24px',
            fill: '#ffffff'
        });
    
setTimeout(function(){
    game.state.start("main");
    },2000000)

    },update: function() {

    }
}

game.state.add('story', game_state.story)
game.state.start('story');
