class Drop {
  constructor() {
    var options = {
      friction: 0.001,
      restitution: 0.1,
    };
    this.drop = Bodies.circle(x, y, 5, options);
    this.radius = 5;
    World.add(world, this.drop);
  }
  display() {
    fill("blue");
    ellipseMode(CENTER);
    ellipse(
      this.drop.position.x,
      this.drop.position.y,
      this.radius,
      this.radius
    );
  }
}
