game.WinScreen = me.ScreenObject.extend({
    /**
     * action to perform on state change
     */
    onResetEvent : function () {
        //play selection music
        me.audio.playTrack("endCreditMusic");

        // title screen
        var backgroundImage = new me.Sprite(0, 0, {
                image: me.loader.getImage('victoryScreen'),
            }
        );

        // position and scale to fit with the viewport size
        backgroundImage.anchorPoint.set(0, 0);
        backgroundImage.scale(me.game.viewport.width / backgroundImage.width, me.game.viewport.height / backgroundImage.height);

        // add to the world container
        me.game.world.addChild(backgroundImage, 1);

        // add a new renderable component with the scrolling text
        me.game.world.addChild(new (me.Renderable.extend ({
            // constructor
            init : function () {
                this._super(me.Renderable, 'init', [0, 0, me.game.viewport.width, me.game.viewport.height]);

                // font for the scrolling text
                this.font = new me.BitmapFont(me.loader.getBinary('PressStart2P'), me.loader.getImage('PressStart2P'));

                // a tween to animate the arrow
                this.scrollertween = new me.Tween(this).to({scrollerpos: -2200 }, 10000).onComplete(this.scrollover.bind(this)).start();

                this.scroller = "THIS IS THE WIN SCREEN THIS IS THE WIN SCREEN THIS IS THE WIN SCREEN";
                this.scrollerpos = 600;
            },

            // some callback for the tween objects
            scrollover : function () {
                // reset to default value
                this.scrollerpos = 640;
                this.scrollertween.to({scrollerpos: -2200 }, 10000).onComplete(this.scrollover.bind(this)).start();
            },

            update : function (dt) {
                return true;
            },

            draw : function (renderer) {
                this.font.draw(renderer, "CONGRATS YOU WON", 20, 240);
                this.font.draw(renderer, this.scroller, this.scrollerpos, 440);
            },
            onDestroyEvent : function () {
                //just in case
                this.scrollertween.stop();
                me.audio.stopTrack();
            }
        })), 2);


    },

    /**
     * action to perform when leaving this screen (state change)
     */
    onDestroyEvent : function () {

    }
});