class Dustbin {
    constructor (x,y,width,height) {
        var options = {
            isStatic: true
        }
  
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.image=loadImage("dustbingreen.png")
        this.height=height;
        World.add(world,this.body);
    }
    display(){
      //var pos =this.body.position;
      //rectMode(CENTER);
      //fill("white");
      //stroke("white");
      scale(1);
      //push();
      //imageMode(CENTER);
      image(this.image,300,330,this.width,this.height);
     // rect(pos.x, pos.y, this.width, this.height);
     //pop();
    }
  }