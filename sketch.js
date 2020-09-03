var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var sideL,sideR,bottom;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	
	sideL = createSprite(250,620,20,100);
	sideL.shapeColor = "red";
	

	sideR = createSprite(450,620,20,100);
	sideR.shapeColor = "red";
	

	bottom = createSprite(350,660,200,20);
	bottom.shapeColor = "red";
	


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);

	sideRBody = Bodies.rectangle(width/2 , 200 , 5 , {isStatic:true});
	World.add(world,sideRBody);

	sideLBody = Bodies.rectangle(width/2 , 200 , 5 , {isStatic:true});
	World.add(world,sideLBody);

	bottomBody = Bodies.rectangle(width/2 , 200 , 5 , {isStatic:true});
	World.add(world,bottomBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody, false);

  }
}



