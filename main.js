var ctx = document.getElementById("ctx").getContext("2d");


//load images
var onion = new Image();
var bg = new Image();
var box1 = new Image();

onion.src = "onion.png";
bg.src = "bg.png";
box1.src = "box1.png";


// some variables
var onX = 0;
var onY = 590;
var box1X = 1600;
var box1Y = 590;
var jumpY = -60;
var speed = -10;
var timeStart = Date.now();


//Jumping
function jump () {
  onY += jumpY;
}

//Falling
function fall () {
  onY -= jumpY;
}

// Coming Box
function run () {
box1X += speed;
  if(box1X<=0){
    box1X = 1600;
  }
}


//Keyboard
document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        jump();
        setTimeout(function () {
          fall();
        }, 200);
    }
}

//draw images
function draw() {
  ctx.drawImage(bg, 0, 0);
  ctx.drawImage(onion, onX, onY);
  ctx.drawImage(box1, box1X, box1Y);
  run();
  var highscore = Date.now() - timeStart;
  ctx.fillText("Highscore:" + highscore, 30, 30)

  //test collision
  if(onX+onion.width>=box1X && box1X>=onX && onY+onion.height>=box1Y && box1Y>=onY ) {
    location.reload();
  }
}


draw();
setInterval(100, draw);
