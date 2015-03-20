/*-- 
   ADVENTURE GAME
   ORIGINALLY by John and Tom 

   Nikki & Linda: Fixed switch/case in first prompt. Noticed bug on "2. Castle" -> "3.Inventory" on line # 116.
                -- */
//Mariah and Sean tried fixing a bug with the inventory... good luck?!
//We also hacked in a fix since the invisible cloak was not being detected.
//Teresa nd Greg fixed iventory on the mainscreen - needed to change the parameter in line 36
var inventory = ["Flimsy Sword", "Juggling Balls", "Broken Compass"]; // global value is not need for all the functions parameters.
var hasCloak = false;

var readline = require('readline');
var prompt = readline.createInterface({input: process.stdin, output: process.stdout});

function mainMenu() {
  console.log("------------------------")
  console.log("You wake up in a stranger's bed with a stranger's arm draped across your chest.\nYou have no idea how you got there. What do you do? (Enter a number to select an option)");
  console.log("1 - Go to 'Cave'");
  console.log("2 - Go to 'Castle'");
  console.log("3 - View Inventory");
  console.log("4 - Quit");

  prompt.question("Please select a function (1-4): ", function(answer) {
      

      switch (answer){
        case "1":
          caveRoom();
          break;

        case "2":
          castleRoom();
          break;

        case "3":
          viewInventory(inventory);
          mainMenu();
          break;

        case "4":
          exitProgram();
          break;

        default:
          console.log("Bad input, please try again!");
          mainMenu();
      }
      //___________KK____________Main menu was rep.ing 3x w fixed w/ a switch
      // if (answer == 1) {         
      //  caveRoom();
      // } else if (answer == 2) {
      //  castleRoom();
      // } else if (answer == 3) {
      //  viewInventory(mainMenu);
      // } else if (answer == 4) {
      //  exitProgram();
      // } else {
      //  console.log("Bad input, please try again!");
      //  mainMenu();
      // }
    });
}

function exitProgram() {
  console.log("Thank you! Goodbye!");
  process.exit(0);
}

function caveRoom() {
  console.log("------------------------");
  console.log("You've found a deep and bottomless cave. It's scary and damp. ");
  console.log("1 - Search around");
  console.log("2 - Fight an endless horde of goblins");
  console.log("3 - View Inventory");
  console.log("4 - Return to the Bedroom");

  prompt.question("Please select a function (1-4): ", function(answer) {
      
      if (answer == 1) {
        console.log("Searching in the darkness you find an invisible cloak. Somehow.");
        pickItem( "Invisible Cloak");   //You shouldn't be able to pick option 1 more than once ____kk_____works now 
        hasCloak=true;
        caveRoom();
      } else if (answer == 2) { //runs three times why????
        fight();
      } else if (answer == 3) {
        viewInventory(inventory);
        //Removed callback parameter and inserted this function call. The callback did not appear to be used?
        caveRoom();
      } else if (answer == 4) {
        mainMenu();
      } else {
        console.log("Bad input, please try again!");
        caveRoom(inventory);
      }
  });
}

function pickItem(item) {
  //console.log(typeof inventory);
  inventory.push(item);
  return inventory;
}

function fight() {
  for (var i=0; i<inventory.length; i++) {
    if (inventory[i] == "Invisible Cloak" || hasCloak===true) {
      console.log("You kill goblins! Hooray!");
      caveRoom();
    } else {
      console.log("You didn't have the invisible cloak to dodge the attacks.\nYou're dead and you'll now be revived back in the bedroom");
      mainMenu();
    }
  }
}

function viewInventory(inventory, callback) {
  console.log("Here's everything in your inventory: ");

  //console.log("DEBUG: showing inventory length: " + inventory.length);    //debugging
  for (var i=0; i<inventory.length; i++) {
    console.log(inventory[i]);
  }
//  callback(inventory);
}

function castleRoom() {
  console.log("------------------------");
  console.log("Hopping out the window, you wind up at a castle down the road");
  console.log("In the Great hall you spot a 'Treasure Chest' and a hole in the wall.")
  console.log("1 - Look for Item in the 'Treasure Chest'");
  console.log("2 - Look for Item in the Hole");
  console.log("3 - View Inventory");
  console.log("4 - Return to the Bedroom");

  prompt.question("Please select a function (1-4): ", function(answer) {
      
      if (answer == 1) {          
        console.log("You just picked up a Golden Chalice and drank from the cup.\nYou're dead from poison and you'll now be revived back in the bedroom");
        console.log(inventory);
        inventory.push("Golden Chalice");
        mainMenu(inventory);
      } else if (answer == 2) {
        console.log("You've discovered a teleporter and you'll now be teleported to the Cave");
        pickItem(inventory, "Teleporter");
        caveRoom(inventory);
      } else if (answer == 3) {
        viewInventory(inventory);
        castleRoom();
      } else if (answer == 4) {
        mainMenu();
      } else {
        console.log("Bad input, please try again!");
        castleRoom(inventory);
      }
  });
}

process.stdout.write('\033c');
console.log("*************************");
console.log("!!SUPER ADVENTURE QUEST!!");
console.log("*************************");

mainMenu(["Flimsy Sword", "Juggling Balls", "Broken Compass"]);