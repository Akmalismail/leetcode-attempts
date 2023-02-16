function myAtoi(s: string): number {
  let isNegative = false;
  const upperLimit = Math.pow(2, 31) - 1;
  const lowerLimit = Math.pow(2, 31) * -1;
  let index = 0;
  let digits = "0";
  let n = s.replace(/^\s+/g, "");

  if (n.length === 0) {
    return 0;
  }

  // sign
  if (n.charAt(index) === "+" || n.charAt(index) === "-") {
    isNegative = n.charAt(index) === "-";
    index++;
  }

  for (let i = index; i < n.length; i++) {
    const isNumber = !Number.isNaN(parseInt(n.charAt(i)));

    if (isNumber) {
      digits += n.charAt(i);
      continue;
    }

    break;
  }

  let result = parseInt(digits) * (isNegative ? -1 : 1);

  if (result > upperLimit) {
    return upperLimit;
  }

  if (result < lowerLimit) {
    return lowerLimit;
  }

  return parseInt(digits) * (isNegative ? -1 : 1);
}

const testCases = [
  {
    case: "42",
    expected: 42,
  },
  {
    case: "   -42",
    expected: -42,
  },
  {
    case: "4193 with words",
    expected: 4193,
  },
  {
    case: "-91283472332",
    expected: -2147483648,
  },
  {
    case: "+-12",
    expected: 0,
  },
  {
    case: "      60",
    expected: 60,
  },
  {
    case: "        ",
    expected: 0,
  },
];

for (const [i, test] of testCases.entries()) {
  const result = myAtoi(test.case);

  console.log(
    `case ${i}: `,
    test.expected === result
      ? "passed"
      : `failed. Expected ${test.expected}, got ${result}`
  );
}

export {};
