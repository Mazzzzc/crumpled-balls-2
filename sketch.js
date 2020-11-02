
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var paper, paperImage;
var bin1, bin2, bin3, binImage;

function preload(){
	//binImage=loadImage("dustbingreen.png")
	//paperImage=loadImage("paper.png")
}

function setup() {
	var canvas = createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	//Engine.run(engine);

	//ground = new Ground(400,650,30,800);

	paper = new Paper(50,379,150);

	ground = new Ground(200,380,400,10);

	bin1 = new Dustbin(400,369,80,90);
	bin2 = new Dustbin(330,343,80,90);
	bin3 = new Dustbin(260,343,80,90);
}
  



function draw() {
  //rectMode(CENTER);
  //background(0);
//drawSprites();
  //ground.display();

  //paper.display();

 // drawSprites();

 	background(200);
	Engine.update(engine);
	
	//drawSprites();

    //box1.display();
    //box2.display();
	ground.display();

	paper.display();
	
	bin1.display();
	bin2.display();
	bin3.display();

	//drawSprites();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   
		Matter.Body.applyForce(paper.body,paper.body.position,{x:40,y:-40});
	   
	 }
   }



