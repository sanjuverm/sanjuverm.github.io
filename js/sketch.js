// https://p5js.org/examples/mobile-shake-ball-bounce.html
var canvas;
var balls = [];
var colors = [];
var al = 50;
var numBalls = 80;

function setup() {

  noStroke();
  canvas = createCanvas(windowWidth/2,windowHeight);
  canvas.parent("sketch");
  canvas.style("right", "0");

  // Green 
  // colors.push(color(93, 146, 96, al));
  // colors.push(color(191, 225, 192, al));
  // colors.push(color(237, 247, 238, al));
  // colors.push(color(160, 177, 160, al));
  // colors.push(color(60, 179, 113, al));

  // Pink
  colors.push(color(167,77,146, al));
  colors.push(color(187,108,169, al));
  colors.push(color(211,160,199, al));
  colors.push(color(226,192,218, al));
  colors.push(color(245,232,242, al));

  

  for (var i = 0; i < numBalls; i++) {
    balls.push(new Ball());
  }
}

function draw() {
  background(255);
  for (var i = 0; i < numBalls; i++) {
    balls[i].move();
    balls[i].display();
  }
}

function Ball() {

  this.x = random(width);
  this.y = random(height);
  this.num = int(random(0,5));
  // console.log(this.num);
  // console.log(colors[this.num]);
  this.c = colors[this.num];
  this.diameter = random(20, 60);
  this.xSpeed = random(-0.5, 0.5);
  this.ySpeed = random(-0.5, 0.5);

  this.move = function() {

    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if (this.x < 0 || this.x > width) {
      this.xSpeed *= -1;
    }

    if (this.y < 0 || this.y > height) {
      this.ySpeed *= -1;
    }
  }

  this.display = function() {
    fill(this.c);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}