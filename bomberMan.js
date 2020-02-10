function bomberMan(n = 3, grid = ["001", "010", "000"]) {
  let b = [...grid];
  // setTimeout(() => console.log("1 Sec passed"), 1000);
  `
    001
    010
    000
  `
  `(i±1, j) and (i, j±1)`

  const bombsToDetonate = grid.map((x, i) => {
    return x.split('').map((y, j) => {
      if (+y === 1) return [i, j];
    }).filter(Boolean)
  }).flat();

  function plantBombs() {
    grid = grid.map(x => x.split('').map(y => 1).join(''))
  }

  //[[0, 2], [1, 1]]
  function detonateBombs() {
    bombsToDetonate.forEach((x, i) => {
      grid[x[0]] = `${grid[x[0]].substr(0, x[1])}0${grid[x[0]].substr(x[1] + 1)}`
      grid[x[0] + 1] = `0${grid[x[0]+1].substr(1, x[1])}[x[1]]`;
      // grid[x[0] - 1][x[1]] = 0;
      // grid[x[0]][x[1] + 1] = 0;
      // grid[x[0]][x[1] - 1] = 0;
    });
    return;
  }

  // setTimeout(plantBombs, 1000);

  console.log(detonateBombs())

  // return bombsToDetonate;
  b[0][2] = 0;
  return grid;
}

console.log(bomberMan())