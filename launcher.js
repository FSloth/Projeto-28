class launcher{
    constructor(bodyA,PointB){
        var options = {
            bodyA: bodyA,
            pointB: PointB,
            stiffness: 0.004,
            length: 10
        }
        this.pointB = PointB;
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }

    fly(){
        this.launcher.bodyA = null
    }
    attach(stoneObj){
        this.launcher.bodyA = stoneObj;
    }

    display(){
        
        if(this.launcher.bodyA){
            var pointA = this.launcher.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
     
}

function keyPressed() {
    if (keyCode === 32) {
      Matter.Body.setPosition(stoneObj.body, {x:235, y:420})
      launcherObject.attach(stoneObj.body);
    }
}