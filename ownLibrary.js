function isTouching(recta,rectb){

    if(Math.abs(recta.y-rectb.y) <= recta.height/2 + rectb.height/2 
    && Math.abs(recta.x-rectb.x) <= recta.width/2 + rectb.width/2){
      return true
    }
  
    else {return false}
  }
  
  function bounceOff(s1,s2){
  
  
    if(Math.abs(s1.x-s2.x) < s1.width/2 + s2.width/2 
    && Math.abs (s1.y-s2.y) < s1.height/2 + s2.height/2){
      s1.velocityX = s1.velocityX * -1
      s1.velocityY = s1.velocityY * -1
       }
  }

  function bounce(s1,s2){
  
  
    if(Math.abs(s1.x-s2.x) < s1.width/2 + s2.width/2 
    && Math.abs (s1.y-s2.y) < s1.height/2 + s2.height/2){

        var tempx = s1.velocityX
        var tempy = s1.velocityY

      s1.velocityX = s2.velocityX 
      s1.velocityY = s2.velocityY 

      s2.velocityX = tempx 
      s2.velocityY = tempy 

       }
  }