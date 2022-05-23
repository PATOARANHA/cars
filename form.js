class form {
    constructor (){
   this.input = createInput("Name");   
   this.button = createButton('Play');
   this.greeting = createElement('h3');
    }
    hide(){
    this.input.hide()
    this.button.hide()
    this.greeting.hide()  
    }
    display(){
        var title = createElement('h2')
        title.html("Car Racing Game");
        title.position(130, 0);
        
        
        this.input.position(130, 160);
        this.button.position(250, 200);
    
        this.button.mousePressed(()=>{
          this.input.hide();
          this.button.hide();
    
          Player.name = this.input.value();
          
          playerCount+=1;
          Player.index=playerCount
          Player.update()
          Player.updateCount(playerCount);
          this.greeting.html("Hello " + Player.name)
          this.greeting.position(130, 160)
        });
    
      }
}