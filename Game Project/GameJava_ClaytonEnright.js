   // Global Variables

var playerLocation = 0;
var counter = 0;
var visited0 = false;
var visited1 = false;
var visited2 = false;
var visited3 = false;
var visited4 = false;
var visited5 = false;
         
function init() {
   checkLocation();
}
      
   //Score Keeping
      
function addScore(points) {
   var score = document.getElementById("scoreBox");
   counter = counter + points;
   score.value = counter;
}
         
function visit0() {
   dispMsg("You're standing in the middle of a large field.");
   if (! visited0) {
      addScore(5);
      visited0 = true;
   }
}
         
function visit1() {
   dispMsg("A range of mountains looms in the distance. You feel a soft breeze.");
   if (! visited1) {
      addScore(5);
      visited1 = true;
   }
}
         
function visit2() {
   dispMsg("You approach the edge of a cliff. You can't tell how far the drop is and you hear the wind whistling in the canyon.");
   if (! visited2) {
      addScore(5);
      visited2 = true;
   }
}
         
function visit3() {
   dispMsg("A large river blocks your way. There is an ancient tree nearby.");
   if (! visited3) {
      addScore(5);
      visited3 = true;
   }
}
         
function visit4() {
   dispMsg("You've found an old cottage, the door to the east seems to be open.");
   if (! visited4) {
      addScore(5);
      visited4 = true;
   }
}
         
function visit5() {
   dispMsg("This is the sixth room! Good for you!");
   if (! visited5) {
      addScore(5);
      visited5 = true;
   }
}
         
function checkLocation() {
   switch(playerLocation) {
      case 0: visit0();   break;
      case 1: visit1();   break;
      case 2: visit2();   break;
      case 3: visit3();   break;
      case 4: visit4();   break;
      case 5: visit5();   break;
      default: errorLoc();
   }  
}
         
   //Message Functions
      
function dispMsg(msg) {
   document.getElementById("taMain").value = msg + "\n\n" + document.getElementById("taMain").value;
}
         
function errorLoc() {
   dispMsg("You can't go there!");
}
         
   //Movement Functions   
         
function btnGo_click() {
   var txtInput = document.getElementById("txtCommand");
            
   if (txtInput.value === "n" || txtInput.value === "N") {
      moveNorth();
   } else if (txtInput.value === "s" || txtInput.value === "S") {
         moveSouth();
     } else if (txtInput.value === "e" || txtInput.value === "E") {
            moveEast();
       } else if (txtInput.value === "w" || txtInput.value === "W") {
               moveWest();
         } else {dispMsg("Command not recognized. Type n or N, s or S, e or E, w or W")}
            
}
                           
function moveNorth() {
   if (playerLocation === 3) {
      playerLocation = 0;
   } else if (playerLocation === 0) {
        playerLocation = 1;
     } else {errorLoc();}
            
   checkLocation();
}
         
function moveSouth() {
   if (playerLocation === 1) {
      playerLocation = 0;
   } else if (playerLocation === 0) {
        playerLocation = 3;
     } else {errorLoc();}
            
   checkLocation();
}
         
function moveWest() {
   if (playerLocation === 4) {
      playerLocation = 0;
   } else if (playerLocation === 0) {
        playerLocation = 2;
     } else if (playerLocation === 5) {
          playerLocation = 4;
       } else {errorLoc();}
   
   checkLocation();
}
         
function moveEast() {
   if (playerLocation === 2) {
      playerLocation = 0;
   } else if (playerLocation === 0) {
        playerLocation = 4;
     } else if (playerLocation === 4) {
          playerLocation = 5;
       } else {errorLoc();}
   
    checkLocation();
}