function updateInventory(arr1, arr2) {
  let tempArr1 = [...arr1];
  arr1.map((x, i) => {
    arr2.forEach(y => {
      if (y[1] === x[1]){
        tempArr1[i][0] = y[0]
      }
    })
  })
  let nameArr = arr1.map(x => x[1])

  arr2.map((x, i) => {
    if (!nameArr.includes(x[1])){
      tempArr1.push(x)
    }
  })

  return tempArr1.map(x => `${x[1]}&${x[0]}`).sort().map(x => [+x.slice(x.indexOf('&')+1, x.length), x.slice(0, x.indexOf('&'))]);
}

// Example inventory lists
const curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

const newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));
