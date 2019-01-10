function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    debugger;
    if (arr[i] === 'Waldo') {
      found(i); // execute callback
    }
  }
}

function actionWhenFound(index) {
  console.log('Found Waldo at index' + index);
}

findWaldo(['Alice', 'Bob', 'Waldo', 'Winston'], actionWhenFound);
