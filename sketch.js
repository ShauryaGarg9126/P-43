var hr, mn, sc;
var hrAngle, mnAngle, scAngle; 

function setup()
{
  createCanvas(400,400);
  
  //change the angle mode to degrees 
  angleMode(DEGREES);   

}

function draw()
{
  background("black");
  translate(200,200);

  //Calculating time using predefined func from p5.js
  hr = hour();
  mn = minute();
  sc = second();

  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle =  map(mn,0,60,0,360);
  hrAngle = map(hr%12, 0,12,0,360);

  //drawing seconds hand 
  push();
  rotate(scAngle); //rotate the hand based on angle calculated
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  //drawing minute hands 
  push();
  rotate(mnAngle); //rotate the hand based on angle calculated
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,75,0);
  pop();

  //drawing hour hands 
  push();
  rotate(hrAngle); //rotate the hand based on angle calculated
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,50,0);
  pop();

  //drawing the arcs 
  noFill();
  //Seconds
  stroke(255,0,0);
  arc(0,0,300,300,0,scAngle);
  //Minutes
  stroke(0,255,0);
  arc(0,0,280,280,0,mnAngle);
  //Hour
  stroke(0,0,255);
  arc(0,0,260,260,0,hrAngle);

}