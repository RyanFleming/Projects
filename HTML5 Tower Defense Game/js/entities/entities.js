

/**
 * a Coin entity
 */
game.CoinEntity = me.CollectableEntity.extend({
    // extending the init function is not mandatory
    // unless you need to add some extra initialization
    init: function (x, y, settings) {
        // call the parent constructor

        this._super(me.CollectableEntity, 'init', [x, y , settings]);
        this.body.setMaxVelocity(0, 0);
    },

    update : function (time) {
        //this._super(me.Sprite, "update", [time]);
        // Check game state first.
        if (game.data.enemyCount <= 0) {
            if (game.data.level == 1 || game.data.level == 2 || game.data.level == 3){
                console.log("should go to next level");
                //game.data.level += 1;
                me.state.change(me.state.READY);

            }
            if (game.data.level >= 4) {
                me.state.change(me.state.GAME_END);
            }
        }
        if (game.data.health <= 0) {
            console.log("why is this triggering")
            me.state.change(me.state.GAME_OVER);
        }
        return true;
    },
});

game.BuildEntity = me.GUI_Object.extend({
    init:function (x, y)
    {
        var settings = {}
        settings.image = "alpha";
        settings.framewidth = 32;
        settings.frameheight = 32;
        // super constructor
        this._super(me.GUI_Object, "init", [x, y, settings]);
        // define the object z order
        this.pos.z = 4;
        this.alreadyMade = false;
        this.selection = 0;
    },

    // output something in the console
    // when the object is clicked
    onClick:function (event)
    {
        console.log("clicked!");
        // do something
        if (this.alreadyMade == false) {
            if (game.data.towerSelection == 1 && game.data.gold >= 70) {
                me.game.world.addChild(me.pool.pull("turret", this.pos.x, this.pos.y))
                game.data.gold -= 70;
                this.alreadyMade = true;
                console.log(this.alreadyMade)
            }
            if (game.data.towerSelection == 2 && game.data.gold >= 70) {
                me.game.world.addChild(me.pool.pull("barricade", this.pos.x, this.pos.y))
                game.data.gold -= 70;
                this.alreadyMade = true;
                console.log(this.alreadyMade)
            }
            if (game.data.towerSelection == 3 && game.data.gold >= 100) {
                me.game.world.addChild(me.pool.pull("lightningTower", this.pos.x + 7, this.pos.y - 3))
                game.data.gold -= 100;
                this.alreadyMade = true;
                console.log(this.alreadyMade)
            }
            if (game.data.towerSelection == 4 && game.data.gold >= 125) {
                me.game.world.addChild(me.pool.pull("sprayCan", this.pos.x + 10, this.pos.y))
                game.data.gold -= 125;
                this.alreadyMade = true;
                console.log(this.alreadyMade)
            }
            ;
        }
        // don't propagate the event
        return false;
    },

    update : function (time) {
        if (me.input.isKeyPressed('left')) {
            game.data.towerSelection = 1;
        }
        if (me.input.isKeyPressed('right')) {
            game.data.towerSelection = 2;
        }
        if (me.input.isKeyPressed('up')) {
            game.data.towerSelection = 3;
        }
        if (me.input.isKeyPressed('down')) {
            game.data.towerSelection = 4;
        }
        return true;
    },
});

