function isPalindrome(x: number): boolean {
  if (x < 0) {
    return false;
  }

  const checkIsPalindrome = (palindrome: string): boolean => {
    for (let i = 0; i < palindrome.length; i++) {
      if (palindrome[i] !== palindrome[palindrome.length - 1 - i]) {
        return false;
      }
    }

    return true;
  };

  return checkIsPalindrome(`${x}`);
}

const testCases = [
  {
    case: 121,
    expected: true,
  },
  {
    case: -121,
    expected: false,
  },
  {
    case: 10,
    expected: false,
  },
];

for (const [i, test] of testCases.entries()) {
  const result = isPalindrome(test.case);

  console.log(
    `case ${i}: `,
    test.expected === result
      ? "passed"
      : `failed. Expected ${test.expected}, got ${result}`
  );
}

export {};
