   // Global Variables
var playerLocation = 0;
var totalScore = 0;
var inventory = [];
var NORTH = 0;
var SOUTH = 1;
var EAST  = 2;
var WEST  = 3;
var nav = [ //  N   S   E   W
   /* 0 */   [  1,  3,  4,  2],
   /* 1 */   [ -1,  0,  7, -1],
   /* 2 */   [ -1, -1,  0, -1],
   /* 3 */   [  0, -1, -1,  8],
   /* 4 */   [ -1, -1,  5,  0],
   /* 5 */   [ -1,  6, -1,  4],
   /* 6 */   [  5, -1,  9, -1],
   /* 7 */   [ -1, -1, -1,  1],
   /* 8 */   [ -1, -1,  3, -1],
   /* 9 */   [ -1, -1, -1,  6]
          ];
          
var hideBtnArray = [ // N  S  E  W
          /* 0 */     [ 1, 1, 1, 1],
          /* 1 */     [ 0, 1, 1, 0],
          /* 2 */     [ 0, 0, 1, 0],
          /* 3 */     [ 1, 0, 0, 1],
          /* 4 */     [ 0, 0, 1, 1],
          /* 5 */     [ 0, 1, 0, 1],
          /* 6 */     [ 1, 0, 1, 0],
          /* 7 */     [ 0, 0, 0, 1],
          /* 8 */     [ 0, 0, 1, 0],
          /* 9 */     [ 0, 0, 0, 1]
                    ];

   // Load Function         
function init() {
   dispMsg("Hello and welcome to Pork! The Ham-Based parody of Zork!\nCan you prepare the feast?!");
   checkLocation();
   document.getElementById("baconpic").style.visibility = "hidden";
}
      
   // Score Keeping      
function addScore(points) {
   var score = document.getElementById("scoreBox");
   totalScore = totalScore + points;
   score.value = totalScore;
}
   
   //  Location Specific Functions   
function checkLocation() {
   if (playerLocation === 9 && inventory.length === 4) {
      document.getElementById("baconpic").style.visibility = "visible";
      locale9.desc = "Here you find a picnic table with a lovely table cloth...\nCongratulations! You win! Now dig in!";
      addScore(35);
   }
   dispMsg(locales[playerLocation].desc);
   if (locales[playerLocation].visit === false) {
      addScore(5);
      locales[playerLocation].visit = true;
   }
   canGoNorth();
   canGoSouth();
   canGoEast();
   canGoWest();
}

function canGoNorth() {
   var btnNorth = document.getElementById('north');
   if (hideBtnArray[playerLocation][0] === 1) {
      btnNorth.disabled = false;
   } else {btnNorth.disabled = true;}
}

function canGoSouth() {
   var btnSouth = document.getElementById('south');
   if (hideBtnArray[playerLocation][1] === 1) {
      btnSouth.disabled = false;
   } else {btnSouth.disabled = true;}
}

function canGoEast() {
   var btnEast = document.getElementById('east');
   if (hideBtnArray[playerLocation][2] === 1) {
      btnEast.disabled = false;
   } else {btnEast.disabled = true;}
}

function canGoWest() {
   var btnWest = document.getElementById('west');
   if (hideBtnArray[playerLocation][3] === 1) {
      btnWest.disabled = false;
   } else {btnWest.disabled = true;}
}
         
   // Message Functions   
function dispMsg(msg) {
   document.getElementById("taMain").value = msg + "\n\n" + document.getElementById("taMain").value;
}

function helpMsg() {
   dispMsg("Use the buttons below! Or, type in \'n, s, e, or w\' to move. Type in \'take\' to acquire an item. Type in \'inv\' to check your inventory. Prepare a feast!!!");
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

function nextLoc(dir) {         
   var newLoc = nav[playerLocation][dir];
   if (newLoc >= 0) {
      playerLocation = newLoc;
   } else {errorLoc();}
}
                           
function moveNorth() {
   nextLoc(NORTH);  
   checkLocation();
}
         
function moveSouth() {
   nextLoc(SOUTH);
   checkLocation();
}
         
function moveWest() {
   nextLoc(WEST);
   checkLocation();
}
         
function moveEast() {
   nextLoc(EAST);
   checkLocation();
}

function takeItem() {
   if (locales[playerLocation].item === null) {
      dispMsg("There are no items here!");
   } else {
        inventory.push(locales[playerLocation].item);
        dispMsg("You place the \"" + locales[playerLocation].item.name + "\" in your inventory.");
        locales[playerLocation].item = null;
        addScore(5);
     }
}

function checkInv() {
   if (inventory.length === 0) {
      dispMsg ("You don't have any items!");
   }
   for (var i = 0; i < inventory.length; i++) {
      dispMsg("[" + inventory[i].name + ", " + inventory[i].desc + "]");
   }
}