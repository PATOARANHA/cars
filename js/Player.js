class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.left_and_right=0;
    this.ranking=null;
  }
addPlayer(){
  var playerIndex = "players/player" + this.index;
  if (this.index==1){
    this.left_and_right = 300;
  }
  if (this.index==2){
    this.left_and_right = 500;
  }
  if (this.index==3){
    this.left_and_right = 700;
  }
  if (this.index==4){
    this.left_and_right = 900;
  }
  database.ref(playerIndex).set({
    name:this.name,
    distance:this.distance,
    left_and_right:this.left_and_right,
    ranking:this.ranking,
  });
}
getRanking(){
database.ref("ranking").on("value",(data)=>{
  this.ranking=data.val();
})
}
static updateRanking(ranking){
  database.ref('/').update({
    ranking: ranking
  });
}
  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance,
      left_and_right:this.left_and_right,
      ranking:this.ranking,
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}
