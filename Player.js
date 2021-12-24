class Player
{
    constructor() {
		this.x = 99;
		this.y=200;
		this.spt=createSprite(this.x,this.y, 100,50);
        this.spt.addAnimation("lion",lionAnimation);
		this.spt.addAnimation("horse",horseAnimation);
		this.spt.addAnimation("wolf",wolfAnimation);
		this.spt.addAnimation("cat",catAnimation);
		this.spt.scale=0.9;
		this.spt.setCollider("rectangle",0,0,90,30);
		this.spt.collide(platform);
	}

}