

//variables to be created where sprites would be loaded
var back;
var train,trainImage;
var nstone1,nstone2,nstone3,nstone4;
var pstone1,pstone2,pstone3;
var tree1,tree2;
var car1,car2,car3,car4;
var bus1, bus2, bus3, bus4;
var carImage1,carImage2,carImage3,carImage4;
var busImage1,busImage2,busImage3,busImage4;
var treeImage1,treeImage2;
var start,go,end,canswer,wanswer;
var neg1,neg2,neg3,neg4;
var pos1,pos2,pos3;
var increase,decrease;
var score=0;
var yourname,submit;
var title;
var gameState="start";
var invisible;
var level2,replay;
var hurdleImage,hurdle;
var hurdleGroup;
var replay;
function preload()
{
	hurdleImage=loadImage("Sprites/HURDLE.png");
	//background for the image
	back=loadImage("Sprites/BG.png");
	
	//train to be run
	trainImage=loadImage("Sprites/train.png");
    
	//trees around train
	tree1=loadImage("Sprites/tree1.png");
	tree2=loadImage("Sprites/tree2.png");
    
	//vehicles roaming around the train
	car1=loadImage("Sprites/car1.png");
	car2=loadImage("Sprites/car2.png");
	car3=loadImage("Sprites/car3.png");
	car4=loadImage("Sprites/car4.png");
	bus1=loadImage("Sprites/Bus1.png");
	bus2=loadImage("Sprites/Bus2.png");
	bus3=loadImage("Sprites/Bus3.png");
	bus4=loadImage("Sprites/Bus4.png");
	
	//negative events 
	nstone1=loadImage("Sprites/negativestone1.png");
	nstone2=loadImage("Sprites/negativestone2.png");
	nstone3=loadImage("Sprites/negativestone3.png");
	nstone4=loadImage("Sprites/negativestone4.png");
	
	//positive events
	pstone1=loadImage("Sprites/positivestone1.png");
	pstone2=loadImage("Sprites/positivestone2.png");
	pstone3=loadImage("Sprites/positivestone3.png");
	
	//loading the sounds here
	start=loadSound("Sounds/train_start.mp3");
	go=loadSound("Sounds/train_middle.mp3");
	end=loadSound("Sounds/train_end.mp3");
	canswer=loadSound("Sounds/correct.mp3");
	wanswer=loadSound("Sounds/wrong.mp3");	
}

function setup() {
	createCanvas(1300,580);
	decrease=createButton("Decrease my speed",550,20,20,20);
	increase=createButton("Increase my speed",600,20,20,20);
	decrease.hide();
	increase.hide();
replay=createButton("Play Again",500,20,20,20);
replay.hide();
	hurdleGroup=new Group();
//creating vehicles 
carImage1=createSprite(1200,560,20,20);
carImage1.addImage(car1);
carImage1.velocityX=-5;
carImage2=createSprite(1200,560,20,20);
carImage2.visible=false;
busImage1=createSprite(1200,560,20,20);
busImage1.visible=false;
busImage2=createSprite(1200,560,20,20);
busImage2.visible=false;
busImage3=createSprite(1200,560,20,20);
busImage3.visible=false;
busImage4=createSprite(1200,560,20,20);
busImage4.visible=false;
carImage3=createSprite(1200,560,20,20);
carImage3.visible=false;
carImage4=createSprite(1200,560,20,20);
carImage4.visible=false;

//creating trees and plants
treeImage1=createSprite(1296,100,20,20);
treeImage1.addImage(tree1);
treeImage2=createSprite(1296,560,20,20);
treeImage2.addImage(tree2);
treeImage2=createSprite(500,560,20,20);
treeImage2.addImage(tree2);
	//creating the train and setting velocity
train=createSprite(1300,420,50,50);
train.velocityX=-4;
train.addImage(trainImage);

//create invisible Ground
invisible=createSprite(1300,519,50000,10);
invisible.shapeColor="brown";
train.collide(invisible);
//------first time created background--------//

//negative rock 1
neg1=createSprite(500,450,10,10);
neg1.addImage(nstone1);
neg1.scale=0.4;  
neg1.collide(invisible);
//positive rock 3
pos3=createSprite(-300,450,10,10);
pos3.addImage(pstone3);
pos3.scale=0.4;

//negative rock 2
neg2=createSprite(-1200,450,10,10);
neg2.addImage(nstone2);
neg2.scale=0.4;

//positive rock 1
pos1=createSprite(-2000,450,10,10);
pos1.addImage(pstone1);
pos1.scale=0.4;

//------repeated background's rocks------//

//negative rock 3
neg3=createSprite(1000,450,10,10);
neg3.addImage(nstone3);
neg3.scale=0.4;
neg3.collide(invisible);
//negative rock 4
neg4=createSprite(100,450,10,10);
neg4.addImage(nstone4);
neg4.scale=0.4;


//postive rock 2
pos2=createSprite(-800,450,10,10);
pos2.addImage(pstone2);
pos2.scale=0.4;

level2=createButton("Proceed to Level 2",560,20,20);
level2.hide();
replay=createButton("Play Again",560,20,20);
replay.hide();
}


function draw() {
	//background
  image(back,-3040,0,5000,580);

 //setting camera so the train moves
  camera.x=train.x;
if(train.x<-2100){
	train.x=1300;
}

console.log(train.x,train.y,train.velocityX);
increase.mousePressed(()=>{
train.velocityX=train.velocityX-3;
});
decrease.mousePressed(()=>{
	train.velocityX=train.velocityX+1;
});

//for negative rock 1 and game will start here
if(gameState=="start"){
	start.play();
	start.setVolume(0.02);
  if(train.x>820 && train.x<825){
	train.velocityX=0;
	increase.hide();
	decrease.hide();
carImage2.visible=true;
	carImage2.addImage(car2);
carImage2.velocityX=-5;
}

if(keyDown("W") && train.x>820 && train.x<825){
	canswer.play();
	neg1.visible=false;
	train.velocityX=-5;

	score=score+2;
} else if(keyDown("R") && train.x>820 && train.x<825){
	wanswer.play();
neg1.visible=false;
train.velocityX=-5;

score=score-2;
}

//for positive stone 3
if(train.x<-54&& train.x>-58){
	train.velocityX=0;
	increase.hide();
	decrease.hide();
	busImage1.visible=true;
	busImage1.addImage(bus1);
	busImage1.velocityX=5;
}
if(keyDown("R") && train.x<-54&& train.x>-58){
	canswer.play();
	pos3.visible=false;
	train.velocityX=-5;

	score=score+2;
} else if(keyDown("W") && train.x<-54&& train.x>-58 ){
	wanswer.play();
pos3.visible=false;
train.velocityX=-5;

score=score-2;
}

//for negative stone 2
if(train.x<-969&& train.x>-974){
	train.velocityX=0;
	increase.hide();
	decrease.hide();
	busImage2.visible=true;
	busImage2.addImage(bus2);
	busImage2.velocityX=6;
}
if(keyDown("W") && train.x<-969&& train.x>-974){
	canswer.play();
	neg2.visible=false;
	train.velocityX=-5;

	score=score+2;
} else if(keyDown("R") && train.x<-969&& train.x>-974 ){
	wanswer.play();
neg2.visible=false;
train.velocityX=-5;

score=score-2;
}

//for positive stone 1
if(train.x<-1775&& train.x>-1780){
	train.velocityX=0;
	increase.hide();
	decrease.hide();
	carImage3.visible=true;
	carImage3.addImage(car3);
	carImage3.velocityX=-6;
}
if(keyDown("R") && train.x<-1775&& train.x>-1780){
	canswer.play();
	pos1.visible=false;
	train.velocityX=-5;

	score=score+2;
	gameState="repeat";

} else if(keyDown("W") && train.x<-1775&& train.x>-1780 ){
	wanswer.play();
pos1.visible=false;
train.velocityX=-5;

score=score-2;
gameState="repeat";

}
}

//here, for second created background, gamestate has been set to repeat
if(gameState=="repeat"){
	start.stop([]);
	go.play();
	go.setVolume(0.002);
	if(train.x>1264&& train.x<1270){
		train.velocityX=0;
		increase.hide();
		decrease.hide();
		carImage4.visible=true;
		carImage4.addImage(car4);
		carImage4.velocityX=-6;
	}
	if(keyDown("W") && train.x>1264&& train.x<1270){
		canswer.play();
		neg3.destroy();
		train.velocityX=-5;
	
		score=score+2;
	} else if(keyDown("R") && train.x>1264&& train.x<1270 ){
		wanswer.play();
neg3.destroy();
	train.velocityX=-5;

	score=score-2;
	}

	//negative stone 4
	if(train.x>362&& train.x<366){
		train.velocityX=0;
		increase.hide();
		decrease.hide();
		busImage3.visible=true;
		busImage3.addImage(bus3);
		busImage3.velocityX=6;
	}
	if(keyDown("W") && train.x>362&& train.x<366){
		canswer.play();
		neg4.destroy();
		train.velocityX=-5;

		score=score+2;
	} else if(keyDown("R") && train.x>362&& train.x<366){
		wanswer.play();
neg4.destroy();
	train.velocityX=-5;

	score=score-2;
	}

	//this is last rock positive stone 2 which will destroy all the other rocks here and the level will be complete
	if(train.x<-511&& train.x>-516){
		train.velocityX=0;
		increase.hide();
		decrease.hide();
		busImage4.visible=true;
		busImage4.addImage(bus4);
	busImage4.velocityX=-6;
	}
	if(keyDown("R") && train.x<-511&& train.x>-516){
		canswer.play();
		train.velocityX=-5;

		score=score+2;
gameState="end";
	//destroying all the rocks 
	neg1.destroy();
	neg2.destroy();
	
	pos1.destroy();
	pos2.destroy();
	pos3.destroy();
	} else if(keyDown("W") &&train.x<-511&& train.x>-516 ){
		wanswer.play();
	train.velocityX=-3;

	score=score-2;
	neg1.destroy();
	neg2.destroy();
	
	pos1.destroy();
	pos2.destroy();
	pos3.destroy();
	gameState="end";
	}
}
//!----no gameState here----!
//for removing the rocks/stones from the first created background
if(pos3.visible==true){
	neg3.visible=false;
}else if(pos3.visible==false){
	neg3.visible=true;
}

if(neg2.visible==true){
	neg4.visible=false;
}else if(neg2.visible==false){
	neg4.visible=true;
}

if(pos1.visible==true){
	pos2.visible=false;
}else if(pos1.visible==false){
	pos2.visible=true;
}

//will draw the sprites
drawSprites();
  if(gameState=="end"){
	go.stop([]);
	end.play();
	end.setVolume(0.002);
	textSize(22);
	fill("black");
	stroke(5);
	text("Your score is: "+score +" Click on button to proceed..!",train.x-300,80)
level2.show();
level2.mousePressed(()=>{
gameState="next";
train.x=1300;

});
  }
if(gameState=="next"){
	go.play();
	go.setVolume(0.002);
	train.velocityX=-7;
	if(World.frameCount%100==0){
		hurdle=createSprite(1100,480,20,20);
		  hurdle.addImage(hurdleImage);
		  hurdle.scale=0.2;
		  hurdleGroup.add(hurdle);
		  hurdle.depth=train.depth;
		  train.depth=train.depth+1;
	  }
	score=0;
	level2.hide();
	textSize(22);
	fill("black");
	text("For destroying hurdle, press D key",train.x-300,110);
	textSize(16);
	if(keyDown("D")){
		hurdleGroup.destroyEach();
		score=score+2;
		train.velocityX=-7;
	}

	if(train.isTouching(hurdleGroup)){
		hurdleGroup.destroyEach();
		train.velocityX=-7;
	}
	if(score>29){
		gameState=="replay";
	}
	if(gameState=="replay"){
replay.show();
replay.mousePressed(()=>{
gameState="start";
});
}
}
  //setting the text 
  stroke(5);
  textSize(25);
  fill("black");
  text("Press W key for wrong answer and R key for correct answer",train.x-300,50);
  //displaying the scores
  text("Score: "+score,train.x-600,20); 
}