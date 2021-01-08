
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var log1, log2, log3, log4, log5, log6;
var ball1, ball2, ball3, ball4, ball5;

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	log1 = createSprite(700, 200, 300, 15);
	log1.shapeColor = "gray";

	log2 = createSprite(700, 300, 3, 200);
	log2.shapeColor = "black";

	log3 = createSprite(620, 300, 3, 200);
	log3.shapeColor = "black";

	log4 = createSprite(780, 300, 3, 200);
	log4.shapeColor = "black";

	log5 = createSprite(850, 300, 3, 200);
	log5.shapeColor = "black";

	log6 = createSprite(550, 300, 3, 200);
	log6.shapeColor = "black";

	ball1 = createSprite(850, 400, 30, 30);
	ball1.shapeColor = "pink";

	ball2 = createSprite(780, 400, 30, 30);
	ball2.shapeColor = "pink";

	ball3 = createSprite(620, 400, 30, 30);
	ball3.shapeColor = "pink";

	ball4 = createSprite(700, 400, 30, 30);
	ball4.shapeColor = "pink";

	ball5 = createSprite(550, 400, 30, 30);
	ball5.shapeColor = "pink";








	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  drawSprites();

  chain.display();
 
}



