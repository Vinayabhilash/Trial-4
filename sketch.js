const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ground1;
var divisionHeight = 300;
var division1, division2;
var division3, division4;
var division5, division6;
var division7;

var plinkos = [];

function setup() {
  createCanvas(480, 800);
  engine = Engine.create();
  world = engine.world;

  
  ground1 = new Ground(240, 780, 480, 20);
  division1 = new Division(10, 600, 10, 380);
  division2 = new Division(90, 600, 10, 380);
  division3 = new Division(170, 600, 10, 380);
  division4 = new Division(250, 600, 10, 380);
  division5 = new Division(330, 600, 10, 380);
  division6 = new Division(410, 600, 10, 380);
  division7 = new Division(470, 600, 10, 380);
  for(var j = 40; j<= width; j = j+50){
    plinkos.push(new Plinko(j, 75));
  }
for(var j = 15; j<= 10; j = j+50){
    plinkos.push(new Plinko(j, 175));
  }


}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();
  ground1.display();
  
  drawSprites();
}