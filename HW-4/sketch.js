function setup() {
//create canvas for monster portrait
  createCanvas( 600, 600 );

}

function draw() {
  //background color
  background( 'tan' );

  //sandbox for entire monster
  push();

  //move grid to center
  translate( 300, 300 );

  //head
  push();
  //head code here
fill( 'yellow' );
noStroke();
ellipse( -50, -100, 230, 230 )

  //mouth
  push();
  fill( 'black' );
  translate( 0, 55 );
rect(-125, -125, 150, 30);
  //mouth code here
  pop();
  //end of mouth

//eyes
push();
translate( 0, -100 )
fill( 'white' )
stroke( 'blue' )
ellipse( 0, 0, 25, 25 )
ellipse( -85, -55, 25, 25 )
fill( 'blue' )
strokeWeight(10)
point( 0, 0)
point( -85, -55 )

//eye code here
pop();
//end of eyes

pop();
//end of head

  //body
  push();
  fill( 'purple' )
  strokeWeight(5)
  triangle(-50, 15, 100, 300, -200, 300)
  //body code here

  pop();
  //end of body

  //arms
  push();
fill( 'green')
noStroke()
translate( 0, 0)
rotate(6)
rect(-25, 100, 200, 25)
rotate(-65)
rect(30, -100, 200, 25)

  //arm code here
pop();
//end of arms

  //end of monster
  pop();


}
