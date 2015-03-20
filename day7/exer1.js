var readline = require('readline');
var prompt = readline.createInterface(process.stdin, process.stdout);

function askForNumber() {
    prompt.question("Please enter your number: ", function(answer) {
            if (answer % 2 == 0) { console.log("Even!") }
            else {console.log("Odd")}
            
            prompt.question("Would you like to enter another (y/n)?", function(answer) {
            if (answer === "y") { askForNumber(); }
            else if (answer === "n") { exitProgram(); }
            else { 
                console.log("Bad input"); 
                exitProgram(); 
            }
            });
    });
}

function exitProgram() {
    console.log("Thank you! Goodbye!");
    process.exit(1);
}

askForNumber();