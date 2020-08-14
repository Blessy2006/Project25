class Paper {
    constructor(x,y,r) {
      var options = {
          isStatic: false,
          restitution:0.3,
          friction:0.5,
          density:1.2
      
      }
      this.x = x;
      this.y = y;
      this.r = 70;
      this.body = Bodies.circle(x,y,r/2,options);
      this.image = loadImage("paper.png");
      World.add(world, this.body);
     
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      fill("pink");
      image(this.image,pos.x, pos.y, this.r, this.r);
    }
  };