

/* game namespace */
var game = {
    /**
     * an object where to store game global data
     */
    data: {
        health: 20,
        gold: 0,
        enemyCount: 0,
        level: 1,
        towerSelection: 1,
        wave: 0
    },

    // Run on page load.
    onload: function () {
        // Initialize the video.
        if (!me.video.init(960, 640, {wrapper: "screen", scale: "auto", scaleMethod: "flex-width"})) {
            alert("Your browser does not support HTML5 canvas.");
            return;
        }

        // add "#debug" to the URL to enable the debug Panel
        if (me.game.HASH.debug === true) {
            window.onReady(function () {
                me.plugin.register.defer(this, me.debug.Panel, "debug", me.input.KEY.V);
            });
        }

        // initialize the "audio"
        me.audio.init("mp3,ogg");

        // Set a callback to run when loading is complete.
        me.loader.onload = this.loaded.bind(this);

        // Load the resources.
        me.loader.preload(game.resources);

        // Initialize melonJS and display a loading screen.
        me.state.change(me.state.LOADING);
    },

    /*
     * callback when everything is loaded
     */
    loaded : function () {
        // set the "Play/Ingame" Screen Object
        me.state.set(me.state.MENU, new game.TitleScreen());

        // set the "Play/Ingame" Screen Object
        me.state.set(me.state.PLAY, new game.PlayScreen());

        me.state.set(me.state.READY, new game.ReadyScreen());

        //set the loss screen
        me.state.set(me.state.GAME_OVER, new game.LossScreen());

        //set the credits screen
        me.state.set(me.state.GAME_END, new game.WinScreen());

        // set a global fading transition for the screen
        me.state.transition("fade", "#FFFFFF", 250);


        me.pool.register("CoinEntity", game.CoinEntity);
        // register our player entity in the object pool
        me.pool.register("Enemy", game.Enemy);
        me.pool.register("Enemy2", game.Enemy2);
        me.pool.register("Enemy3", game.Enemy3);
        me.pool.register("Enemy4", game.Enemy4);

        me.pool.register("peanut", game.Peanut);
        me.pool.register("lightning", game.Lightning);
        me.pool.register("pepperSpray", game.PepperSpray);
        me.pool.register("blank", game.Blank);

        me.pool.register("BuildEntity", game.BuildEntity);
        me.pool.register("turret", game.Turret);
        me.pool.register("lightningTower", game.LightningTower);
        me.pool.register("sprayCan", game.SprayCan);
        me.pool.register("barricade", game.Barricade);

        me.event.subscribe(me.event.KEYDOWN, function (action, keyCode /*, edge */) {

            // toggle fullscreen on/off
            if (keyCode === me.input.KEY.F) {
                if (!me.device.isFullscreen) {
                    me.device.requestFullscreen();
                } else {
                    me.device.exitFullscreen();
                }
            }
        });

        // display the menu title
        me.state.change(me.state.MENU);
    }
};


//turns off gravity
me.sys.gravity = 0;
//turn off pause on blur
//me.sys.pauseOnBlur = false;