class Umbrella {
  constructor(x, y) {
    var options = {
      isStatic: true,
    };
    this.image = loadImage("raindrop imgs/Walking Frame/walking_1.png");
    this.umbrella = Bodies.circle(x, y, 5, options);
    World.add(world, this.umbrella);
  }
  display() {
    imageMode(CENTER);
  }
}
