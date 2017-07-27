game.Enemy2 = me.Entity.extend({
	init: function (x, y) {
		this._super(me.Entity, "init", [x, y, {
			image : "shopper2",
			width : 64,
			height : 64
		}]);

		this.speed = 20;
		this.x = x;
		this.y = y;
		this.health = 64;
		this.fireCodeValue = 1;
		this.damageFactor = 1;
		this.body.setCollisionMask(me.collision.types.COLLECTABLE_OBJECT | me.collision.types.PROJECTILE_OBJECT);
		this.alreadyHit = [];

		this.renderable.scale(0.7, 0.7);
		this.renderable.addAnimation("right", [143, 144, 145, 146, 147, 148, 149, 150, 151], 3);
		this.renderable.addAnimation("down", [130, 131, 132, 133, 134, 135, 136, 137, 138], 3);
		this.renderable.addAnimation("left", [117, 118, 119, 120, 121, 122, 123, 124, 125], 3);
		this.renderable.addAnimation("up", [104, 105, 106, 107, 108, 109, 110, 111, 112], 3);
		this.renderable.addAnimation("fall0", [260], 3);
		this.renderable.addAnimation("fall1", [261], 3);
		this.renderable.addAnimation("fall2", [262], 3);
		this.renderable.addAnimation("fall3", [263], 3);
		this.renderable.addAnimation("fall4", [264], 3);
		this.renderable.addAnimation("fall5", [265], 3);
		this.renderable.addAnimation("fall6", [30], 3);
		this.renderable.addAnimation("fall7", [31], 3);
		this.chooseImage(getDirection(this.x, this.y, game.data.level));

		this.number = targetArray.length;
		targetArray.push({x: this.x, y: this.y, isAlive: true});
		this.coolDown = 169;
		this.counter = this.coolDown;
		this.inside = false;
		this.maxX = 960 - this.width;
		this.maxY = 640 - this.height;
	},

	chooseImage: function (direction) {

		switch (direction){

			case 'SE':
				this.renderable.setCurrentAnimation("right");
				break;

			case 'S':
				this.renderable.setCurrentAnimation("down");
				break;

			case 'SW':
				this.renderable.setCurrentAnimation("left");
				break;

			case 'W':
				this.renderable.setCurrentAnimation("left");
				break;

			case 'NW':
				this.renderable.setCurrentAnimation("left");
				break;

			case 'N':
				this.renderable.setCurrentAnimation("up");
				break;

			case 'NE':
				this.renderable.setCurrentAnimation("right");
				break;

			default: // E
				this.renderable.setCurrentAnimation("right");
				break;


		}
	},

	update: function (dt) {
		this._super(me.Entity, "update", [dt]);
		this.counter++;

		if (this.counter > this.coolDown ){
			var direction = getDirection(this.pos.x + TILE_WIDTH / 2, this.pos.y + TILE_HEIGHT / 2, game.data.level);
			this.chooseImage(direction);
			this.damageFactor = 1;

			switch (direction){

				case 'SE':
					this.pos.x += 1.4 * this.speed * dt / 1000;
					this.pos.y += 1.4 * this.speed * dt / 1000;
					break;

				case 'S':
					this.pos.y += 2 * this.speed * dt / 1000;
					break;

				case 'SW':
					this.pos.x -= 1.4 * this.speed * dt / 1000;
					this.pos.y += 1.4 * this.speed * dt / 1000;
					break;

				case 'W':
					this.pos.x -= 2 * this.speed * dt / 1000;
					break;

				case 'NW':
					this.pos.x -= 1.4 * this.speed * dt / 1000;
					this.pos.y -= 1.4 * this.speed * dt / 1000;
					break;

				case 'N':
					this.pos.y -= 2 * this.speed * dt / 1000;
					break;

				case 'NE':
					this.pos.x += 1.4 * this.speed * dt / 1000;
					this.pos.y -= 1.4 * this.speed * dt / 1000;
					break;

				default: // E
					this.pos.x += 2 * this.speed * dt / 1000;
					break;

			}
			targetArray[this.number].x = this.pos.x + TILE_WIDTH / 2;
			targetArray[this.number].y = this.pos.y + TILE_HEIGHT / 2;
		}

		// Falling animation
		else{
			this.damageFactor = 4;
			if (this.counter > 12 * this.coolDown / 13)
				this.renderable.setCurrentAnimation("fall7");

			else if (this.counter > 11 * this.coolDown / 13)
				this.renderable.setCurrentAnimation("fall6");

			else if (this.counter > 10 * this.coolDown / 13)
				this.renderable.setCurrentAnimation("fall0");

			else if (this.counter > 9 * this.coolDown / 13)
				this.renderable.setCurrentAnimation("fall1");

			else if (this.counter > 8 * this.coolDown / 13)
				this.renderable.setCurrentAnimation("fall2");

			else if (this.counter > 7 * this.coolDown / 13)
				this.renderable.setCurrentAnimation("fall3");

			else if (this.counter > 6 * this.coolDown / 13)
				this.renderable.setCurrentAnimation("fall4");

			else if (this.counter > 5 * this.coolDown / 13)
				this.renderable.setCurrentAnimation("fall5");

			else if (this.counter > 4 * this.coolDown / 13)
				this.renderable.setCurrentAnimation("fall4");

			else if (this.counter > 3 * this.coolDown / 13)
				this.renderable.setCurrentAnimation("fall3");

			else if (this.counter > 2 * this.coolDown / 13)
				this.renderable.setCurrentAnimation("fall2");

			else if (this.counter > this.coolDown / 13)
				this.renderable.setCurrentAnimation("fall1");

		}

		//collison check
		me.collision.check(this);
		if (this.health <= 0 && this.inside == false)	{
			game.data.gold += 3;
			game.data.enemyCount -= 1;
			// remove it
			me.game.world.removeChild(this);
			// Set the target array so the turrets choose a new target.
			targetArray[this.number].isAlive = false;
			//this.body.setCollisionMask(me.collision.types.NO_OBJECT);
			this.inside = true;
		}

		this.pos.x = this.pos.x.clamp(0, this.maxX);
		this.pos.y = this.pos.y.clamp(0, this.maxY);
		return true;
	},

	onCollision : function (res, other) {


		// Collision with a tower's projectile.
		if (other.body.collisionType === me.collision.types.PROJECTILE_OBJECT){
			// other.projectileID = 0; Peanut.
			// other.projectileID = 1; Lightning.
			// other.projectileID = 2; Pepper spray.
			// other.projectileID = 3; Blank.

			// Peanut.
			if (other.projectileID == 0){
				me.audio.play("snowBallHit");
				this.health -= (other.damage * this.damageFactor);
			}

			// Pepper spray.
			else if (other.projectileID == 2){
				// If the array is empty take damage and push to the array.
				if (this.alreadyHit.length == 0){
					this.health -= (other.damage * this.damageFactor);
					this.alreadyHit.push(other.id);
				}

				// Otherwise check to see if this enemy has already been hit by this pepper spray.
				else{
					for (var i = 0; i < this.alreadyHit.length; i++){
						// Already hit.
						if (this.alreadyHit[i] === other.id){
							// Don't take away any damage.
						}
						// Not hit yet.
						else{
							this.health -= (other.damage * this.damageFactor);
							this.alreadyHit.push(other.id);
						}
					}
				}
			}

			// Blank.
			else if (other.projectileID == 3){
				me.audio.play("bonk");
				this.renderable.setCurrentAnimation("fall0");
				this.health -= other.damage;
				this.counter = 0;
			}

			// Other projectiles.
			else{
				this.health -= (other.damage * this.damageFactor);
			}
		}

		// Enemy reaches the store.
		else if (other.body.collisionType === me.collision.types.COLLECTABLE_OBJECT) {
			if (this.inside == false) {
				me.game.world.removeChild(this);
				// play a "coin collected" sound
				me.audio.play("cling");
				game.data.enemyCount -= 1;
				game.data.health -= this.fireCodeValue;
				// Set the target array so the turrets choose a new target.
				targetArray[this.number].isAlive = false;
				this.inside = true;
			}
		}
	}
});