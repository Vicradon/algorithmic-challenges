function sym(...args) {
  let symArr = [];

  for (let i = 0; i < args.length; i++) {
    let tempArr = [...symArr];

    [tempArr, args[i]].reduce((x, y) => {
      x.map(r => {
        if (!y.includes(r) && !symArr.includes(r)) {
          symArr.push(r)
        }
        else if (y.includes(r) && symArr.includes(r)) {
          const index = symArr.indexOf(r);
          symArr.splice(index, 1)
        }
      })
      y.map(r => {
        if (!x.includes(r) && !symArr.includes(r)) {
          symArr.push(r)
        }
        else if (x.includes(r) && symArr.includes(r)) {
          const index = symArr.indexOf(r);
          symArr.splice(index, 1)
        }
      })
    })
  }
  return symArr.sort((a, b) => a - b);
}

console.log(sym([1, 3, 9], [3, 4], [9, 0], [11]));