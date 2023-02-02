function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return [];
}

const testCases = [
  {
    test: {
      nums: [2, 7, 11, 15],
      target: 9,
    },
    expected: [0, 1],
  },
  {
    test: {
      nums: [3, 2, 4],
      target: 6,
    },
    expected: [1, 2],
  },
  {
    test: {
      nums: [3, 3],
      target: 6,
    },
    expected: [0, 1],
  },
];

testCases.forEach((value, index) => {
  const indices = twoSum(value.test.nums, value.test.target);
  const isOk = JSON.stringify(indices) === JSON.stringify(value.expected);

  console.log(`case #${index + 1}: ${isOk ? "passed" : "failed"}`);
});

export {};
