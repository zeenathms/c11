var box;
function setup()
{
 createCanvas(400,400);
 box=createSprite(40,40,50,50,);
box.x=100;
box.y=150;
box.Velocity=4;
box.shapeColor= 'red';
}

function draw()
{
 background(220);
 drawSprites();
}

