//



function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  /* your code here */
  var counter = 0;

  return function() {
    /* your code here */
    return list[counter++];

  }
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5 counter = 0 - 5 counter = 1
console.log(rollLoadedDie());  // 4 counter = 1 - 4 counter = 2
console.log(rollLoadedDie());  // 6 counter = 2 - 6 counter = 3