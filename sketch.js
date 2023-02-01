
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var LeftSide;
function preload()
{
	
}

function setup() {
	createCanvas(800, 800);

	engine = Engine.create();
	world = engine.world;

	var ball_options={restitution :1}
	var ball_options={
		isStatic:false,
		resitution:0.3,
		friction:0,
		density:1.2
	}
	LeftSide.draw()


	var ball_options={restitution :1}

	
	ball= Bodies.circle(200,200,20,ball_options)
	World.add(world,ball);
  

	Engine.run(engine);
    rectMode(CENTER);
 	background(0);
   	ellipseMode(RADIUS);
}


function draw() {
	function keyPressed(){
		if (keycode=== UP_ARROW){
	  
  display();
  drawSprites();
 
  Engine.update(engine);
 LeftSide.display();

 ellipse(ball.position.x, ball.position.y, 20, 20);

function hForce(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
		}
		  
function vForce(){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.02});
		  }
	
	


  

}

	}
}

