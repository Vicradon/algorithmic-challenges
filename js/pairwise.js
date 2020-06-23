function pairwise(arr, arg) {
  const description = 'Description: Return the sum of the indexes of the pairs which add up to arg. If duplicate pairs exist, return the sum of those with lowest index.';
  console.log(description);
  const store = [];
  const finalStore = []
  const len = n => n.length;

  for (let i of arr) {
    for (let j = arr.indexOf(i) + 1; j < len(arr); j++) {
      if (i + arr[j] === arg) {
        if (!store.includes([i, arr[j], arr.indexOf(i) + j])) {
          store.push([i, arr[j], arr.indexOf(i) + j])
        }
        else {
          arr.splice(i, 1);
          store.push([i, arr[j - 1], arr.indexOf(i) + j + 1])
        }
      }
    }
  }

  for (i of store) {
    for (j = store.indexOf(i) + 1; j < len(store); j++) {
      if (i[0] == store[j][0] && i[1] === store[j][1]) {
        if (i[2] < store[j][2]) {
          store.splice(store.indexOf(store[j]), 1)
        }
        else {
          store.splice(store.indexOf(i), 1)
        }
      }
    }
  }
  for (i of store) {
    finalStore.push(i[2])
  }
  return finalStore.reduce((a, b) => a + b);
}

console.log(pairwise([1, 4, 2, 3, 0, 5], 7))
console.log(pairwise([7, 9, 11, 13, 15], 20))
console.log(pairwise([1, 1, 2], 3))
console.log(pairwise([1, 8, 9, 1, 5, 2], 3))