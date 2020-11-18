class Ground{
    constructor(x,y,width,height){
        var json={
            isStatic: true
        }
        this.ground1=Bodies.rectangle(x,y,width,height,json)
        this.h=height
        this.w=width
        World.add(world,this.ground1)
    }
    display(){
        var a=this.ground1.position
        push()
        fill("yellow")
        rect(0,0,this.w,this.h)
        pop()
    }
}