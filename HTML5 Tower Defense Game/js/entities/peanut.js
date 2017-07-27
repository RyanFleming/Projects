game.Peanut = me.Entity.extend({
    init : function (x, y, speed, angle) {
        this._super(me.Entity, "init", [x, y, {
            image: "blueNut",
            width: 32,
            height: 32
        }]);
        this.projectileID = 0;
        this.z = 5;
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.angle = angle;
        this.damage = 7;
        this.renderable.scale(0.3, 0.3);
        var frame = ~~(Math.random() * 4);
        this.renderable.addAnimation("nut", [frame], 5);
        this.renderable.setCurrentAnimation("nut");

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


        if (Math.abs(this.pos.x - this.x) > 192 || Math.abs(this.pos.y - this.y) > 192)
            me.game.world.removeChild(this);


        return true;
    },

    onCollision : function (res, other) {
        if (other.body.collisionType === me.collision.types.ENEMY_OBJECT) {
            me.game.world.removeChild(this);
            return false;
        }
    }
});