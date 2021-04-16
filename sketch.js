var maxdrops = 100;

function preload() {}

function setup() {
  for (var i = 0; i < maxdrops; i++) {
    drop.push(new Drop(random(0, 400), random(0, 400)));
  }
}

function draw() {
  createCanvas(400, 400);
  drops.display();
}
