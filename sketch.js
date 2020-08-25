const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,stand1,stand2,sling;

function setup() {
  createCanvas(900,600);
  engine = Engine.create();
  world = engine.world;
  
  polygon = Bodies.circle(50,200,20)
  World.add(world,polygon)

  sling = new SlingShot(this.polygon,{X:100,y:200})

  imageMode(CENTER)

  image = (polygon_img,polygon,polygon.position.x,polygon.position.y,30,30)

  ground = new Ground(800,500,900,20);
  stand1 = new Ground(500,200,70,20);
  stand2 = new Ground(800,400,70,20);
  sling = new SlingShot(200,400,40,20);

  block1 = new Box(448,200,40,20);
  block2 = new Box(449,200,40,20);
  block3 = new Box(450,200,40,20);
  block4 = new Box(451,200,40,20);
  block5 = new Box(448,210,40,20);
  block6 = new Box(449,210,40,20);
  block7 = new Box(450,210,40,20);
  block8 = new Box(448,220,40,20);
  block9 = new Box(449,220,40,20);
  block10 = new Box (449,230,40,20);

  
}

function draw() {
  background("grey"); 

  Engine.update(engine);

  

display()
  ground.display();
  stand1.display();
  stand2.display();
  sling.display();
  block1.display();
  polygon.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();

  drawSprites();
}

function mouseDragged(){
  if (gameState!=="launched"){
      Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
  }
}


function mouseReleased(){
  slingshot.fly();
  gameState = "launched";
}