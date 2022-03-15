var apple,orangeL,redL;
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

}


function setup(){
  
  createCanvas(800,450);
// Fondo en movimiento
cocina=createSprite(400,225,0,0);
cocina.addImage(cocinaImg);
cocina.scale = 1.4;

 chef = createSprite(160,400,100,60);
 chef.scale = 1.5;
 chef.addImage(chefImg);

 moneda = createSprite(50,50,50,50);
 moneda.scale = 0.09;
 moneda.addImage(monedaImg);

}

function draw() {
  background(0);
  
  // Niño moviéndose en el eje X con el mouse
  chef.x = World.mouseX;
  
  edges= createEdgeSprites();
  chef.collide(edges);
  spawnIngredientes();
   drawSprites();
 /*   var select_sprites = Math.round(random(1,12));
  
   if (frameCount % 80 == 0) {
     if (select_sprites ) {
        createRed();
     } else if (select_sprites) {
       createOrange();
     }
   }  */
 
}
function spawnIngredientes() 
{
      if(World.frameCount % 60 === 0) {
        ingredientes = createSprite(400,40,40,50);
    
    ingredientes.scale = 0.1;
    ingredientes.velocityY = 3;

    ingredientes.x = Math.round(random(10,400));
 
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
    ingredientes.lifetime = 150;
    chef.depth = chef.depth + 1;
  }
}

// function createChile(){
// chile = createSprite (40, 10, 10, 10);
// chile.addImage(chileImg);
// chile.scale=0.07;
// chile.velocityY = 3;

// }
// function createCarne(){
// carne = createSprite(40,10, 10, 10);
// carne.addImage(carneImg);
// carne.scale=0.07;
// carne.velocityY = 3;
// }

// function createHamburguesa(){
// hamburguesa = createSprite(40,10, 10, 10);
// hamburguesa.addImage(hamburguesaImg);
// hamburguesa.scale=0.07;
// hamburguesa.velocityY = 3;
// }

// function createJitomate(){
// jitomate = createSprite(40,10, 10, 10);
// jitomate.addImage(jitomateImg);
// jitomate.scale=0.07;
// jitomate.velocityY = 3;
// }

// function createKepchup(){
// ketchup = createSprite(40,10, 10, 10);
// ketchup.addImage(ketchupImg);
// ketchup.scale=0.07;
// ketchup.velocityY = 3;
// }

// function createLechuga(){
// lechuga = createSprite(40,10, 10, 10);
// lechuga.addImage(lechugaImg);
// lechuga.scale=0.07;
// lechuga.velocityY = 3;
// }

// function createApples() {
// apple = createSprite(40,10, 10, 10);
// apple.addImage(appleImg);
// apple.scale=0.07;
// apple.velocityY = 3;
  
// }

function createOrange() {
 orangeL = createSprite(40,10, 10, 10);
 orangeL.addImage(orangeImg);
 orangeL.scale=0.08;
 orangeL.velocityY = 3;
 }

 function createRed() {
 redL = createSprite(40,10, 10, 10);
 redL.addImage(redImg);
 redL.scale=0.06;
   redL.velocityY = 3;
 }
