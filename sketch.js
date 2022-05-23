var database;
var canvas,background
var gameState=0
var playerCount=0
var Form,Game,Player
var allplayers;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
Game=new game()
Game.getState()
Game.start()
 
}

function draw(){
  background("white");
  if (playerCount==2){
    Game.update(1)
  }
  if (gameState==1){
    clear()
    Game.play()
  }
   
    drawSprites();
  
}


