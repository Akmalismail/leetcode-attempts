class Solution:
    def isValid(self, s: str) -> bool:
        stack = []

        for c in s:
            if c == '(' or c == '[' or c == '{':
                stack.append(c)
            elif len(stack) == 0:
                return False
            elif c == ')':
                if stack[-1] == '(':
                    stack.pop()
                else:
                    return False
            elif c == ']':
                if stack[-1] == '[':
                    stack.pop()
                else:
                    return False
            elif c == '}':
                if stack[-1] == '{':
                    stack.pop()
                else:
                    return False
                
        if len(stack) == 0:
            return True
        else:
            return False


def main():
    s = Solution()
    result = s.isValid(']')
    print(f'result - {result}')


if __name__ == '__main__':
    main()
