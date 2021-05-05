const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1, ground2 ,ground3 ,ground4, ground5, ground6;
var ground7, ground8, ground9;
var striker, launcher;
var score = 0;

function setup(){
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;

  Engine.run(engine)

  ground1 = new Ground(600,590,1200,20);
  ground2 = new Ground(10,580,20,1200);
  ground3 = new Ground(1190,580,20,1200);
  ground4 = new Ground(600,10,1200,20);
  ground5 = new Ground(450,260,320,20);
  ground6 = new Ground(860,410,320,20);
  ground7 = new Ground(710,500,20,160);
  ground8 = new Ground(950,230,220,20);
  ground9 = new Ground(850,170,20,100);

  striker = new Striker(150,200,60,60);

  launcher = new Slingshot(striker.body,{x:150, y:300});
//First Tower
  ball1 = new Ball(480,50,30,30);
  ball2 = new Ball(480,80,30,30);
  ball3 = new Ball(480,110,30,30);
  ball4 = new Ball(480,140,30,30);
  ball5 = new Ball(480,170,30,30);
  ball6 = new Ball(480,200,30,30);
  ball7 = new Ball(480,230,30,30);

  ball8 = new Ball(430,230,30,30);
  ball9 = new Ball(430,200 ,30,30);
  ball10 = new Ball(430,170,30,30);
  ball11 = new Ball(430,140,30,30);
  ball12 = new Ball(430,110,30,30);
  ball13 = new Ball(430,80,30,30);

  ball14 = new Ball(380,230,30,30);
  ball15 = new Ball(380,200,30,30);
  ball16 = new Ball(380,170,30,30);
  ball17 = new Ball(380,140,30,30);
  ball18 = new Ball(380,110,30,30);
//Second Tower

  ball19 = new Ball(930,570,30,30);
  ball20 = new Ball(930,540,30,30);
  ball21 = new Ball(930,510,30,30);
  ball22 = new Ball(930,480,30,30);

  ball23 = new Ball(880,470,30,30);
  ball24 = new Ball(880,440,30,30);
  ball25 = new Ball(880,410,30,30);

  ball26 = new Ball(830,570,30,30);
  ball27 = new Ball(830,540,30,30);

  ball28 = new Ball(780,410,30,30);
//Third Tower

ball29 = new Ball(900,200,30,30);
ball30 = new Ball(900,170,30,30);
ball31 = new Ball(900,140,30,30);
ball32 = new Ball(900,110,30,30);

ball33 = new Ball(970,200,30,30);
ball34 = new Ball(970,170,30,30);
ball35 = new Ball(970,140,30,30);
ball36 = new Ball(970,110,30,30);

ball37 = new Ball(1030,200,30,30);
ball38 = new Ball(1030,170,30,30);
ball39 = new Ball(1030,140,30,30);
ball40 = new Ball(1030,110,30,30);
}

function draw() {
  background("green");
  fill("white");
  textSize(20);
  text("Press SPACE for reseting",60,70);
  noStroke();
  textSize(35);
  fill("white");
  text("Score  " + score, width-300, 50);

    ground1.display();
    ground2.display();
    ground3.display();
    ground4.display();
    ground5.display();
    ground6.display();
    ground7.display();
    ground8.display();
    ground9.display();

    ball1.display(); 
    ball2.display(); 
    ball3.display(); 
    ball4.display(); 
    ball5.display(); 
    ball6.display(); 
    ball7.display();
    ball8.display();
    ball9.display(); 
    ball10.display();
    ball11.display();
    ball12.display();
    ball13.display();
    ball14.display();
    ball15.display();
    ball16.display();
    ball17.display();
    ball18.display();
    ball19.display();
    ball20.display();
    ball21.display();
    ball22.display();
    ball23.display();
    ball24.display();
    ball25.display();
    ball26.display();
    ball27.display();
    ball28.display();

    ball29.display();
    ball30.display();
    ball31.display();
    ball32.display();
    ball33.display();
    ball34.display();
    ball35.display();
    ball36.display();
    ball37.display();
    ball38.display();
    ball39.display();
    ball40.display();

    ball29.score();
    ball30.score();
    ball31.score();
    ball32.score();
    ball33.score();
    ball34.score();
    ball35.score();
    ball36.score();
    ball37.score();
    ball38.score();
    ball39.score();
    ball40.score();

    striker.display();

      launcher.display();
    }

    function mouseDragged(){
      Matter.Body.setPosition(striker.body,{x: mouseX, y: mouseY});
    }

    function mouseReleased(){
      launcher.fly();
    }

    function keyPressed(){
      if(keyCode === 32){
        Matter.Body.setPosition(striker.body,{x:150, y:200});
        launcher.attach(striker.body);
    }
    }