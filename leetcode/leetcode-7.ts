function reverse(x: number): number {
  const isNegative = x < 0;
  let n = Math.abs(x);

  let result = 0;

  while (n > 0) {
    const remainder = n % 10;
    n = Math.floor(n / 10);

    result = result * (result === 0 ? 1 : 10) + remainder;
  }

  if (result > 0x7fffffff || result < -0x7fffffff) {
    return 0;
  }

  return result * (isNegative ? -1 : 1);
}

const testCases = [
  {
    case: 123,
    expected: 321,
  },
  {
    case: -123,
    expected: -321,
  },
  {
    case: 120,
    expected: 21,
  },
];

for (const [i, test] of testCases.entries()) {
  const result = reverse(test.case);

  console.log(
    `case ${i}: `,
    test.expected === result
      ? "passed"
      : `failed. Expected ${test.expected}, got ${result}`
  );
}

export {};
