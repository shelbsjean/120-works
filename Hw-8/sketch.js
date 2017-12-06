function setup() {
  createCanvas(900, 600);
}

let pos_x= 0;
let pos_y= 0;
let d = 50
let r = d/2

function draw() {
  background('tan');
  fill('blue');
  noStroke();
  pos_x = width * 0/10 + r;
  ellipse ( pos_x, pos_y, d);

  pos_y++;
  if (pos_y > height){
    pos_y = 0;
  }
  for ( var i=0; i < 10; i++){
    pos_x = width * i/10;
    ellipse( pos_x, pos_y, 4*i, r);
    ;
  }
  for (let x=0; x < width+25; x += 50){
    fill(255);
    ellipse(x, 0, 100, 50);
  }
  fill('green')
rect(0,510, 900, 100)
}
