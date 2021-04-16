  
class Ball{
  constructor(x,y,width,height) {
      var options={
         isStatic:false,
          restitution:0.3,
          friction:0
      }
      this.visibility = 255;
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x,y,width,height,options);
      World.add(world,this.body);
  }
  display(){
     if(this.body.speed < 9){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        fill(255,0,0);
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
        }
        else{
          World.remove(world, this.body);
          push();
          fill(255,0,0,this.visibility);
          noStroke();
          this.visibility = this.visibility-2;
          pop();
        }


      }
}
      


