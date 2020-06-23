function fibonacci(terms) {
  let fibArr = [1];
  // This function returns the last two elements of an array
  function takeLast(arr) {
    const len = arr.length;
    const retArr = [arr[len - 2], arr[len - 1]];
    return retArr.filter(Boolean);
  }
  // This function reduces an array supplied to it
  function reduceArr(arr) {
    return arr.reduce((a, b) => a + b)
  }
  
  for (i = 0; i < terms - 1; i++) {
    fibArr.push(reduceArr(takeLast(fibArr)))
  }
  return fibArr;
}
console.log(fibonacci(10));
