#
# @lc app=leetcode id=97 lang=python3
#
# [97] Interleaving String
#

# @lc code=start
class Solution:
    def isInterleave(self, s1: str, s2: str, s3: str) -> bool:
        """
        s3의 문자가 s1에서 채워졌는지 s2에서 채워졌는지 분할하여 생각해야 한다.

        aabcc dbbca

        a a d b b c b c a c
        1 1 2 2 2 2 1 1 2 1

        (s1, s2, s3)를 저장하여 스택에 넣는다.

        아래 경우를 스택에서 꺼내며 저장한다.

        a a 까지는 겹치지 않기 때문에 s1에서 채워진다. s1=bcc, s2=dbbca, s3=dbbcbcac

        d 또한 겹치지 않으므로 s2에서 채워진다. s1=bcc, s2=bbca, s3=bbcbcac

        b의 경우 s1과 s2에 동시에 존재하므로 분기를 해야한다.
            - s1에서 채워질 경우 s1=cc, s2=bbca, s3=bcbcac
            - s2에서 채워질 경우 s1=bcc, s2=bca, s3=bcbcac

        두 경우를 스택에 저장한다.
        """
        if (len(s1) + len(s2)) != len(s3):
            return False

        stack = {(s1, s2, s3)}

        while stack:
            a, b, c = stack.pop()

            if a != "" and b != "" and c != "":
                if a[0] == c[0]:
                    stack.add((a[1:], b, c[1:]))
                if b[0] == c[0]:
                    stack.add((a, b[1:], c[1:]))
                if a[0] != c[0] and b[0] != c[0]:
                    continue
            elif a == "" and b == "" and c == "":
                return True
            else:
                if (a == "" and (b != c)) or (b == "" and (a != c)):
                    continue
                else:
                    return True

        return False

# @lc code=end
