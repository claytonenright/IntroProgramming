   // Global Variables
var visited0 = false;
var visited1 = false;
var visited2 = false;
var visited3 = false;
var visited4 = false;
var visited5 = false;
var visited6 = false;
var visited7 = false;
var visited8 = false;
var visited9 = false;

   // Locations
function visit0() {
   dispMsg("You're standing in the middle of a large field.");
   if (! visited0) {
      addScore(0);
      visited0 = true;
   }
   
   availButton();
}
         
function visit1() {
   dispMsg("A range of mountains looms in the distance. You feel a soft breeze carrying the smell of bacon from the east.");
   if (! visited1) {
      addScore(5);
      visited1 = true;
   }
   
   availButton();
}
         
function visit2() {
   dispMsg("You approach the edge of a cliff. You can't tell how far the drop is and you hear the wind whistling in the canyon.");
   if (! visited2) {
      addScore(5);
      visited2 = true;
   }
   
   availButton();
}
         
function visit3() {
   dispMsg("A large river blocks your way. There is an ancient tree nearby. A large object lurks in the west.");
   if (! visited3) {
      addScore(5);
      visited3 = true;
   }
   
   availButton();
}
         
function visit4() {
   dispMsg("You've found an old cottage, the door to the east seems to be open.");
   if (! visited4) {
      addScore(5);
      visited4 = true;
   }
   
   availButton();
}
         
function visit5() {
   dispMsg("Inside the cottage you find some scattered furniture and bacon grease everywhere. There is a hole in the southern wall.");
   if (! visited5) {
      addScore(5);
      visited5 = true;
   }
   
   availButton();
}

function visit6() {
   dispMsg("A small path leads from the house to the east...");
   if (! visited6) {
      addScore(5);
      visited6 = true;
   }
   
   availButton();
}

function visit7() {
   dispMsg("You've come across a gigantic plate of bacon. Control yourself now.");
   if (! visited7) {
      addScore(5);
      visited7 = true;
   }
   
   availButton();
}

function visit8() {
   dispMsg("No, you are not dreaming. There is a four-foot tall hunk of honey baked ham sitting right in front of you.");
   if (! visited8) {
      addScore(5);
      visited8 = true;
   }
   
   availButton();
}

function visit9() {
   dispMsg("This is the last room. It's purple on the map. Eat your bacon.");
   if (! visited9) {
      addScore(5);
      visited9 = true;
   }
   
   availButton();
}