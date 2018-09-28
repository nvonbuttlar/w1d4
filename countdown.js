// *** Psuedo Code ***
//
//
//

var countdownGenerator = function(timeLeft) {
  return function() {

    if (timeLeft === 0) {
      console.log("BLAST OFF!!!");
    } else if (timeLeft === -1) {
      console.log("Rockets already gone, bub!");
    } else if (timeLeft === -2) {
      console.log("Rocket is just a blip in the sky, bub!");
    } else {
      console.log("T-minus " + timeLeft + "...");
    }

    timeLeft-- ;

  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!