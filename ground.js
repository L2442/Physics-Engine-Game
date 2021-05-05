class Ground{
  constructor(x,y,width,height){
      var options={
          isStatic:true,
          friction:1,
          restitution: 0.6
      }
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x,y,width,height,options);
      World.add(world,this.body);
  }

  display(){
      rectMode(CENTER);
      fill("grey");
      rect(this.body.position.x,this.body.position.y,this.width,this.height);
  }
}