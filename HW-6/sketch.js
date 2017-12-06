//add global variable - ball
var ball = {};

//assign qualities to ball

ball.size = 100;
ball.color = 'blue';
ball.pos_x = 0;
ball.pos_y= 0;
ball.min= 5;
ball.max;

var col = 0;

function setup() {
  createCanvas ( 800, 600 );
  ;

  ball.pos_x = round(width/2.4) ;
  ball.pos_y = floor(height/2.89);
}

function draw() {
  translate( ball.pos_x, ball.pos_y );

  fill( ball.color );
  ellipse (0,0, ball.size);

//random number generator
  ball.pos_x += random( -5, 4);
  ball.pos_y += random( -5, 4);

//map function
  col = mouseX;
  background(col);

  fill( ball.color);
  ellipse(mouseX, 200, 64, 64);

}
