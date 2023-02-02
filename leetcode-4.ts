function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const nums3 = [...nums1, ...nums2];
  nums3.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });

  if (nums3.length % 2 === 1) {
    const middleIndex = (nums3.length - 1) / 2;
    return nums3[middleIndex];
  } else {
    const middleIndex = nums3.length / 2;
    const first = nums3[middleIndex - 1];
    const second = nums3[middleIndex];
    return (first + second) / 2;
  }
}

const testCases = [
  {
    case: {
      nums1: [1, 3],
      nums2: [2],
    },
    expected: 2,
  },
  {
    case: {
      nums1: [1, 2],
      nums2: [3, 4],
    },
    expected: 2.5,
  },
  {
    case: {
      nums1: [3],
      nums2: [-2, -1],
    },
    expected: -1.0,
  },
];

for (const [i, test] of testCases.entries()) {
  const result = findMedianSortedArrays(test.case.nums1, test.case.nums2);

  console.log(
    `case ${i}: `,
    result === test.expected
      ? "passed"
      : `failed. Expected ${test.expected}, got ${result}`
  );
}

export {};
