var targetArray = [];

game.PlayScreen = me.ScreenObject.extend({
    /**
     * action to perform on state change
     */
    onResetEvent : function () {
        // play the audio track
        // register on the 'pointerdown' event


        if (game.data.level == 1) {
            me.audio.playTrack("gameMusic");
            // load a level
            me.levelDirector.loadLevel("mall_clone");

            // reset the score
            game.data.health = 20;
            game.data.gold = 265;
            game.data.enemyCount = 74;
            game.data.wave = 0;
            console.log("level 1 loaded");
            console.log(game.data.level);
            targetArray = [];
            enemyManager();

        }

        if (game.data.level == 2) {
            me.audio.playTrack("gameMusic_2");
            // load a level
            me.levelDirector.loadLevel("bullseye_clone");

            // reset the score
            game.data.health = 20;
            game.data.gold = 220;
            game.data.enemyCount = 214;
            game.data.wave = 0;
            console.log("level 2 loaded");
            console.log(game.data.level);
            targetArray = [];
            enemyManager2();

        }

        if (game.data.level == 3) {
            me.audio.playTrack("gameMusic");
            // load a level
            me.levelDirector.loadLevel("best_buy_clone");

            // reset the score
            game.data.health = 20;
            game.data.gold = 300;
            game.data.enemyCount = 272;
            game.data.wave = 0;
            console.log("level 3 loaded");
            console.log(game.data.level);
            targetArray = [];
            enemyManager3();

        }

        if (game.data.level == 4) {
            me.audio.playTrack("gameMusic_2");
            // load a level
            me.levelDirector.loadLevel("floor_mart_clone");

            // reset the score
            game.data.health = 20;
            game.data.gold = 680;
            game.data.enemyCount = 207;
            game.data.wave = 0;
            console.log("level 4 loaded");
            console.log(game.data.level);
            targetArray = [];
            enemyManager4();

        }

        // add our HUD to the game world
        this.HUD = new game.HUD.Container();
        me.game.world.addChild(this.HUD);
        me.input.bindKey(me.input.KEY.LEFT,  "left");
        me.input.bindKey(me.input.KEY.RIGHT,  "right");
        me.input.bindKey(me.input.KEY.DOWN,  "down");
        me.input.bindKey(me.input.KEY.UP,  "up");

        me.input.bindKey(me.input.KEY.NUM1, "left");
        me.input.bindKey(me.input.KEY.NUM2, "up");
        me.input.bindKey(me.input.KEY.NUM3, "down");
        me.input.bindKey(me.input.KEY.NUM4, "right");

    },

    /**
     * action to perform when leaving this screen (state change)
     */
    onDestroyEvent : function () {
        enemyManagerStop();


        // remove the HUD from the game world
        me.game.world.removeChild(this.HUD);
        // stop the current audio track
        me.audio.stopTrack();
        targetArray = [];
        if (game.data.health > 0) {
            game.data.level += 1;
        }
        me.input.unbindKey(me.input.KEY.LEFT);
        me.input.unbindKey(me.input.KEY.RIGHT);
        me.input.unbindKey(me.input.KEY.DOWN);
        me.input.unbindKey(me.input.KEY.UP);

        me.input.unbindKey(me.input.KEY.NUM1);
        me.input.unbindKey(me.input.KEY.NUM2);
        me.input.unbindKey(me.input.KEY.NUM3);
        me.input.unbindKey(me.input.KEY.NUM4);
    },

});
