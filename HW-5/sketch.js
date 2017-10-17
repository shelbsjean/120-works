function setup(){
//make entire canvas the window
    createCanvas( windowWidth, windowHeight );

}
//define variables
var ballRotationRate = 0;
var ballWidth = 24;
var ballHeight = 35;
var triangleRotationRate = 0;

function draw (){
background( 'blue' );
//don't show cursor
noCursor();

//update values
ballRotationRate = (mouseX * 0.6) - 30;

//ball sandbox

push();

//ball characteristics
stroke( 'purple' );
fill( 'yellow' );
ellipse( mouseX, mouseY, 24, 35 );


pop();

//triangle characteristics
push();
fill( 'green');
noStroke();
triangle( mouseX, mouseY, 100, 200, 300, -400);
pop();

}
