var fixedRec,movingRec,rec



function setup() {
  createCanvas(800,400);
 fixedRec = createSprite(400, 200, 100, 50);
 fixedRec.shapeColor = "lightgreen"
 fixedRec.debug = true

movingRec = createSprite(100,100,50,100)
movingRec.shapeColor = "lightblue"
movingRec.debug = true

rec = createSprite(750,300,50,100)
rec.shapeColor = "yellow"


}

function draw() {
  background("black");
  console.log(movingRec.x - fixedRec.x)
  movingRec.x = mouseX
  movingRec.y = mouseY 
  
  if (isTouching(movingRec,rec)){
    movingRec.shapeColor = "red"
    rec.shapeColor = "orange"
  }
  else{
    movingRec.shapeColor = "lightblue"
    rec.shapeColor = "yellow"
  }

  

  drawSprites();
}

