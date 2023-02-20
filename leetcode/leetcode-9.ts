function isPalindrome(x: number): boolean {
  if (x < 0 || (x !== 0 && x % 10 === 0)) {
    return false;
  }

  let reversed = 0;
  let integer = x;

  while (integer > 0) {
    reversed += integer % 10;
    integer = Math.floor(integer / 10);

    if (integer !== 0) {
      reversed *= 10;
    }

    if (reversed >= Math.pow(2, 31) - 1) {
      return false;
    }
  }

  return reversed === x;
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
  {
    case: 0,
    expected: true,
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
