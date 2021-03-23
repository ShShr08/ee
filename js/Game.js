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
      var PCF = await database.ref('playerCount').once("value");
      if(PCF.exists()){
        playerCount = PCF.val();
        player.getCount();
      }

      form = new Form()
      form.display();
    }
  }
  play(){
    form.H();
    textSize(30);
    text("Start The Game",120,100);
    Player.getplayerinfo();
    if(ap!== undefined){
      var displayPosition = 130
      for(var plr in ap){
        if(plr==="player"+player.index){
          fill("red");
        }
        else{
          fill("black");
        }
        displayPosition+=20;
        textSize(15);
        text(ap[plr].name+":"+ap[plr].distance,120,displayPosition)
      }
    }
    if(keyIsDown(UP_ARROW) && player.index!=null){
      player.distance+=50;
      player.update();

    }
  }
}
