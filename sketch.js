// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

// Simple Particle System
// Edited Video: https://www.youtube.com/watch?v=UcdigVaIYAk

particles = [];
//var letters = ['A','B','C','D','E','F','G','H','I','L','M','N','O','P','Q','R','S','T','U','V','Z','1','2','3','4','5','6','7','8','9','0','è','@','#','ù']

var s = "ABCDE"
         //E F G H I L M N O P Q R S T U V Z 1 2 3 4 5 6 7 8 9 0 ? é + @ # §];
var counter = 0;
//var myStrArr = splitTokens(s, '');

function setup() {
  createCanvas(windowWidth,windowHeight);
    background(0);
    //frameRate(20);
    
}

function draw() {
  background(0);
  //for (let i = 0; i < 5; i++) {
    let p = new Particle();
    particles.push(p);
 // }
  for (let i = particles.length - 1; i >= 50; i--) {
    
    particles[i].show();
      particles[i].update();
      if (keyIsPressed == true){
       particles.splice(0,1);
      }
//      if (keyIsPressed == true){
//          if (key == 'a'){
//          particles[i].keyPressed();
//      }}
//    if (particles[i].finished()) {
//      // remove this particle
//      particles.splice(i, 1);
//    }
  }
    
}

class Particle {

  constructor() {
    this.x = mouseX;
    this.y = mouseY;
    this.vx = random(-1, 1);
    this.vy = random(-1, 1);
      this.letter = s.charAt(counter); 
      this.size = random(10,60);
      this.z = random (0,360);
      this.vz = random (-0.1,0.1);
      
    //this.alpha = 255;
  }

//  finished() {
//    return this.alpha < 0;
//  }

  update() {
      
    this.x += this.vx;
    this.y += this.vy;
      pop();
       if ((this.x > width)||(this.x < 0)) {
      this.vx *= -1;
    }
    if ((this.y > height)||(this.y < 0)) {
      this.vy *= -1;
    }
      this.z += this.vz
    //this.alpha -= 5;
  }

  show() {
    //noStroke();
    stroke(255);
    fill(255);
     
  textSize(this.size);
     textAlign(CENTER); 
      
      push();
     translate(this.x,this.y); 
    rotate(this.z);
  text(this.letter, 0,0);
      pop();
  counter +=1;
  
  if(counter >= s.length){
    counter = 0;}

   
       }
//keyPressed() {
//       particles.splice(i,1);
// // return // prevent any default behaviour
//
//      
//  }

}
