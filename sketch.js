
var platform;
var grass;
var BEGIN=0;
var SOUNDOFF=1;
var SETTINGSSOUND=2;
var SETTINGSWITHOUTSOUND=3;
var CHARACTER=4;
var CHARACTERSILENT=5;
var gameState=BEGIN;
var beginningimg;
var playbtn,insbtn;
var settings;
var frame;
var sound;
var cancel;
var wbtn,cbtn,lbtn,hbtn;
var chart;
var trees;
var leftArrow,leftArrow,downArrow;
var chbtn;



function preload(){
    ground1Animation=loadAnimation("ground1.png");
    backgroundAnimation=loadImage("bg.png");
    beginAnimation=loadAnimation("bgmain.png");
    hideAnimation=loadAnimation("bgmain1.png");
    grassAnimation=loadAnimation("grass.png");
    playbtnAnimation=loadAnimation("playbtn.png");
insbtnAnimation=loadAnimation("insbtn.png");
settingsAnimation=loadAnimation("settings.png");
frameAnimation=loadAnimation("frame.png");
soundOnAnimation=loadAnimation("soundOn.png");
soundOffAnimation=loadAnimation("soundOff.png");
chartAnimation=loadAnimation("chart.png");
rightArrowAnimation=loadAnimation("arrowRight.png");
leftArrowAnimation=loadAnimation("arrowLeft.png");
cancelAnimation=loadAnimation("cancel.png");
characterAnimation=loadAnimation("characters.png");
downArrowAnimation=loadAnimation("arrowDown.png");

lbtnAnimation=loadAnimation("lbtn.png");
wbtnAnimation=loadAnimation("wbtn.png");
cbtnAnimation=loadAnimation("cbtn.png");
hbtnAnimation=loadAnimation("hbtn.png");

horseAnimation=loadAnimation("horse1.1.png","horse1.2.png","horse1.3.png","horse1.4.png","horse1.5.png","horse1.6.png");
lionAnimation=loadAnimation("lion1.1.png","lion1.2.png","lion1.3.png","lion1.4.png");
wolfAnimation=loadAnimation("wolf1.1.png","wolf1.2.png","wolf1.3.png","wolf1.4.png");
catAnimation=loadAnimation("cat1.1.png","cat1.2.png","cat1.3.png","cat1.4.png");


trees1Animation=loadAnimation("trees.png");
trees2Animation=loadAnimation("trees1.png");
trees3Animation=loadAnimation("trees2.png");
trees4Animation=loadAnimation("trees3.png");
trees5Animation=loadAnimation("trees5.png");
trees6Animation=loadAnimation("trees6.png");
clickSound=loadSound("clickSound.wav");
Playsound=loadSound("sound.mp3");
}

function setup(){
createCanvas(windowWidth,windowHeight);

for (i =300; i<4500; i=i+900){
    grass=createSprite(i,490);
grass.addAnimation("grass1",grassAnimation);
}


  ground();

  character=  new Player();

treesGroup=createGroup();

  beginningimg=createSprite(800,300);
  beginningimg.addAnimation("banner",beginAnimation);
  beginningimg.addAnimation("hide",hideAnimation);
  beginningimg.scale=0.9;

  settings=createSprite(1480,50);
  settings.addAnimation("settings",settingsAnimation);
  settings.scale=0.3;

  playbtn=createSprite(500,500);
  playbtn.addAnimation("playbtn",playbtnAnimation);
  playbtn.scale=0.8;
  playbtn.setCollider("circle",0,0,90);
  
  insbtn=createSprite(1000,500);
  insbtn.addAnimation("insbtn",insbtnAnimation);
  insbtn.scale=0.8;
  insbtn.setCollider("circle",0,0,90);

  frame=createSprite(760,340);
  frame.addAnimation("frame",frameAnimation);
  frame.scale=1.8; 
  frame.visible=false;

  cancel=createSprite(400,-100);
  cancel.addAnimation("cancel",cancelAnimation);

  sound=createSprite(50,50);
  sound.addAnimation("soundOn",soundOnAnimation);
  sound.addAnimation("soundOff",soundOffAnimation);
  sound.scale=0.15;

  chart=createSprite(760,990);
  chart.addAnimation("chart",chartAnimation);
  chart.scale=2.5;

  chbtn=createSprite(1450,-200);
  chbtn.addAnimation("chbtn",characterAnimation);
chbtn.scale=0.7;

downArrow=createSprite(1480,120);
downArrow.addAnimation("downArrow",downArrowAnimation);
downArrow.scale=0.5;
downArrow.visible=false;

cat=createSprite(550,70);
cat.addAnimation("cat_running",catAnimation);
cat.scale=0.8;
cat.visible=false;

wolf=createSprite(950,80);
wolf.addAnimation("wolf_running",wolfAnimation);
wolf.visible=false;

  wbtn=createSprite(-280,200);
  wbtn.addAnimation("wbtn",wbtnAnimation);
  wbtn.scale=0.6;

  lbtn=createSprite(-280,290);
  lbtn.addAnimation("lbtn",lbtnAnimation);
  wbtn.scale=0.6;

  cbtn=createSprite(-280,380);
  cbtn.addAnimation("cbtn",cbtnAnimation);
  cbtn.scale=0.6;

  hbtn=createSprite(-280,470);
  hbtn.addAnimation("hbtn",hbtnAnimation);
  hbtn.scale=0.6;

}













function draw(){
background(backgroundAnimation);


if(gameState==BEGIN){
   

    if(mousePressedOver(playbtn)){
gameState=CHARACTER;
clickSound.play();
    }
if(mousePressedOver(insbtn)){
  frame.visible=true;
  beginningimg.changeAnimation("hide",hideAnimation);
  clickSound.play();
  cancel.velocityY=10;
}

if(cancel.y>=80){
  cancel.velocityY=0;
}

if(cancel.y==-100 &&(frame.visible==false)){
  cancel.velocityY=0;
}

if(mousePressedOver(cancel)){
  cancel.velocityY=-10;
  clickSound.play();
  beginningimg.changeAnimation("banner",beginAnimation);
  frame.visible=false;
}




if(mousePressedOver(settings)){
  clickSound.play();
  gameState=SETTINGSSOUND;
}

if(mousePressedOver(sound)){
  clickSound.play();
  sound.changeAnimation("soundOff",soundOffAnimation);
  gameState=SOUNDOFF;
}

}

else if(gameState==SOUNDOFF){
   

    if(mousePressedOver(playbtn)){
gameState= CHARACTER;
    }
if(mousePressedOver(insbtn)){
  frame.visible=true;
  beginningimg.changeAnimation("hide",hideAnimation);
  cancel.velocityY=10;
}

if(cancel.y>=80){
  cancel.velocityY=0;
}

if(cancel.y==-100 &&(frame.visible==false)){
  cancel.velocityY=0;
}

if(mousePressedOver(cancel)){
  cancel.velocityY=-10;
  beginningimg.changeAnimation("banner",beginAnimation);
  frame.visible=false;
}

if(mousePressedOver(settings)){
gameState=SETTINGSWITHOUTSOUND;
}

if(mousePressedOver(sound)){
  clickSound.play();
  sound.changeAnimation("soundOn",soundOnAnimation);
  gameState=BEGIN;
}
  

}


else if(gameState==SETTINGSWITHOUTSOUND){
  beginningimg.changeAnimation("hide",hideAnimation);

clickSound.pause();
downArrow.visible=true;

  if(mousePressedOver(downArrow)){
  chbtn.velocityY=20;
  chbtn.visible=true;
  
  }
  
  if(mousePressedOver(chbtn)){
    chart.velocityY=-10; 
    cancel.velocityY=10;
    wbtn.velocityX=5;
    lbtn.velocityX=10;
    cbtn.velocityX=10;
    hbtn.velocityX=20;
  }

  if(wbtn.x==780){
    wbtn.velocityX=0;
  }
  if(lbtn.x==780){
    lbtn.velocityX=0;
  }
  if(hbtn.x==780){
    hbtn.velocityX=0;
  }
  if(cbtn.x==780){
    cbtn.velocityX=0;
  }
  
  if(chbtn.y>=200 &&(chbtn.visible==true)){
  chbtn.velocityY=0;
  }
  
  
if(chart.y==400){
  chart.velocityY=0;
}

if(cancel.y==80){
  cancel.velocityY=0;
  
}

if(mousePressedOver(cancel)){
  cancel.velocityY=-10;
  chart.velocityY=10;
  wbtn.velocityX=5;
  lbtn.velocityX=10;
  cbtn.velocityX=10;
  hbtn.velocityX=20;
}
  
  if(mousePressedOver(downArrow)){
  chbtn.velocityY=-20;
  }
}


else if(gameState==SETTINGSSOUND){

  beginningimg.changeAnimation("hide",hideAnimation);
downArrow.visible=true;

if(mousePressedOver(downArrow)){
chbtn.velocityY=20;
chbtn.visible=true;
clickSound.play();
}

if(wbtn.x==780){
  wbtn.velocityX=0;
}
if(lbtn.x==780){
  lbtn.velocityX=0;
}
if(hbtn.x==780){
  hbtn.velocityX=0;
}
if(cbtn.x==780){
  cbtn.velocityX=0;
}

if(mousePressedOver(chbtn)){
  clickSound.play();
 chart.velocityY=-10;
 wbtn.velocityX=5;
 lbtn.velocityX=10;
 cbtn.velocityX=10;
 hbtn.velocityX=20;
}

if(mousePressedOver(chbtn)){
  clickSound.play();
  chart.velocityY=-10; 
  cancel.velocityY=10;
}

if(chart.y==400){
  chart.velocityY=0;
}

if(cancel.y==80){
  cancel.velocityY=0;
}

if(mousePressedOver(cancel)){
  cancel.velocityY=-10;
  chart.velocityY=10;
  clickSound.play();
  wbtn.velocityX=5;
  lbtn.velocityX=10;
  cbtn.velocityX=10;
  hbtn.velocityX=20;
}


if(chbtn.y>=200 &&(chbtn.visible==true)){
chbtn.velocityY=0;
}

if(mousePressedOver(downArrow)&&(chbtn.y>=200)){
chbtn.velocityY=-20;
}

}

else if(gameState==CHARACTER){
  
  

  translate(  -character.spt.x + width/2 , 0);

playbtn.destroy();
insbtn.destroy();
beginningimg.destroy();
frame.destroy();

platform.collide(character.spt);

spawnTrees();

if(keyDown("down")){
  character.y=character.y=5;
}

character.spt.setCollider("circle",0,0,40);
character.spt.debug=true;


}

platform.collide(character.spt);


drawSprites();
}




function ground(){

    for (i =300; i<45000; i=i+300){
        platform=createSprite(i,560);
        platform.scale=1;
    platform.addAnimation("platform",ground1Animation);
    platform.setCollider("rectangle",0,0,500,100);
    platform.debug=true;

        
      }
    }

    function spawnTrees(){
      if (frameCount % 60 === 0){
        trees=createSprite(12000,440);
        trees.x = Math.round(random(40000));
      trees.scale=2;
      trees.velocityX=-6;
      var rand = Math.round(random(1,6));
switch(rand){
  case 1:    trees.addAnimation("trees",trees1Animation);
break;
case 2:    trees.addAnimation("trees",trees2Animation);
break;
case 3:    trees.addAnimation("trees",trees3Animation);
break;
case 4: trees.addAnimation("trees",trees4Animation);
break;
case 5: trees.addAnimation("trees",trees5Animation);
break;
case 6: trees.addAnimation("trees",trees6Animation);
break;
default:
  break;
  
}   
    }

    }
      


    
