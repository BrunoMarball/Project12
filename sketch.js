var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  //loadImage de path (camino)
  //loadAnimation de boy (niño)
 path = loadAnimation ("path.png");
 boy = loadAnimation ("Jake1.png", "Jake2.png", "jake3.png", "jake4.PNG");
}

function setup(){
  
  createCanvas(400,400);
 //crear sprite de path (camino) 
//agregar imagen de path
//Hacer que la pista sea un fondo en movimiento al darle velocidad Y.
path = createSprite(200,200,200,200);
path.addImage("path");
path.x = ground.width /2;
path.velocityY = -4;
path.scale=1.2;

//crear sprite de boy (niño)
//agregar animación para boy
boy = createSprite(50,180,20,50);
  trex.addAnimation("running");
boy.scale=0.08;
  
// crear  left Boundary (límite izquierdo)
leftBoundary=createSprite(0,0,100,800).visible = false;
////establecer visibilidad como false (falso) para límite izquierdo

//crear right Boundary (límite derecho)
rightBoundary=createSprite(410,0,100,800).visible = false;
//establecer visibilidad como false (falso) para límite izquierdo
}

function draw() {
  background("0");
  path.velocityY = 4;
  boy.M0ouseX;
  // boy moviéndose en el eje X con el mouse
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary, rightBoundary);
  // colisión de boy con los límites derecho e izquierdo invisibles 
  
  //código para reiniciar el fondo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
