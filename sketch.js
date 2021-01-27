
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

//create 5 var bob and rope objects


var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roofObject=new roof(width/2,height/4,width/7,20);

	bobDiameter=40;

	startBobPositionX=width/2;
	startBobPositionY=height/4+500;
	
	//create bob ojects calculating position with diameters
	
	
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});


	//create ropes attached to the roof
	
	
	
	
	
	
	
	
	
	

	/*constraint1={
		bodyA:bobObject1.body,
		bodyB:roofObject.body,
		pointB: {x:-bobDiameter*2, y:0}
	}

	constraint2={
		bodyA:bobObject2.body,
		bodyB:roofObject.body,		
		pointB: {x:-bobDiameter, y:0}
	}


	constraint3={
		bodyA:bobObject3.body,
		bodyB:roofObject.body,		
		pointB: {x:0, y:0}

	}

	constraint4={
		bodyA:bobObject4.body,
		bodyB:roofObject.body,		
		pointB: {x:bobDiameter, y:0}	

	}

	constraint5={
		bodyA:bobObject5.body,
		bodyB:roofObject.body,		
		pointB: {x:bobDiameter*2, y:0}
	}

	var pendulum1=Constraint.create(constraint1)
	var pendulum2=Constraint.create(constraint2)
	var pendulum3=Constraint.create(constraint3)
	var pendulum4=Constraint.create(constraint4)
	var pendulum5=Constraint.create(constraint5)

	World.add(world, pendulum1);
	World.add(world, pendulum2);
	World.add(world, pendulum3);
	World.add(world, pendulum4);
	World.add(world, pendulum5);
	*/
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(230);
  roofObject.display();

  //display rope and bobs
	
	
	
	
	
	
	
	
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	//apply force to right bob

  	}
}


function drawLine(constraint)
 
{
	
	bobBodyPosition=constraint.bodyA.position
	roofBodyPosition=constraint.bodyB.position

	roofBodyOffset=constraint.pointB;
	
	roofBodyX=roofBodyPosition.x+roofBodyOffset.x
	roofBodyY=roofBodyPosition.y+roofBodyOffset.y
	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
	
	
	
}






