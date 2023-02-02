class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }

  toString(): string {
    return `${this.val}${this.next ? `, ${this.next.toString()}` : ""}`;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let result = new ListNode(0);

  const reverseListNode = (node: ListNode) => {
    let prev: ListNode | null = null;
    let current: ListNode | null = node;
    let next: ListNode | null = null;

    while (current != null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    return prev;
  };

  do {
    if (!l1) {
      l1 = new ListNode(0);
    }

    if (!l2) {
      l2 = new ListNode(0);
    }

    result.val = result.val + l1.val + l2.val;

    if (result.val > 9) {
      result.val = result.val - 10;
      result = new ListNode(1, result);
    } else {
      result = new ListNode(0, result);
    }

    l1 = l1.next;
    l2 = l2.next;

    if (!(l1 || l2) && result.val === 0) {
      result = result.next!;
    }
  } while (l1 || l2);

  return reverseListNode(result);
}

const testCases: Array<{ l1: ListNode; l2: ListNode; expected: ListNode }> = [
  {
    l1: new ListNode(2, new ListNode(4, new ListNode(3))),
    l2: new ListNode(5, new ListNode(6, new ListNode(4))),
    expected: new ListNode(7, new ListNode(0, new ListNode(8))),
  },
  {
    l1: new ListNode(0),
    l2: new ListNode(0),
    expected: new ListNode(0),
  },
  {
    l1: new ListNode(
      9,
      new ListNode(
        9,
        new ListNode(
          9,
          new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))
        )
      )
    ),
    l2: new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))),
    expected: new ListNode(
      8,
      new ListNode(
        9,
        new ListNode(
          9,
          new ListNode(
            9,
            new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(1))))
          )
        )
      )
    ),
  },
];

testCases.forEach((test) => {
  addTwoNumbers(test.l1, test.l2);
});

export {};
