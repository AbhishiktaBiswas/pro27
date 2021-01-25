
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof ;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(650,100,400,40);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");
  
  roof.display();
 
}



