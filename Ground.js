class Ground{
    constructor(x,y,w,h){
       var options={ 
        isStatic: true,
        restitution:0,
        friction:0,
        density:1
    }
    this.body=Bodies.rectangle(x,y,w,h,options)
    this.w=w;
    this.h=h;
    World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        fill("white");
        var pos=this.body.position;
        rect(this.body.position.x,this.body.position.y,this.w,this.h);
    }
}