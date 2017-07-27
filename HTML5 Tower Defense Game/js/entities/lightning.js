game.Lightning = me.Entity.extend({
    init : function (x, y, speed, angle) {
        this._super(me.Entity, "init", [x, y, {
            image: "lightning",
            width: 32,
            height: 32
        }]);
        this.projectileID = 1;
        this.z = 5;
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.angle = angle;
        this.damage = 40;
        this.renderable.scale(2, 2);
        this.scaleFactor = 8;
        //var frame = ~~(Math.random() * 5);
        //this.renderable.addAnimation("lightning", [frame], 5);
        //this.renderable.setCurrentAnimation("lightning");

        this.renderable.addAnimation("zero", [0], 5);
        this.renderable.addAnimation("one", [1], 5);
        this.renderable.addAnimation("two", [2], 5);
        this.renderable.addAnimation("three", [3], 5);
        this.renderable.addAnimation("four", [4], 5);
        this.renderable.setCurrentAnimation("zero");
        this.counter = 0;

        this.body.collisionType = me.collision.types.PROJECTILE_OBJECT;

        this.alwaysUpdate = true;
    },

    update : function (time) {
        this.counter++;
        if (this.counter > 4 * this.scaleFactor)
            this.renderable.setCurrentAnimation("four");
        else if (this.counter > 3 * this.scaleFactor)
            this.renderable.setCurrentAnimation("three");
        else if (this.counter > 2 * this.scaleFactor)
            this.renderable.setCurrentAnimation("two");
        else if (this.counter > this.scaleFactor)
            this.renderable.setCurrentAnimation("one");
        else
            this.renderable.setCurrentAnimation("zero");

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
