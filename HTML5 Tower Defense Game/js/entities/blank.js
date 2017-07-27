game.Blank = me.Entity.extend({
    init : function (x, y, speed, angle) {
        this._super(me.Entity, "init", [x, y, {
            image : "candyCaneBarrier",
            width : 32,
            height : 30
        }]);
        this.projectileID = 3;
        this.z = 5;
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.angle = angle;
        this.damage = 9;
        this.renderable.scale(2, 2);
        this.scaleFactor = 8;

        this.renderable.addAnimation("blankAnimation", [5], 5);
        this.renderable.setCurrentAnimation("blankAnimation");

        this.body.collisionType = me.collision.types.PROJECTILE_OBJECT;

        this.alwaysUpdate = true;
    },

    update : function (time) {
        var yUpdate = Math.sin(this.angle);
        this.pos.y -= (yUpdate * this.speed * time / 1000);
        if (yUpdate > 0 )
            this.pos.x += (Math.cos(this.angle) * this.speed * time / 1000);
        else
            this.pos.x -= (Math.cos(this.angle) * this.speed * time / 1000);

        if (Math.abs(this.pos.x - this.x) > 96 || Math.abs(this.pos.y - this.y) > 96)
            me.game.world.removeChild(this);
        //me.collision.check(this);


        return true;
    },

    onCollision : function (res, other) {
        if (other.body.collisionType === me.collision.types.ENEMY_OBJECT) {
            me.game.world.removeChild(this);
            return false;
        }
    }
});