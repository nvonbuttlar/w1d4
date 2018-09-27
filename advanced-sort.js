// *** EXAMPLE on sorting numerically with the sorting function ***

// var myArray = [9876, 10, 2, 5, 1, 9, 12, 14, 70, 1000];
// myArray.sort(function(a,b) {
//   return a - b;   // This argument determines how a and b are being compared, and thus, sorted.
// });
// console.log(myArray);

// ------------------------

var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

var result = students.sort(function(a, b) {
  if (a.name > b.name) {
    return 1
  }
  if (a.name === b.name) {
    if (a.age > b.age) {
      return -1
    } else {
      return 1
    }
  }
});

console.log(students);





