var rect1,rect2, rect3, ball, rect4;


function setup() {
  createCanvas(800,400);
  
  rect1 = createSprite(50, 60, 40, 120);
 
  rect2 = createSprite(120, 100, 120, 40);
  
  rect3 = createSprite(200, 250, 20,320);
  
  ball = createSprite(350, 200, 30, 30);
  ball.velocityX = 2;
  ball.velocityY = 1;

  rect4 = createSprite(650, 150, 40, 450);
}

function draw() {
  background("red");
  rect1.x = mouseX
  rect1.y = mouseY  

  //console.log(rect1.x-rect2.x)//80
  // istouching

  if(isTouching(rect1,rect2)){

    background("green")

  }
  else if((isTouching(rect1,rect3))){

    background("cyan")

  }
  else{
    background("red")
  }

bounceOff(ball, rect3 )
bounce(ball, rect4)



  
  
  
  drawSprites();
}
// function can return, and also take inputs
