class Box3 extends BaseClass 
{
  constructor(x,y,width,height)
  {
    super(x,y,width,height);
    this.image = loadImage("block4.png");
    this.Visibility = 255;
  }

  display()
  {
    if(this.body.speed>3)
    {
      World.remove(world,this.body);
      push();
      this.Visibility=this.Visibility-5;
      tint(255,this.Visibility);
      var pos=this.body.position;
      image(this.image,pos.x,pos.y,this.width,this.height)
      pop();
    }
    else
    {
      imageMode(CENTER)
      image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
      super.display();
    }
  }

    score()
    {
      if(this.visibility<0 && this.visibility>-105){
        score++
  
      }
    }
  }
