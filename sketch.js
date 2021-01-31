var hr,min,sec;
var hrAngle,miAngle,scAngle;

function setup() {
  createCanvas(1000,800);
  angleMode(DEGREES);

}

function draw() {
  background(0);  

  textSize(25);
  fill(225)
  text("12",385,175)
  text("6",391,650)
  text("9",150,410)
  text("3",635,410)
  
  hr = hour();
  min = minute();
  sec = second();
  
  //console.log(hr,min,sec);
  translate(400,400)
  rotate(-90)

  hrAngle = map(hr % 12,0,12,0,360);
  miAngle = map(min,0,60,0,360);
  scAngle = map(sec,0,60,0,360);


  push();
  rotate(scAngle);
  stroke(225,209,1);
  strokeWeight(3);
  line(0,0,250,0);
  pop();

  push();
  rotate(miAngle);
  stroke(0,249,145);
  strokeWeight(5);
  line(0,0,200,0);
  pop();

  push();
  rotate(hrAngle);
  stroke(0,194,225);
  strokeWeight(7);
  line(0,0,150,0);
  pop();

  noFill();
  stroke(225,209,1);
  strokeWeight(3);
  arc(0, 0, 560, 560,0,scAngle);

  stroke(0,249,145);
  strokeWeight(5);
  arc(0, 0, 540, 540,0,miAngle);

  stroke(0,194,225);
  strokeWeight(7);
  arc(0, 0, 520, 520,0,hrAngle);

  stroke(143,0,225);
  strokeWeight(10);
  point(0,0)

  drawSprites();
}