# https://programmers.co.kr/learn/courses/30/lessons/64065
from collections import Counter
import re


def solution(s):
    """
    중복되는 숫자가 없으므로 Counter를 통해 쉽게 구현한다.
    """

    counter = Counter(re.findall(r"\d+", s)).most_common()
    return list(map(int, [c for c, _ in counter]))


s = "{{2},{2,1},{2,1,3},{2,1,3,4}}"
print(solution(s))  # [2, 1, 3, 4]

s = "{{1,2,3},{2,1},{1,2,4,3},{2}}"
print(solution(s))  # [2, 1, 3, 4]

s = "{{20,111},{111}}"
print(solution(s))  # [111, 20]
