
  var score = 1;
  var gameOver, gameOverImg
 var appleImg;
 var carrotImg,orangeImg,redImg;
 var cocina, cocinaImg;
 var chile, chileImg;
 var lechuga, lechugaImg;
 var carne, carneImg;
 var hamburguesa, hamburguesaImg;
 var mostaza, mostazaImg;
 var jitomate, jitomateImg;
 var ketchup, ketchupImg;
 var chef, chefImg;
 var moneda, monedaImg;
 var ingredientes;
  var obstacleGroup;
  var restart;

 function preload(){
   appleImg = loadImage("apple.png");
   orangeImg = loadImage("orangeLeaf.png");
   redImg = loadImage("redImage.png");
   monedaImg = loadImage("moneda.png");
   chefImg = loadImage("chef.png");
   cocinaImg = loadImage("Cocina.jpg");
   ketchupImg = loadImage("kepchup.png");
   jitomateImg = loadImage("Jitomate.png");
   chileImg = loadImage("chile.png");
   mostazaImg = loadImage("Mostaza.png");
   hamburguesaImg = loadImage("hamburgesa.png");
   carneImg = loadImage("carne.png");
   lechuga = loadImage("lechuga.png");
   gameOverImg= loadImage("assets/gameOver.png");
   restartImg = loadImage("assets/restart.png");
 }

 function setup(){
  
   createCanvas(800,450);
 cocina=createSprite(400,225,0,0);
 cocina.addImage(cocinaImg);
 cocina.scale = 1.4;

  chef = createSprite(160,400,100,60);
  chef.scale = 1.5;
  chef.addImage(chefImg);

  moneda = createSprite(50,50,50,50);
  moneda.scale = 0.09;
  moneda.addImage(monedaImg);

  obstacleGroup = new Group();
  ingredientes = new Group();

  gameOver = createSprite(220,200);
  restart = createSprite(220,240);
  gameOver.addImage(gameOverImg);
  gameOver.scale = 0.5;
  restart.addImage(restartImg);
  restart.scale = 0.5;
  gameOver.visible = false;
  restart.visible = false;

 }

function draw() {
  background(0);
   
   if(gameState === PLAY){
    chef.x = World.mouseX;
   
   }     

   if(gameState === END) 
    {
      score = 0
      gameOver.visible = true;
      gameOver.depth = gameOver.depth+1
      restart.visible = true;
      restart.depth = restart.depth+1

          chef.velocityX = 0;
          chef.velocityY = 0;
          obstacleGroup.setVelocityXEach(0);
          ingredientes.setVelocityXEach(0);
        
          obstacleGroup.setLifetimeEach(-1);
          ingredientes.setLifetimeEach(-1);
         
          chef.y = 200;

          if(mousePressedOver(restart)) 
          {
                reset();
          }

    } 
    spawnObstaclesTop();
    ingredientesTop();
      drawSprites();
      Score();  
}

function reset()
{
  gameState = PLAY;
  gameOver.visible = false;
  restart.visible = false;
  obstacleGroup.destroyEach();
  ingredientes.destroyEach();

  score = 1;
}


function spawnObstaclesTop() 
{
      if(World.frameCount % 60 === 0) {
        obstacleGroup = createSprite(400,50,40,50);
    
    obstacleGroup.scale = 0.1;
    obstacleGroup.velocityX = -4;


    obstacleGroup.y = Math.round(random(10,100));

    var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: obstacleGroup.addImage(orangeImg);
              break;
      case 2: obstacleGroup.addImage(redImg);
              break;
      default: break;
    }

   obstacleGroup.lifetime = 100;
    
   
      }
}

function ingredientesTop() 
{
      if(World.frameCount % 60 === 0) {
        obstacleGroup = createSprite(400,50,40,50);
    
    ingredientes.scale = 0.1;
    ingredientes.velocityX = -4;


    ingredientes.y = Math.round(random(10,100));

    var rand = Math.round(random(1,7));
    switch(rand) {
      case 1: ingredientes.addImage(chile);
              break;
      case 2: ingredientes.addImage(hamburguesa);
              break;
      case 3: ingredientes.addImage(carne);
              break;
      case 4: ingredientes.addImage(lechuga);
              break;
      case 5: ingredientes.addImage(ketchup);
              break;
      case 6: ingredientes.addImage(jitomate);
              break;
      case 7: ingredientes.addImage(apple);
              break;

      default: break;
    }

   ingredientes.lifetime = 100;
    
   
      }
}


function Score()
{
         if(chef.isTouching(ingredientes))
         {
           score = score + 1;
         }
         else(chef.isTouching(obstacleGroup))
         {
           score = score - 1;
         }

        textFont("algerian");
        textSize(30);
        fill("Black");
        text("Puntuación: "+ score, 100, 50);
}
 

