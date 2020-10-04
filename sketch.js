
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var dustbinObj, paperObject,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paperObject=new Paper(400,450,70);
	groundObject=new Ground(width/2,690,width,20);
	dustbinObj=new Dustbin(1300,670);
	
	

	
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 Engine.update(engine);
  
  
  
 paperObject.display();
  groundObject.display();
  
  dustbinObj.display();
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:80,y:-60});

    
  	}
}





