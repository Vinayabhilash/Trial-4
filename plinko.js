class Plinko{
    constructor(x, y){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, options);
        World.add(world, this.body);
        this.plinko = [];
    }
    display(){      
        var pos = this.body.position;
        translate(pos.x, pos.y);
        noStroke();
        fill("Blue");
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r, this.r);
        
        for(var j = 40; j<= width; j = j+50){
            plinkos.push(new Plinko(j, 75));
          }
        for(var j = 15; j<= 10; j = j+50){
            plinkos.push(new Plinko(j, 175));
          }
        
        
    }
}