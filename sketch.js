var gato, imgGato, imgGato2; 
var rato, imgRato, imgRato2; 
var jardim, imgJardim; 

function preload() {
    //load the images here
    imgGato = loadImage ("cat1.png"); 
    imgGato2 = loadAnimation ("cat2.png", "cat3.png", "cat4.png"); 
    imgRato = loadAnimation ("mouse1", "mouse2", "mouse3"); 
    imgRato2 = loadAnimation ("mouse4.png"); 
    imgJardim = loadImage ("garden.png"); 

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    jardim = createSprite (1000,800); 
    jardim.addImage ("jardim", imgJardim); 

    gato = createSprite (870,600); 
    gato.addImage ("gatoSentado", imgGato); 
    gato.scale = 0.2; 

    rato = createSprite (470,600); 
    rato.addAnimation ("ratoProvocando", imgRato); 
    rato.scale = 0.2; 


}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    if (keyDown (RIGHT_ARROW)){
        gato.addAnimation ("gatoAndando", imgGato2); 
        gato.changeAnimation ("gatoAndando"); 
        gato.velocityX = -4; 
    }

    if (gato.x - rato.x < (gato.width - rato.width)/2);{
        gato.changeAnimation ("gatoSentado"); 
        rato.addAnimation ("gatoAndando", imgGato2); 
        rato.changeAnimation ("gatoAndando"); 
    } 

    drawSprites();
}


//function keyPressed(){

  //For moving and changing animation write code here


//}
