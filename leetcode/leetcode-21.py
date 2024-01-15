from typing import Optional
from typing import Self
# Definition for singly-linked list.


class ListNode:
    val: int
    next: Self | None

    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


def listNodeToString(head: ListNode):
    result = '['
    while (head):
        result += f'{head.val}'
        head = head.next

        if (head):
            result += ','

    result += ']'
    return result


def listToNode(list):
    if len(list) == 0:
        return None
    elif len(list) == 1:
        return ListNode(list[0])
    return ListNode(list[0], listToNode(list[1:]))


class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        head: ListNode | None
        if list1 is None:
            return list2

        if list2 is None:
            return list1

        # init head
        if list1.val < list2.val:
            head = ListNode(list1.val)
            list1 = list1.next
        else:
            head = ListNode(list2.val)
            list2 = list2.next

        current = head
        while list1 or list2:
            if list1 is None:
                current.next = ListNode(list2.val)
                list2 = list2.next
            elif list2 is None:
                current.next = ListNode(list1.val)
                list1 = list1.next
            elif list1.val < list2.val:
                current.next = ListNode(list1.val)
                list1 = list1.next
            else:
                current.next = ListNode(list2.val)
                list2 = list2.next

            current = current.next

        return head


def main():
    s = Solution()
    result = s.mergeTwoLists(listToNode([1, 2, 4]), listToNode([1, 3, 4]))
    print(f'result - {listNodeToString(result)}')


if __name__ == '__main__':
    main()
