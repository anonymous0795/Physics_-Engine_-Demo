//3 constants for 3 main components of physics engine - Engine,World & Bodies
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

// create variables for engine & world objects
var engine,world;
var rect1;
var ground,ball;
function setup(){
    var canvas = createCanvas(400,400);

    // creating engine object
    engine = Engine.create();
    // creating world object
    world = engine.world;

    // creating options for rect1 so that it is static
    var rectOptions = {isStatic:true}; // json object

    // creating rcetangle
    rect1 = Bodies.rectangle(200,200,50,50,rectOptions);
    // adding rect1 to world
    World.add(world,rect1);

    // creating options for ground so that it is static
    var groundOptions={isStatic:true};

    //creating ground
    ground=Bodies.rectangle(200,390,400,20,groundOptions);
    // adding ground to world
    World.add(world,ground);

    // creating options for ball so that it is bounces on ground
    var ballOptions={restitution:1.0};

    //creating ball
    ball=Bodies.circle(300,200,30,ballOptions);
    //adding ball to world
    World.add(world,ball);
}

function draw(){
    background(0);

    // update Engine with engine object
    Engine.update(engine);

    //making the rectMode center
    rectMode(CENTER);

    // creating rectangle with positions of rect1
    rect(rect1.position.x,rect1.position.y,50,50);

    // creating rectangle with positions of ground
    rect(ground.position.x,ground.position.y,400,20);

    // making ellipse mode Radius
    ellipseMode(RADIUS);
    // creating ellipse with positions of ball
    ellipse(ball.position.x,ball.position.y,30,30);
}