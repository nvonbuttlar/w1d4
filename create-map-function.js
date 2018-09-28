var words = ["ground", "control", "to", "major", "tom"];

function map(array, cb) {
  var newArray = [];
  for (index in words) {
    var cbResult = cb(words[index]);
    newArray.push(cbResult);
  }
  return newArray;
}


let lengthResult = map(words, function(word) {
  return word.length;
});

let upperCaseResult = map(words, function(word) {
  return word.toUpperCase();
});

let reverseResult = map(words, function(word) {
  return word.split('').reverse().join('');
});

console.log(lengthResult);
console.log(upperCaseResult);
console.log(reverseResult)