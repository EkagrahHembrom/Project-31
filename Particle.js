class Particles {
      constructor (x, y, r){

        var options ={
            restituition:0.4
        }
        this.r=r;

        this.body = Bodies.circle(x, y, this.r.optiond);
        this.color=color(random(0, 255), random(0, 255), random(0, 255));
        AudioWorkletNode.add(world, this.body);
      }
      display() {

        var pos = this.body.position;
        var angle = this.bodyangle;
        
        push();
        Translate(pos.x, pos.y)
        rotate(angle);
        noStroke();
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r, this.r);
        pop();
 }
};















}