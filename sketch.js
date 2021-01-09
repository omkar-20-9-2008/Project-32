const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,stand1,stand2;
var shooter;
var block1,block2,block3,block4,block5,block6,block7,block8;
var block9,block10,block11,block12,block13,block14,block15,block16;
var block01,block02,block03,block04,block05,block06,block07,block08,block09;
var polygon_img;
var slingshot;
var score = 0;

function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,500);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground(450,480,900,20);

  shooter = Bodies.circle(150,300,20);
  World.add(world,shooter);

  stand1 = new Ground(455,390,230,12);
  stand2 = new Ground(700,250,170,12);

  //1.4th SET
  block1 = new Block(365,359,30,40);
  block2 = new Block(395,369,30,40);
  block3 = new Block(425,369,30,40);
  block4 = new Block(455,369,30,40);
  block5 = new Block(485,369,30,40);
  block6 = new Block(515,369,30,40);
  block7 = new Block(545,369,30,40);



  //1.3rd SET
  block8 = new Block(395,309,30,40);
  block9 = new Block(425,309,30,40);
  block10 = new Block(455,309,30,40);
  block11 = new Block(485,309,30,40);
  block12 = new Block(515,309,30,40);



  //1.2nd SET
  block13 = new Block(425,269,30,40);
  block14 = new Block(455,269,30,40);
  block15 = new Block(485,269,30,40);

  //1.1st SET
  block16 = new Block(455,229,30,40);

  //2.3rd SET
  block01 = new Block(640,224,30,40);
  block02 = new Block(670,224,30,40);
  block03 = new Block(700,224,30,40);
  block04 = new Block(730,224,30,40);
  block05 = new Block(760,224,30,40);

  //2.2nd SET
  block06 = new Block(670,184,30,40);
  block07 = new Block(700,184,30,40);
  block08 = new Block(730,184,30,40);

  //2.1st SET
  block09 = new Block(700,144,30,40);

  slingshot = new Slingshot(this.shooter,{x:150,y:300});
}
function draw() {
  background(0);
  
  textSize(25);
  fill(255);
  text("SCORE :"+score, 750, 40);
 
  //Engine.update(engine);
  //text(mouseX + ',' + mouseY, 10, 15);
  strokeWeight(2);
  stroke(15);

  getBackgroundImage();
  
  ground.display();
  stand1.display();
  stand2.display();
  fill("red");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  fill(0,255,0);
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  fill(255,0,127)
  block13.display();
  block14.display();
  block15.display();

  fill(0,255,255)
  block16.display(); 

  // SECOND SET

  fill(0,255,255)
  block01.display();
  block02.display();
  block03.display();
  block04.display();
  block05.display();

  fill(255,0,127)
  block06.display();
  block07.display();
  block08.display(); 

  fill(0,255,0);
  block09.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();

  block01.score();
  block02.score();
  block03.score();
  block04.score();
  block05.score();
  block06.score();
  block07.score();
  block08.score();
  block09.score();
  
  imageMode(CENTER)
  image(polygon_img ,shooter.position.x,shooter.position.y,40,40);

  slingshot.display();

} 



function mouseDragged(){
  Matter.Body.setPosition( shooter,{x:mouseX,y:mouseY});
}

function keyPressed(){
  if(keyCode === 32){
    slingshot.attach(shooter);
  }
}

function mouseReleased(){
  slingshot.fly();
}

async function getBackgroundImage(){
  var response = await fetch("http://worldclockapi.com/api/json/est/now");
  var reponseJSON = await response.json();
 
  var datetime = reponseJSON.datetime;
  var hour = datetime.slice(11,13);
 
  if(hour>=6 && hour<=18){
     background(rgb(0,0,102))
     
  } else {
    background(rgb(0,255,255));
  }
 
 }