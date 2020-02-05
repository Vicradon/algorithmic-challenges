function climbingLeaderboard(scores, alice) {
  
  let rankedScores = [];

  const copiedArr = [...scores];

  for (let i = 0; i < scores.length - 1; i++) {
    if (rankedScores.length === 0) {
      let a = copiedArr.splice(0, 1)[0];
      rankedScores.push({ score: a, rank: 1 })
    }

    let a = copiedArr.splice(0, 1)[0];
    let b = rankedScores[rankedScores.length - 1];

    if (b.score === a) {
      rankedScores.push({ score: a, rank: b.rank })
    } else {
      rankedScores.push({ score: a, rank: b.rank + 1 })
    }
  }

  function compare(rankedScores, aliceScore) {
    let a = rankedScores.filter(x => x.score > aliceScore).reverse()[0];
    if (a === undefined) return 1;
    return a.rank + 1;
  }

  const aliceRanks = alice.map(x => compare(rankedScores, x))

  return aliceRanks;
}

console.log(climbingLeaderboard([90, 84, 55, 55, 30], [87, 94, 45, 23]));
