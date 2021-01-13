var ground,groundImage
var boy,boyImage,invisibleGround,obstacleImage,stones,stoneGroup
var PLAY=1,END=0,score=0,gameState=PLAY

function preload(){
groundImage=loadImage("66843869-cartoon-building-background-with-separated-layers-for-game-art-and-animation-game-design-asset-in-2d.jpg")
boyImage=loadImage("giphy.gif")
obstacleImage=loadImage("icons8-rock-96.png")
}

function setup() {
createCanvas(600,600)
ground=createSprite(300,300)
ground.addImage(groundImage)
ground.scale=0.6
ground.velocityX=-3 

boy=createSprite(300,450)
boy.addImage(boyImage)
boy.scale=0.3

invisibleGround=createSprite(300,500,600,5)
invisibleGround.shapeColor="green"
invisibleGround.visible=false

stoneGroup=createGroup()
}

function draw() {
background("white")
camera.position.y=boy.y-100;
camera.position.x=300
drawSprites()
obstacles()
if(ground.x<210){
ground.x=300
}

if(keyDown("up")&&boy.y>=100) {
boy.velocityY=-11
}

boy.velocityY = boy.velocityY + 0.8
boy.collide(invisibleGround)

if (gameState==END){
ground.velocityX=0
stones.velocityX=0
stoneGroup.destroyEach()
score=0
}

if(stoneGroup.isTouching(boy)){
gameState=END 
}

fill("black")
textSize(18)
text("score :"+score,500,100)
text("Press UP ARROW key to help me reach my college",70,70)
text("HI! I am Sam, today I am late for my college",100,40)
text("REMEMBER do not make me hit with stones",30,100)
score = score + Math.round(getFrameRate()/65);
}

function obstacles(){
if(frameCount%120===0){
stones=createSprite(610,470)  
stones.scale=0.9
stones.addImage(obstacleImage)
stones.velocityX=-4
stones.debug=false
stones.setCollider("circle",0,0,20)
stoneGroup.add(stones)
 }}