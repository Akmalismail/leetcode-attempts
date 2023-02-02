/**
 * How many columns?
 *
 * 2 rows, 14 chars
 * P Y A I H R I G
 * A P L S I R N
 *
 * 3 rows, 14 chars = 7 columns, 2 groups.
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 *
 * 4 rows, 14 chars = 7 columns, 2 groups.
 * P     I     N
 * A   L S   I G
 * Y A   H R
 * P     I
 *
 * 5 rows, 14 chars = 7(6?) columns, 14/8 = 1.75
 * P       H
 * A     S I
 * Y   I   R
 * P L     I G
 * A       N
 *
 * HELLOWORLD
 *
 * 5 rows, 10 chars, 5 column, 1 group.
 * H       L
 * E     R D
 * L   O
 * L W
 * O
 *
 * Columns/Group = numRows - 1.
 * Characters/Group = numRows + (numRows - 2).
 * Total Columns = Characters / 2.
 *
 */
function convert(s: string, numRows: number): string {
  if (numRows === 1) {
    return s;
  }

  // case numRows >= 2
  // instantiate matrix rows x columns

  const totalCharacters = s.length;
  const groups = Math.ceil(totalCharacters / (2 * (numRows - 1)));
  const numCols = groups * (numRows - 1);

  let currRow = 0;
  let currCol = 0;

  let matrix = new Array(numRows)
    .fill(0)
    .map((arr) => (arr = new Array(numCols).fill(" ")));

  let index = 0;

  while (index < totalCharacters) {
    while (currRow < numRows && index < totalCharacters) {
      matrix[currRow][currCol] = s[index];

      index++;
      currRow++;
    }

    currCol++;
    // if rows from 0 - 4 (numRows = 5), currRow going out of loop will be 6. need to move back up twice.
    currRow = currRow - 2;

    while (currRow > 0 && currCol < numCols && index < totalCharacters) {
      matrix[currRow][currCol] = s[index];

      index++;
      currCol++;
      currRow--;
    }
  }

  return matrix
    .map((row) => row.join(""))
    .join("")
    .replace(/\s/g, "");
}

const testCases = [
  {
    case: {
      s: "PAYPALISHIRING",
      numRows: 3,
    },
    expected: "PAHNAPLSIIGYIR",
  },
  {
    case: {
      s: "PAYPALISHIRING",
      numRows: 4,
    },
    expected: "PINALSIGYAHRPI",
  },
  {
    case: {
      s: "PAYPALISHIRING",
      numRows: 5,
    },
    expected: "PHASIYIRPLIGAN",
  },
  {
    case: {
      s: "A",
      numRows: 1,
    },
    expected: "A",
  },
];

for (const [i, test] of testCases.entries()) {
  const result = convert(test.case.s, test.case.numRows);

  console.log(
    `case ${i}: `,
    test.expected === result
      ? "passed"
      : `failed. Expected ${test.expected}, got ${result}`
  );
}

export {};
