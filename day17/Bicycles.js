/* You've been contracted to write inventory management software for the owner of a bicycle shop. She wants to be able to do the following:

- Track a bicycle's brand, model, color, and sale price
- Add bicycles to inventory
- Remove bicycles from inventory
- Change a bicycle's sale price
- Search for bicycles by brand, color, and sale price range (under $500, $500-$1000, $1000+)

BONUS: This store allows customers to put down a deposit and take a bike home on trial for up to 3 days. The software should let the owner check whether a bicycle is out "on trial", who is trying the bike, and what date the bike is due back in the store. */
var sget = require('sget');

function runBicycleShop() {
  //------------CONSTRUCTORS------------
  function Bicycle(template) {
    this.id = template.id;
    this.brand = template.brand;
    this.model = template.model;
    this.color = template.color;
    this.salePrice = template.salePrice;
    this.trial = false;
    this.trialPerson = undefined;
    this.trialDate = undefined;
    this.changeSalePrice = function(change) {
      this.salePrice += change;
    };
  }

  function Inventory() {
    this.bikes = {};
    this.addBike = function(bike) {
      this.bikes[bike.id] = bike;
    };
    this.removeBike = function(bike) {
      if (bike.id in this.bikes) { 
        delete this.bikes[bike.id];
        return true;
      }
      else { 
        console.log("This bike isn't in our inventory!");
        return false;
      }
    };
  }
  //------------------------------------

  var inventory = new Inventory();
  var firstBike = new Bicycle({ id: 0, brand: "toyota", model: "camry", color: "green", salePrice: 9999 });
  inventory.addBike(firstBike);

  runMainMenu();

  function runMainMenu() {
    var option = sget("Welcome to the Bike Shop!. What would you like to do? \n 1) Add a Bike \n 2) Remove a Bike \n 3) Search for a Bike \n 4) Mark a Bike as Trial \n 5) Exit the Shop").trim();
    switch (option) {
      case "1": 
        addBike();
        break;
      case "2":
        removeBike();
        break;
      case "3":
        searchBike();
        break;
      case "4":
        markTrial()
        break;
      case "5":
        process.exit();
        break;
      default: 
        console.log("Invalid option. Please try again.");
        runMainMenu();
    }
  }

  function addBike() {
    var questions = ["Bike's brand?", "Bike's model?", "Bike's color?", "Bike's sale price?"];
    var attributes = ["brand", "model", "color", "salePrice"];
    var template = { id: Object.size(inventory.bikes) };
    for (var i=0; i<questions.length; i++) {
      var bikeAttribute = sget(questions[i]).trim().toLowerCase();
      template[attributes[i]] = bikeAttribute;
    }
    var bike = new Bicycle(template);
    inventory.addBike(bike);
    runMainMenu();
  }

  function removeBike() {
    console.log("Here are all the bikes in the inventory: ");
    var p = inventory.bikes;
    var pLength = Object.size(p);
    for (var i=0; i<pLength; i++) {
      console.log("ID: " + p[i].id + "     Brand: " + p[i].brand + "     Model: " + p[i].model);
    }
    var bikeID = sget("Which bike do you want to remove? (Choose the ID Number)").trim();
    if (inventory.removeBike(p[bikeID]) === true) { runMainMenu(); }
    else { removeBike(); }
  }

  function searchBike() {
    console.log("Here are all the bikes listed by ID Number: ");
    var p = inventory.bikes;
    var pLength = Object.size(p);
    for (var i=0; i<pLength; i++) {
      console.log("ID: " + p[i].id);
    }

    var bikeID = sget("Which bike would you like to see?").trim();
    console.log("Here are its properties: ");
    console.log("Brand: " + p[bikeID].brand);
    console.log("Model: " + p[bikeID].model);
    console.log("Color: " + p[bikeID].color);
    console.log("Sale Price: " + p[bikeID].salePrice);
    console.log("Trial Status: " + p[bikeID].trial);
    if (p[bikeID].trial === true) {
      console.log("Who took it on trial: " + p[bikeID].trialPerson);
      console.log("When it'll be returned: " + p[bikeID].trialDate);
    }
    runMainMenu();
  }

  function markTrial() {

  }

}

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

runBicycleShop();