function longestPalindrome(s: string): string {
  let longest: number = 0;
  const indexes: [number, number] = [0, 0];
  const checkIsPalindrome = (palindrome: string): boolean => {
    for (let i = 0; i < palindrome.length; i++) {
      if (palindrome[i] !== palindrome[palindrome.length - 1 - i]) {
        return false;
      }
    }

    return true;
  };

  for (let i = 0; i <= s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      const substring = s.substring(i, j);
      const isPalindrome = checkIsPalindrome(substring);

      if (isPalindrome && substring.length > longest) {
        longest = substring.length;
        indexes[0] = i;
        indexes[1] = j;
      }
    }
  }

  return s.substring(indexes[0], indexes[1]);
}

const testCases = [
  {
    case: "babad",
    expected: ["bab", "aba"],
  },
  {
    case: "cbbd",
    expected: ["bb"],
  },
  {
    case: "a",
    expected: ["a"],
  },
];

for (const [i, test] of testCases.entries()) {
  const result = longestPalindrome(test.case);

  console.log(
    `case ${i}: `,
    test.expected.includes(result)
      ? "passed"
      : `failed. Expected ${test.expected}, got ${result}`
  );
}

export {};
