pronoun = ["i", "you", "they", "he", "she"]
pronounsw = ["do you", "does he", "do they", "does she", "do i"]
pronounsw2 = ["you look", "he looks", "she looks", "they look"]
pronouns = ["they are", "he is", "she is", "i am", "you are"]
dues = ["I am owed.", "I am not entitled to what I have.", "I've stolen it.", " ", " "]

function setup() {
  console.log
	createCanvas(windowWidth,windowHeight)
  letterIndex = 0
  owedout = ""
 // function mousePressed(event) {
 // console.log(event);
//}
}
  	

function draw() {
  background(255)
  
    c = color(0)
  fill(c); 
noStroke(); 
ellipse(155, 420, 300, 300)
  
  c = color(65); 
fill(c); 
ellipse(150, 415, 250, 245)

  c = color(100); 
fill(c); 
ellipse(155, 410, 200, 205)

 c = color(150); 
fill(c); 
ellipse(155, 405, 160, 165)
  

  fill(0)
  textFont("Courier")
  textSize(15)


  intro = makeIntro()
  text(intro, 40, 40)
  taken = makeTaken()
  text(taken, 40, 140)

  cool = makeCool()
  text(cool, 100, 100)


  textSize(25)
  additions = makeAdditions()
  text(additions, 660, 40)

  textSize(12)
  red = makeRed()
  text(red, 100, 380)


  c = color(0); 
stroke(c)
noFill()
ellipse(900, 640, 300, 300)

owed = makeOwed()
letter = owed[letterIndex]   
owedout = owedout + letter
letterIndex++

  numberOfLetters = owed.length

 text(owed, 780, 640)

 // if(letterIndex >= numberOfLetters) {
  //  letterIndex = 0
  //  owedout = ""
 //   frameRate(.5)
 // } else {frameRate(10)}

}

function makeIntro(){
  words1 = "in love with his image" + "\n" + "she must not die" + "\n" + "because then he would lose"
  
  intro = words1 
  return intro
  
}


function makeTaken(){
   words1 =  "distort" + "\n" + "to undistort" + "\n" + "to appear undistorted" + "\n" + "without having to distort"
  
  taken = words1
  return taken
}

function makeCool(){
  
himself = "HIMSELF" 
cool = himself

 
 if(mouseIsPressed) {
  fill(0);
  himself = "HIMSELF" 
  text(himself, 100, 100)

  } else {
  fill(255); 
  himself = "HIMSELF" 
  text(himself, 100, 100)
    
}
print(mouseIsPressed)

 return cool

}

function makeAdditions(){
  words1 = "the dreams continue, despite." + "\n\n"
  words2 = "one day " + random(pronoun) + " will outgrow the sun." + "\n\n"
  words3 = "maybe " + random(pronoun) + " won't know until tomorrow." + "\n\n"
  words4 = "'fuck you' " + random(pronoun) + " will say." + "\n" + "when it comes from the diaphragm " + random(pronoun) + " will mean it" + "\n\n"
  words5 = random(pronounsw) + " wonder what " + random(pronounsw2) + "\n" + "like through the bedroom window at night?" + "\n\n"
  words6 = random(pronoun) + " can fall in love with someone before" + "\n" + "realizing " + random(pronouns) + " a serial killer." + "\n\n"

   frameRate(.2)
   c = color(255, 204, 0)
   fill(c)


   additions = words1 + words2 + words3 + words4 + words5 + words6 
   return additions
}

function makeRed(){
  words = random(pronouns) + " wearing" + "\n" + "all red" + "\n" + "but only out of" + "\n" + "the corner of" + "\n" + "the eye"

  frameRate(.05)
  fill(240)

  red = words
  return red
}

function makeOwed(){
  words = random(dues)

  frameRate(0.2)
  fill(20)
  owed = words
  return owed

}

function makeTrain(){
  intro = makeIntro()
  taken = makeTaken()
  cool = makeCool()
  additions = makeAdditions()
  red = makeRed()
  owed = makeOwed()

  train = intro + taken + cool + additions + red + owed
  return train
}




