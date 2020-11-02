class Paper {
    constructor (x,y,r) {
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2

        }
  
        this.body = Bodies.circle(x,y,r,options);
        //this.width=width;
        //this.height=height;
        this.r=r;
        this.image=loadImage("paper.png");
        World.add(world,this.body);
    }
    display(){
      //var pos =this.body.position;
      //ellipseMode(CENTER);
      //fill("pink");
      //stroke("pink");
      //scale(0.5);
      imageMode(CENTER);
      image(this.image,50,308,this.r);
      //ellipse(pos.x, pos.y,this.r);
    }
  }