class Striker{
  constructor(x,y,width,height)  {
      var options={
          isStatic:false,
          restitution : 0.7
      }
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.image = loadImage("whiteBall.png");
      World.add(world,this.body);

  }
  display()  {
      imageMode(CENTER);
      image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
  }
}

