const test = [2, 2, 3, 3, 2, 4, 4, 4, 4, 4];

function minimumRounds(tasks: number[]): number {
  const mapped: { [key: string]: number } = {};
  for (let task of tasks) {
    if (mapped[`${task}`]) {
      mapped[`${task}`]++;
    } else {
      mapped[`${task}`] = 1;
    }
  }

  if (Object.values(mapped).indexOf(1) !== -1) {
    return -1;
  }

  let minimumRounds: number = 0;
  Object.keys(mapped).forEach((key) => {
    if (mapped[key] % 3 === 0) {
      minimumRounds += mapped[key] / 3;
    } else {
      minimumRounds += Math.floor(mapped[key] / 3 + 1);
    }
  });

  return minimumRounds;
}

console.time("minimumRounds");
console.log("rounds", minimumRounds(test));
// console.log("rounds", minimumRounds([2, 3, 3]));
console.timeEnd("minimumRounds");
