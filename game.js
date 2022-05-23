class game {
    constructor (){

    }
    getState(){
var gameStateRef = database.ref('gameState');
gameStateRef.on("value",function(data){
            gameState = data.val();
})
}

update(state){
database.ref('/').update({
     gameState:state
        });
        }

   async start(){
 if (gameState===0){
  Player=new player ()
  var playerCountRef=await database.ref("playerCount").once("value")
 if (playerCountRef.exists()){
   playerCount=playerCountRef.val();
   Player.getCount ()
 }
  Form=new form ()
 Form.display()
 }      
   }
  play (){
    Form.hide ();
    text ("gamestart",120,100);
     player.getPlayerinfo ();
     if (allplayers!=undefined){
       var display_position=130
       
       for (var plr in allplayers){
         if (plr=="player"+Player.index)
         fill ("red")
         else 
         fill ("black")
         display_position+=20
       textSize(15)
       text (allplayers[plr].name+":"+allplayers[plr].distance,120,display_position)
       }
     }
     if (keyIsDown(UP_ARROW)&& Player.index!=null){
       Player.distance+=50
       Player.update()
     }
  }     
}

