
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bin1,bin2,bin3;
var ground;
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bin1 = new Bin(600,650,200,20);
	bin2 = new Bin(510,610,20,100);
	bin3 = new Bin(710,610,20,100);

	ground = new Ground(400,10,100,20);

	paper = new Paper
	Matter.paper.circle(200,10,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) { 
	 Matter.paper.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85}) 
	}
}


