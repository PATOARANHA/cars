class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    car1 = createSprite(100,200);
    car1.addImage("car1",car1_img);
    car2 = createSprite(300,200);
    car2.addImage("car2",car2_img);
    car3 = createSprite(500,200);
    car3.addImage("car3",car3_img);
    car4 = createSprite(700,200);
    car4.addImage("car4",car4_img);
    cars = [car1, car2, car3, car4];
  }

  play(){
    form.hide();
    
    Player.getPlayerInfo();
    player.getRanking();

    if(allPlayers !== undefined){
      background("yellow")
      image(track, 0,-height*5,width, height*6);
      
      //var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 175 ;
      var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        //x = x + 200;
        x = allPlayers[plr].left_and_right;
        //use data form the database to display the cars in y direction
        y =height - allPlayers[plr].distance;
        cars[index-1].x = x;
        cars[index-1].y = y;

        if (index === player.index){
          stroke(10); fill("red"); ellipse(x,y,60,60);
          cars[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y;
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }
    if(keyIsDown(DOWN_ARROW) && player.index !== null){
      player.distance -=10
      player.update();
    }
    if(keyIsDown(RIGHT_ARROW) && player.index !== null&&player.left_and_right<width-240){
      player.left_and_right +=10
      player.update();
    }
    if(keyIsDown(LEFT_ARROW) && player.index !== null&&player.left_and_right>240){
      player.left_and_right -=10
      player.update();
    }
    if(player.distance > height*6-200){
      gameState = 2;
      player.ranking+=1;
      Player.updateRanking(player.ranking);
    }
   
    drawSprites();
  }

  end(){
    console.log("Game Ended");
    console.log(player.ranking);
    player.updateCount(0);
    Player.updateRanking(0);
  game.update(0)
  } 
   
}
