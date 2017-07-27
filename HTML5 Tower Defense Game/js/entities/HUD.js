/**
 * a HUD container and child items
 */
game.HUD = game.HUD || {};

game.HUD.Container = me.Container.extend({
    init: function () {
        // call the constructor
        this._super(me.Container, 'init');

        // persistent across level change
        this.isPersistent = true;

        // make sure we use screen coordinates
        this.floating = true;

        // give a name
        this.name = "HUD";

        // add our child score object
        this.addChild(new game.HUD.ScoreItem(-10, -10));
    }
});

/**
 * a basic HUD item to display score
 */
game.HUD.ScoreItem = me.Renderable.extend( {
    /**
     * constructor
     */
    init : function (x, y) {
        // call the parent constructor
        // (size does not matter here)
        this._super(me.Renderable, 'init', [x, y, 10, 10]);

        // create the font object
        this.font = new me.BitmapFont(me.loader.getBinary('PressStart2P'), me.loader.getImage('PressStart2P'), 0.5);

        // font alignment to right, bottom
        this.font.textAlign = "right";
        this.font.textBaseline = "bottom";

        // local copy of the global score
        this.score = -1;
        this.gold = -1;
        this.enemyCount = -1;
        this.towerSelection = -1;
        this.level = -1;
        this.wave = -1;

    },

    /**
     * update function
     */
    update : function (dt) {
        // we don't draw anything fancy here, so just
        // return true if the score has been updated
        if (this.score != game.data.health || this.gold != game.data.gold || this.enemyCount != game.data.enemyCount || this.towerSelection != game.data.towerSelection || this.level != game.data.level || this.wave != game.data.wave) {
            this.score = game.data.health;
            this.gold = game.data.gold;
            this.enemyCount = game.data.enemyCount;
            this.towerSelection = game.data.towerSelection;
            this.level = game.data.level;
            this.wave = game.data.wave;
            return true;
        }
        return false;
    },

    /**
     * draw the score
     */
    draw : function (renderer) {
        // this.pos.x, this.pos.y are the relative position from the screen right bottom
        this.font.draw (renderer, "Health " + game.data.health, me.game.viewport.width + this.pos.x, me.game.viewport.height + this.pos.y);
        this.font.draw (renderer, "Money " + game.data.gold, me.game.viewport.width + this.pos.x, me.game.viewport.height + this.pos.y - 32);
        this.font.draw (renderer, "Enemies Left " + game.data.enemyCount, me.game.viewport.width + this.pos.x, me.game.viewport.height + this.pos.y - 64)
        if (game.data.towerSelection == 1){
            this.font.draw (renderer, "Peanut Turret Active", me.game.viewport.width + this.pos.x, me.game.viewport.height + this.pos.y - 96)
        }
        if (game.data.towerSelection == 2){
            this.font.draw (renderer, "Barricade Active", me.game.viewport.width + this.pos.x, me.game.viewport.height + this.pos.y - 96)
        }
        if (game.data.towerSelection == 3){
            this.font.draw (renderer, "Lightning Tower Active", me.game.viewport.width + this.pos.x, me.game.viewport.height + this.pos.y - 96)
        }
        if (game.data.towerSelection == 4){
            this.font.draw (renderer, "Spray Can Tower Active", me.game.viewport.width + this.pos.x, me.game.viewport.height + this.pos.y - 96)
        }
        this.font.draw (renderer, "Level - " + game.data.level, me.game.viewport.width + this.pos.x, me.game.viewport.height + this.pos.y - 128);
        this.font.draw (renderer, "Wave " + game.data.wave + " of 10", me.game.viewport.width + this.pos.x - 96, me.game.viewport.height + this.pos.y - 128);
    }
});