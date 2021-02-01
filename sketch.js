var player,playerWalking,playerAttack,playerIdle,badGuy,badGuyAttack;
var bg,bgImage;
var block,blockIMG;
var gameState = "play";
var block1, block2, block3, block4,block5,block6,block7;
var map1, map2, map3, endprize;
var mapCount = 0;
var Chest,chestIMG,openChest;

function preload(){
  bgImage = loadImage("bg.jpg");
  //playerWalking = loadAnimation("goodguywalk/goodguywalk1.jpg","goodguywalk/goodguywalk2.jpg","goodguywalk/goodguywalk3.jpg","goodguywalk/goodguywalk4.jpg"
  //,"goodguywalk/goodguywalk5.jpg","goodguywalk/goodguywalk6.jpg","goodguywalk/goodguywalk7.jpg","goodguywalk/goodguywalk8.jpg","goodguywalk/goodguywalk9.jpg,goodguywalk10.jpg");
  //playerWalking = loadAnimation("goodguywalk1.jpg","goodguywalk2.jpg");

  chestIMG = loadAnimation("TreasureChestclosed.png");
  openChest = loadAnimation("TreasureChestopen.png");

  //trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  //trex_collided = loadAnimation("trex_collided.png");
}


function setup(){
  createCanvas(2000,displayHeight-111);
  bg = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
  bg.addImage(bgImage);
  bg.scale = 5;

  player = createSprite(200,200,20,20);

  //player.addAnimation("Walking",playerWalking);
  spawnBlocks();
  //block = createSprite(200,250,50,50);

  map1 = createSprite(120,360,10,10);
  map1.shapeColor = "red";

  map2 = createSprite(525,160,10,10);
  map2.shapeColor = "red";
  
  map3 = createSprite(800,560,10,10);
  map3.shapeColor = "red";
 
  Chest = createSprite(1570,263,20,20);
  
  Chest.addAnimation("Closedchest",chestIMG);
  Chest.addAnimation("OpenChest",openChest)
  Chest.scale = 0.3;
}



function draw(){
  if(gameState === "play"){
      background(0);
     
      player.setVelocity(0,0);
      //console.log(bg.x);
        
      if(player.isTouching(map1)){
        console.log("Touching map1");
        map1.destroy();
        mapCount++
      }

      if(player.isTouching(map2)){
        console.log("Touching map2");
        map2.destroy();
        mapCount++
      }

      if(player.isTouching(map3)){
        console.log("Touching map3");
        map3.destroy();
        mapCount++
      }
  
      bg.velocityX = -3;

     if(bg.x<350){
      bg.x = displayWidth/2;
    }

    if(keyDown("D")){
      player.velocityX = 3;
      
    }
    if(keyDown("A")){
      player.velocityX = -3;
      
    }
    if(keyWentDown("W")){
      player.velocityY = -120;
    }
      player.velocityY = player.velocityY+3.5;

      player.collide(block1);
      player.collide(block2);
      player.collide(block3);
      player.collide(block4);
      player.collide(block5);
      player.collide(block6);
      player.collide(block7);

    if(player.y>950||player.isTouching(Chest)){
      gameState = "end";
      Chest.changeAnimation("OpenChest", openChest);
    }
    drawSprites();
    text(mouseX+","+mouseY, 20, 20);
    textSize(30);
    text("Map Count:"+mapCount,1672, 62);
  }
  if(gameState ==="end"){
     if(player.y>950 || player.isTouching(Chest)&&mapCount < 3){
        background(0);
        fill("white");
        text("Game Over",500,500);
        text("Better luck next time!", 500, 550);
      }else if(player.isTouching(Chest)&&mapCount === 3){
        console.log("Player Won")
        //Chest.changeAnimation("OpenChest",openChest);
      }      
    }
  }

  function spawnBlocks(){
    block1 = createSprite(125, 250, -250, 50);
    block2 = createSprite(350, 300, 50, 50);
    block3 = createSprite(150, 400, 150, 50);
    block4 = createSprite(500, 200, 150, 50);
    block5 = createSprite(800, 600, 150, 50);
    block6 = createSprite(1242, 457, 150, 50);
    block7 = createSprite(1570, 325, 150, 50);
  }