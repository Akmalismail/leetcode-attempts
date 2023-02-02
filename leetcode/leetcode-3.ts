function lengthOfLongestSubstring(s: string): number {
  let longest = 0;
  let substring = "";
  for (const character of s) {
    const index = substring.indexOf(character);

    if (index > -1) {
      substring = substring.substring(index + 1);
    }

    substring += character;

    if (substring.length > longest) {
      longest = substring.length;
    }
  }

  return longest;
}

const testCases = [
  {
    case: "abcabcbb",
    expected: 3,
  },
  {
    case: "bbbbb",
    expected: 1,
  },
  {
    case: "pwwkew",
    expected: 3,
  },
];

for (const [i, test] of testCases.entries()) {
  console.log(
    `case ${i}: `,
    lengthOfLongestSubstring(test.case) === test.expected
      ? "passed"
      : `failed. Expected ${test.expected}, got ${lengthOfLongestSubstring(
          test.case
        )}`
  );
}

export {};
