function positiveSum(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    // setup loop to go through array of given length
    if (arr[i] > 0) {
      // if arr[i] is greater than zero
      sum += arr[i]; // add arr[i] to total
    }
  }
  return sum; // return total
}

arr = [7, -4, 9, 7];
console.log(positiveSum(arr));
