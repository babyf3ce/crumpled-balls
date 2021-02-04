const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//crumpled ball
var paperSprite;
var ground;
//garbage
var wallleft, wallright, bottom;
//ground
var ground;
function preload() {}

function setup() {
  createCanvas(800, 500);

  paperSprite = createSprite(200, 469, 40, 40);

  ground = createSprite(400, 499, 800, 10);

  engine = Engine.create();
  world = engine.world;

  //bodys
  var boxPosition = width / 2 - 100;
  var boxY = 610;

  wall2Sprite = createSprite(boxPosition + 200, boxY, 20, 100);

  floor2 = Bodies.rectangle(boxPosition + 100, boxY + 25, 200, 20, {
    isStatic: true,
  });
  World.add(world, floor2);

  floor2Sprite = createSprite(boxPosition + 100, boxY + 40, 200, 20);

  ground = Bodies.rectangle(width / 2, 650, width, 10, { isStatic: true });

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(2);

  drawSprites();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(
      paperSprite.body,
      positionX,
      paperSprite.body.positionY,
      {
        x: 85,
        y: -85,
      }
    );
  }
}
