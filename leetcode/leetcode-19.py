from typing import Optional
from typing import Self
# Definition for singly-linked list.


class ListNode:
    val: int
    next: Self | None

    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        fast = head
        slow = head

        for _ in range(n):
            fast = fast.next

        if fast is None:
            return head.next

        while fast.next:
            slow = slow.next
            fast = fast.next

        slow.next = slow.next.next
        return head


def listToNode(list):
    if len(list) == 1:
        return ListNode(list[0])
    return ListNode(list[0], listToNode(list[1:]))


def printList(head: ListNode):
    result = '['
    while (head):
        result += f'{head.val}'
        head = head.next

        if (head):
            result += ','

    result += ']'
    print(result)


def main():
    s = Solution()
    returned = s.removeNthFromEnd(listToNode([1, 2, 3, 4, 5]), 1)
    printList(returned)


if __name__ == '__main__':
    main()
