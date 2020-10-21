class Paper {
    constructor(x,y,r){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        This.x = x;
        This.y = y;
        This.r = r;
        This.body = Bodies.circle(This.x,This.y,This.r/2,options);
        World.add(World,this.body)
    }
    display()
    {
        var paperpos = this.body.position;

        Push()
        translate(paperpos.x,paperpos.y);
        rectMode(CENTER)
        strokeWeight(3);
        Fill(255,0,255)
        ellipse(0,0,this.r,this.r);
        Pop()
    }
} 