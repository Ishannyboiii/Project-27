const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rubber;
var hammer;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	World = engine.world;

	//Create the Bodies Here.
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	rubber= new Rubber();
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  rubber.display();


  drawSprites();
 
}



