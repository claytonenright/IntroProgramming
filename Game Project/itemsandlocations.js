   // Items
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



    // Locations
function Locale () {
   this.id = "";
   this.name = "";
   this.desc = ""; 
   this.item = "";
   this.visit = false;
   this.toString = function() {return "[" + this.id + ", " + this.name + ", " + "\"" + this.desc + "\"" + ", " + this.item + "]";}
}
            
var locale0 = new Locale();
locale0.id = 0;
locale0.name = "Start";
locale0.desc = "You're standing in the middle of a large field.";
locale0.item = null;
locale0.visit = true;

var locale1 = new Locale();
locale1.id = 1;
locale1.name = "Mountains";
locale1.desc = "A range of mountains looms in the distance. You feel a soft breeze carrying the smell of bacon from the east.";
locale1.item = null;
locale1.visit = false;

var locale2 = new Locale();
locale2.id = 2;
locale2.name = "Cliff";
locale2.desc = "You approach the edge of a cliff. You can't tell how far the drop is and you hear the wind whistling in the canyon. There appears to be some silverware near the edge.";
locale2.item = Silverware;
locale2.visit = false;

var locale3 = new Locale();
locale3.id = 3;
locale3.name = "River";
locale3.desc = "A large river blocks your way. There is an ancient tree nearby. A large object lurks in the west.";
locale3.item = null;
locale3.visit = false;

var locale4 = new Locale();
locale4.id = 4;
locale4.name = "Outside Cottage";
locale4.desc = "You've found an old cottage, the door to the east seems to be open.";
locale4.item = null;
locale4.visit = false;

var locale5 = new Locale();
locale5.id = 5;
locale5.name = "Cottage";
locale5.desc = "Inside the cottage you find some scattered furniture and bacon grease everywhere. A bunch of scared pigs are squealing in a the corner. There is a hole in the southern wall.";
locale5.item = Pig;
locale5.visit = false;

var locale6 = new Locale();
locale6.id = 6;
locale6.name = "Cottage Path";
locale6.desc = "A small path leads from the house to the east...";
locale6.item = null;
locale6.visit = false;

var locale7 = new Locale();
locale7.id = 7;
locale7.name = "Bacon Plate";
locale7.desc = "You've come across a gigantic plate of bacon. Control yourself now.";
locale7.item = Bacon;
locale7.visit = false;

var locale8 = new Locale();
locale8.id = 8;
locale8.name = "Ham Plate";
locale8.desc = "No, you are not dreaming. There is a four-foot tall hunk of honey baked ham sitting right in front of you.";
locale8.item = Ham;
locale8.visit = false;

var locale9 = new Locale();
locale9.id = 9;
locale9.name = "End";
locale9.desc = "Here you find a picnic table with a lovely table cloth...";
locale9.item = null;
locale9.visit = false;

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


