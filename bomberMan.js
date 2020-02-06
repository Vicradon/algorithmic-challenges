function bomberMan(n = 3, grid = ["001", "010", "000"]) {
  setTimeout(() => console.log("1 Sec passed"), 1000);

  const bombsToDetonate = grid.map((x, i) => {
    return x.split('').map((y, j) => {
      if (+y === 1) return `${i}${j}`;
    }).filter(Boolean)
  }).flat();

  function plantBombs() {
    grid = grid.map(x => x.split('').map(y => 1).join(''))
  }

  function detonateBombs() {
    bombsToDetonate.map((x, i) => x.map((y, j) => {
      grid[i][j] = 0;
      grid[i + 1][j] = 0;
      grid[i - 1][j] = 0;
      grid[i][j + 1] = 0;
      grid[i][j - 1] = 0;
    }))
  }

  setTimeout(plantBombs, 1000);

  // setTimeout(detonateBombs, 1000);

  return bombsToDetonate;
}

console.log(bomberMan())