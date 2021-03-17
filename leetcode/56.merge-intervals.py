from typing import List
#
# @lc app=leetcode id=56 lang=python3
#
# [56] Merge Intervals
#

# @lc code=start


class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        """
        구간의 순서에 대한 언급이 없으므로 오름차순으로 정리해준다.

        intervals = [[1,3],[2,6],[8,10],[15,18]]

        answer = []

        intervals[i+1]을 확인하면서 이전 구간 중간에 위치하는지 확인한다.
        중간에 위치할 경우, 이전 구간의 end를 현재 end로 대체한다.
        중간에 위치하지 않을 경우, answer에 추가한다.
        """
        intervals.sort()
        answer = [intervals.pop(0)]

        for start, end in intervals:
            last_interval = answer[-1]
            if last_interval[0] <= start \
               and last_interval[1] >= start \
               and last_interval[1] <= end:
                last_interval[1] = end
            elif last_interval[0] <= start \
                    and last_interval[1] >= end:
                continue
            else:
                answer.append([start, end])

        return answer


# @lc code=end
