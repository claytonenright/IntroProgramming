   // Global Variables
var playerLocation = 0;
var counter = 0;
var hasBacon = false;
var hasHam = false;

   // Load Function         
function init() {
   dispMsg("Hello and welcome to Pork! The Ham-Based parody of Zork!");
   checkLocation();
}
      
   // Score Keeping      
function addScore(points) {
   var score = document.getElementById("scoreBox");
   counter = counter + points;
   score.value = counter;
}
   
   //  Location Maintenance Functions   
function checkLocation() {
   switch(playerLocation) {
      case 0: visit0();   break;
      case 1: visit1();   break;
      case 2: visit2();   break;
      case 3: visit3();   break;
      case 4: visit4();   break;
      case 5: visit5();   break;
      case 6: visit6();   break;
      case 7: visit7();   break;
      case 8: visit8();   break;
      case 9: visit9();   break;
      default: errorLoc();
   }  
}

function availButton() {
   switch(playerLocation) {
      case 0: document.getElementById('north').style.visibility = 'visible';
              document.getElementById('south').style.visibility = 'visible';
              document.getElementById('east').style.visibility = 'visible';
              document.getElementById('west').style.visibility = 'visible';
         break;
      case 1: document.getElementById('north').style.visibility = 'hidden';
              document.getElementById('south').style.visibility = 'visible';
              document.getElementById('east').style.visibility = 'visible';
              document.getElementById('west').style.visibility = 'hidden';
         break;
      case 2: document.getElementById('north').style.visibility = 'hidden';
              document.getElementById('south').style.visibility = 'hidden';
              document.getElementById('east').style.visibility = 'visible';
              document.getElementById('west').style.visibility = 'hidden';
         break;
      case 3: document.getElementById('north').style.visibility = 'visible';
              document.getElementById('south').style.visibility = 'hidden';
              document.getElementById('east').style.visibility = 'hidden';
              document.getElementById('west').style.visibility = 'visible';   
         break;
      case 4: document.getElementById('north').style.visibility = 'hidden';
              document.getElementById('south').style.visibility = 'hidden';
              document.getElementById('east').style.visibility = 'visible';
              document.getElementById('west').style.visibility = 'visible';   
         break;
      case 5: document.getElementById('north').style.visibility = 'hidden';
              document.getElementById('south').style.visibility = 'visible';
              document.getElementById('east').style.visibility = 'hidden';
              document.getElementById('west').style.visibility = 'visible';   
         break;
      case 6: document.getElementById('north').style.visibility = 'visible';
              document.getElementById('south').style.visibility = 'hidden';
              document.getElementById('east').style.visibility = 'visible';
              document.getElementById('west').style.visibility = 'hidden';   
         break;
      case 7: document.getElementById('north').style.visibility = 'hidden';
              document.getElementById('south').style.visibility = 'hidden';
              document.getElementById('east').style.visibility = 'hidden';
              document.getElementById('west').style.visibility = 'visible';   
         break;
      case 8: document.getElementById('north').style.visibility = 'hidden';
              document.getElementById('south').style.visibility = 'hidden';
              document.getElementById('east').style.visibility = 'visible';
              document.getElementById('west').style.visibility = 'hidden';   
         break;
      case 9: document.getElementById('north').style.visibility = 'hidden';
              document.getElementById('south').style.visibility = 'hidden';
              document.getElementById('east').style.visibility = 'hidden';
              document.getElementById('west').style.visibility = 'visible';   
         break;
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

function errorInput() {
   dispMsg("I don't understand that command. Type \'help\' for assistance.")
}

function txtCommand_keyPress(keyboardEvent) {
   if (keyboardEvent.which === 13) { //ENTER key
      btnGo_click();
   }
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
         } else if (txtInput.value === "help") {
              dispMsg("Type in \'N, S, E, or W\' to move. Type in \'take\' to acquire an item.");
           } else {errorInput();}
            
}
                           
function moveNorth() {
   if (playerLocation === 3) {
      playerLocation = 0;
   } else if (playerLocation === 0) {
        playerLocation = 1;
     } else if (playerLocation === 6) {
          playerLocation = 5;
       } else {errorLoc();}
            
   checkLocation();
}
         
function moveSouth() {
   if (playerLocation === 1) {
      playerLocation = 0;
   } else if (playerLocation === 0) {
        playerLocation = 3;
     } else if (playerLocation === 5) {
          playerLocation = 6;
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
       } else if (playerLocation === 3) {
            playerLocation = 8;
         } else if (playerLocation === 9) {
              playerLocation = 6;
           } else if (playerLocation === 7) {
                playerLocation = 1;
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
       } else if (playerLocation === 1) {
            playerLocation = 7;
         } else if (playerLocation === 8) {
              playerLocation = 3;
           } else if (playerLocation === 6) {
                playerLocation = 9;
             }
       else {errorLoc();}
   
    checkLocation();
}