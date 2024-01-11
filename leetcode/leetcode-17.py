class Solution:
    def letterCombinations(self, digits: str) -> list[str]:
        dialer = {
            '2': 'abc',
            '3': 'def',
            '4': 'ghi',
            '5': 'jkl',
            '6': 'mno',
            '7': 'pqrs',
            '8': 'tuv',
            '9': 'wxyz',
        }

        result = []

        for digit in digits:
            letters = dialer[digit]

            if len(result) == 0:
                result = list(letters)
            else:
                temp = []
                for chars in result:
                    for splitted in list(letters):
                        temp.append(chars + splitted)
                result = temp

        return result


def main():
    s = Solution()
    print(s.letterCombinations('29'))


if __name__ == '__main__':
    main()
