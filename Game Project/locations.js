   // Location Scoring
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

function visit0() {
   if (! visited0) {
      addScore(0);
      visited0 = true;
   }   
}
         
function visit1() {
   if (! visited1) {
      addScore(5);
      visited1 = true;
   }   
}
         
function visit2() {
   if (! visited2) {
      addScore(5);
      visited2 = true;
   }   
}
         
function visit3() {
   if (! visited3) {
      addScore(5);
      visited3 = true;
   }  
}
         
function visit4() {
   if (! visited4) {
      addScore(5);
      visited4 = true;
   }   
}
         
function visit5() {
   if (! visited5) {
      addScore(5);
      visited5 = true;
   }   
}

function visit6() {
   if (! visited6) {
      addScore(5);
      visited6 = true;
   }  
}

function visit7() {
   if (! visited7) {
      addScore(5);
      visited7 = true;
   }   
}

function visit8() {
   if (! visited8) {
      addScore(5);
      visited8 = true;
   }   
}

function visit9() {
   if (! visited9) {
      addScore(5);
      visited9 = true;
   }
}


   // Location Objects
function Locale () {
   this.id = "";
   this.name = "";
   this.desc = ""; 
   this.item = "";
   this.toString = function() {return "[" + this.id + ", " + this.name + ", " + "\"" + this.desc + "\"" + ", " + this.item + "]";}
}
            
var locale0 = new Locale();
locale0.id = 0;
locale0.name = "Start";
locale0.desc = "You're standing in the middle of a large field.";
locale0.item = false;


var locale1 = new Locale();
locale1.id = 1;
locale1.name = "Mountains";
locale1.desc = "A range of mountains looms in the distance. You feel a soft breeze carrying the smell of bacon from the east.";
locale1.item = false;


var locale2 = new Locale();
locale2.id = 2;
locale2.name = "Cliff";
locale2.desc = "You approach the edge of a cliff. You can't tell how far the drop is and you hear the wind whistling in the canyon. There appears to be some silverware near the edge.";
locale2.item = "Silveware";


var locale3 = new Locale();
locale3.id = 3;
locale3.name = "River";
locale3.desc = "A large river blocks your way. There is an ancient tree nearby. A large object lurks in the west.";
locale3.item = false;


var locale4 = new Locale();
locale4.id = 4;
locale4.name = "Outside Cottage";
locale4.desc = "You've found an old cottage, the door to the east seems to be open.";
locale4.item = false;


var locale5 = new Locale();
locale5.id = 5;
locale5.name = "Cottage";
locale5.desc = "Inside the cottage you find some scattered furniture and bacon grease everywhere. A scared pig is hiding in a corner. There is a hole in the southern wall.";
locale5.item = "Pig";


var locale6 = new Locale();
locale6.id = 6;
locale6.name = "Cottage Path";
locale6.desc = "A small path leads from the house to the east...";
locale6.item = false;

var locale7 = new Locale();
locale7.id = 7;
locale7.name = "Bacon Plate";
locale7.desc = "You've come across a gigantic plate of bacon. Control yourself now.";
locale7.item = "Bacon";

var locale8 = new Locale();
locale8.id = 8;
locale8.name = "Ham Plate";
locale8.desc = "No, you are not dreaming. There is a four-foot tall hunk of honey baked ham sitting right in front of you.";
locale8.item = "Ham";

var locale9 = new Locale();
locale9.id = 9;
locale9.name = "End";
locale9.desc = "This is the last room. It's purple on the map. Eat your bacon.";
locale9.item = "Boss";

var locales = [];
locales[0] = locale0;
locales[1] = locale1;
locales[2] = locale2;
locales[3] = locale3;
locales[4] = locale4;
locales[5] = locale5;
locales[6] = locale6;
locales[7] = locale7;
locales[8] = locale8;
locales[9] = locale9;


