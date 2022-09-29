#
# @lc app=leetcode id=7 lang=python3
#
# [7] Reverse Integer
#

# @lc code=start
class Solution:
    def reverse(self, x: int) -> int:
        if -2 ** 31 <= x and 2 ** 31 - 1:
            sign = 1 if x > 0 else -1
            return sign * int(str(abs(x))[::-1])
        else:
            return 0
# @lc code=end
