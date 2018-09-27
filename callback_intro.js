function findWaldo(arr, found) {
  arr.forEach(function (name, currentPositionIndex) {
    if (name === "Waldo") {
      found(currentPositionIndex);
    }
  });
}

function actionWhenFound(indexPosition) {
  console.log("Found Waldo at index: " + indexPosition + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

