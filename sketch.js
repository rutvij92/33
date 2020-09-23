
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var ground;
var divisions=[];
var particles=[];
var plinkos=[];
var divisionheight=300;
var score=0;
var count=0;
var gameState="play";

function setup() {
	createCanvas(480, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	ground= new Ground(240,800,480,20);
	for (var k=0;k<=width;k=k+80){
		divisions.push(new Divisions(k,height-divisionheight/2,10,divisionheight))
	}

	Engine.run(engine);

	
for(var j=40;j<=width;j=j+50){

	plinkos.push(new Plinko(j,75));
}

for(var j=15;j<=width-10;j=j+50){

	plinkos.push(new Plinko(j,175));
}

for(var j=40;j<=width;j=j+50){

	plinkos.push(new Plinko(j,275));
}	

for(var j=15;j<=width-10;j=j+50){

	plinkos.push(new Plinko(j,375));
}


}



  



function draw() {
  rectMode(CENTER);
  background(0);
  


  for (var k = 0; k < divisions.length; k++) {
	  divisions[k].display();
 }

 for (var i = 0; i < plinkos.length; i++) {
	  plinkos[i].display();
	 }

	





 ground.display();

 noStroke();
 textSize(35)
 fill("white")
 text("Score:  " + score, width-450, 50)

}

function mousePressed(){
	if(gameState!="end"){
		count++;
		particle=new Particle(mouseX,10,10,10)
	}
	
	}