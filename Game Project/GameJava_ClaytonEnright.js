   // Global Variables
var playerLocation = 0;
var counter = 0;
var inventory = [];
var hasBacon = false;
var hasHam = false;
var hasSilverware = false;
var hasPig = false;

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


   
   //  Location Specific Functions   
function checkLocation() {
   dispMsg(locales[playerLocation].desc);
   availButton();
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
         
   // Message Functions   
function dispMsg(msg) {
   document.getElementById("taMain").value = msg + "\n\n" + document.getElementById("taMain").value;
}

function helpMsg() {
   dispMsg("Use the buttons below! Or, type in \'n, s, e, or w\' to move. Type in \'take\' to acquire an item. Type in \'inv\' to check your inventory.");
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
         
   // Player Actions         
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
              helpMsg();
           } else if (txtInput.value === "take") {
                takeItem();
             } else if (txtInput.value === "inv") {
                  checkInv();
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
   switch (playerLocation) {
   case 0: playerLocation = 2; 
           checkLocation(); 
              break;
   case 3: playerLocation = 8; 
           checkLocation(); 
              break;
   case 4: playerLocation = 0; 
           checkLocation(); 
              break;
   case 5: playerLocation = 4; 
           checkLocation(); 
              break;
   case 7: playerLocation = 1; 
           checkLocation(); 
              break;
   case 9: playerLocation = 6; 
           checkLocation();
              break;
   }
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

   // Item Functions
function Item() {
   this.id = "";
   this.name = "";
   this.desc = "";
   this.toString = function() {return "[" + this.id + ", " + this.name + ", " + "\"" + this.desc + "\"" + "]";}
}

var Bacon = new Item();
Bacon.id = 1;
Bacon.name = "Bacon";
Bacon.desc = "A large portion of bacon.";

var Ham = new Item();
Ham.id = 2;
Ham.name = "Ham";
Ham.desc = "A chunk of ham.";

var Pig = new Item();
Pig.id = 3;
Pig.name = "Pig";
Pig.desc = "A friendly swine.";

var Silverware = new Item();
Silverware.id = 4;
Silverware.name = "Silverware";
Silverware.desc = "A fork and a knife.";

function takeItem() {
   if (playerLocation === 7 && !hasBacon) {
      hasBacon = true;
      inventory.push(Bacon);
      dispMsg("You put some of the bacon in your pockets.");
      addScore(5);
   } else if (playerLocation === 8 && !hasHam) {
        hasHam = true;
        inventory.push(Ham);
        dispMsg("You pull off a hearty piece of the honey ham.");
        addScore(5);
     } else if (playerLocation === 2 && !hasSilverware) {
          hasSilverware = true;
          inventory.push(Silverware);
          dispMsg("You put a fork and a knife in your pockets. Just in case.");
          addScore(5);
       } else if (playerLocation === 5 && !hasPig) {
            hasPig = true;
            inventory.push(Pig);
            dispMsg("You call over to the pig and he seems to listen and follow.");
            addScore(5);
         } else {dispMsg("There are no items here!");}
}

function checkInv() {
   for (var i = 0; i < inventory.length; i++) {
      dispMsg(inventory[i].name + ", " + inventory[i].desc);
   }
}