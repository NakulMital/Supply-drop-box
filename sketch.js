var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var red1sprite, red2sprite, red3sprite;
var red1,red2,red3;
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

    red1sprite = createSprite(width/2, 655, 310, 10);
	red1sprite.shapeColor=("red")
	
	red2sprite = createSprite(250, 600, 10, 100);
	red2sprite.shapeColor=("red")
	
	red3sprite = createSprite(550, 600, 10, 100);
    red3sprite.shapeColor=("red")

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	
    red1 = Bodies.rectangle(width/2, 655, 310, 10,{isStatic:true});
	World.add(world, red1);
	
	red2 = Bodies.rectangle(250, 600, 10, 100);
    World.add(world, red2);

	red3 = Bodies.rectangle(550, 600, 10, 100);
	World.add(world, red3);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	console.log(packageBody);
	
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
    Matter.Body.setStatic(packageBody,false);
    
  }
}



