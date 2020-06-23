/**
 * Making recursive functions
 * You need a store or update condition
 * You need an exit condition or end of loop
 * You need a re-call condition
 */

function flat(arr) {
  const store = [];

  function recur(arr) {
    for (let i of arr) {
      if (Array.isArray(i)) {
        recur(i)
      }
      else {
        store.push(i)
      }
    }
  }
  recur(arr);

  return store;
}

console.log(flat([1, 2, [3, 4, [5, 6], 7, [8, 9]], [10]]))