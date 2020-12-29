const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function setup()
 {
	createCanvas(1350, 650);
 engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
  dustbin1 = new trash(1000,590,220,30);
  dustbin2 = new trash(900,530,20,123);
  dustbin3 = new trash(1100,530,20,123);
   ground1 = new Ground(400,600,1900,15);
   ground2 = new Ground(400,50,1900,15);
   ground3 = new Ground(50,400,15,1900);
   ground4 = new Ground(1300,400,15,1900);
  ball = new Paper(100,520,15);
  }

function draw()
 {
  rectMode(CENTER);
  background("white");
  
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();

  ball.display();
 }

function keyPressed()
{
  if(keyCode=== UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:45,y:-45});
    end();
  }
}


function end()
{
    var message = createElement('h2');
      
      message.html("You recycled properly!!!");
    
      message.position(displayWidth/2-50,displayHeight/3);
      keyPressed = null;
}




