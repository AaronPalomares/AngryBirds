class Chain{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.chain1 = loadImage("sling1.png");
        this.chain2 = loadImage("sling2.png");
        this.chain3 = loadImage("sling3.png");
        this.pointB = pointB;
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
        
    }
    attach(body){
        this.chain.bodyA = body;
    }
    fly(){
        this.chain.bodyA = null;
    }
    display(){
        image(this.chain1,200,20);
        image(this.chain2,170,20);
        if(this.chain.bodyA){
            var pointA = this.chain.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke(48,22,8);
            if(pointA.x<220){
                strokeWeight(7);
                line (pointA.x,pointA.y,pointB.x,pointB.y);
                line (pointA.x-20,pointA.y,pointB.x+30,pointB.y+3);
                image(this.chain3,pointA.x-30,pointA.y-10,15,30);
            }
            else{
                strokeWeight(3);
                line (pointA.x,pointA.y,pointB.x,pointB.y);
                line (pointA.x-20,pointA.y,pointB.x+30,pointB.y+3);
                image(this.chain3,pointA.x-30,pointA.y-10,15,30);
            }
            pop();

        }
    }

}