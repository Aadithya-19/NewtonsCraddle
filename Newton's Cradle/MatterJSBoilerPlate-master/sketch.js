var Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	var canvas = createCanvas(800, 700);

	engine = Engine.create();
  world = engine.world;
  
	Roof = new roof(400,300,500,20);

  bobObj1 = new bob(300,600,100);
  bobObj2 = new bob(350,600,20);
  bobObj3 = new bob(400,600,20);
  bobObj4 = new bob(450,600,20);
  bobObj5 = new bob(450,600,20);
  bobObj5 = new bob(500,600,20);




  rope1 = new rope(bobObj1, Roof.body, -50*2,0);
  rope2 = new rope(bobObj2, Roof.body, -25*2,0);
  rope3 = new rope(bobObj3, Roof.body, 0*2,0);
  rope4 = new rope(bobObj4, Roof.body, 25*2,0);
  rope5 = new rope(bobObj5, Roof.body, 50*2,0);
   

	Engine.run(engine);
}

function draw() {

  rectMode(CENTER);
  background(255);

  ellipseMode(RADIUS);
  ellipse(bobObj1.position.x,bobObj1.position.y+25,25,25);
  ellipse(bobObj2.position.x,bobObj2.position.y+25,25,25);
  ellipse(bobObj3.position.x,bobObj3.position.y+25,25,25);
  ellipse(bobObj4.position.x,bobObj4.position.y+25,25,25);
  ellipse(bobObj5.position.x,bobObj5.position.y+25,25,25);
  
  Roof.display();

  bobObj1.display();
  bobObj2.display();
  bobObj3.display();
  bobObj4.display();
  bobObj5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

   drawSprites();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Body.applyForce(bobObj1,bobObj1.position,{x:10, y:-10});

  }
}