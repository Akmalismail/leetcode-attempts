function longestCommonPrefix(strs: string[]): string {
  strs.sort((a, b) => a.length - b.length);

  let longestPrefix = "";
  const shortestStr = strs[0];
  for (let i = 0; i < shortestStr.length; i++) {
    const allIsEqual = strs.every(
      (str) => str.charAt(i) === shortestStr.charAt(i)
    );

    if (!allIsEqual) {
      break;
    }

    longestPrefix += shortestStr.charAt(i);
  }

  return longestPrefix;
}

const testCases = [
  {
    case: ["flower", "flow", "flight"],
    expected: "fl",
  },
  {
    case: ["dog", "racecar", "car"],
    expected: "",
  },
  {
    case: ["flower", "flower", "flower", "flower"],
    expected: "flower",
  },
];

for (const [i, test] of testCases.entries()) {
  const result = longestCommonPrefix(test.case);

  console.log(
    `case ${i}: `,
    test.expected === result
      ? "passed"
      : `failed. Expected ${test.expected}, got ${result}`
  );
}

export {};
