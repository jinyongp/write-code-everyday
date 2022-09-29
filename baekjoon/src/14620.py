# https://www.acmicpc.net/problem/14620
from itertools import combinations


N = int(input())
G = [list(map(int, input().split())) for _ in range(N)]

"""
00 10 20 30 40
01 11 21 31 41
02 12 22 32 42
03 13 23 33 43
04 14 24 34 44

22를 기점으로 11 21 31 12 22 32 13 23 33에 오면 안 된다.
이는 각 좌표에서 22를 뺐을 떄 x와 y의 합이 3 이상이어야 한다.
"""


def can_locate_2(coord1, coord2):
    (x, y), (v, w) = coord1, coord2
    return abs(x - v) + abs(y - w) >= 3


def can_locate_3(coord1, coord2, coord3):
    return (
        can_locate_2(coord1, coord2) and
        can_locate_2(coord2, coord3) and
        can_locate_2(coord1, coord3)
    )


def get_land_price(flower):
    x, y = flower
    delta = ((0, 0), (0, 1), (0, -1), (1, 0), (-1, 0))
    return sum(G[x - v][y - w] for v, w in delta)


answer = 3001
cases = ((x, y) for x in range(1, N-1) for y in range(1, N-1))
for c1, c2, c3 in combinations(cases, 3):
    if can_locate_3(c1, c2, c3):
        answer = min(answer, sum(get_land_price(c) for c in [c1, c2, c3]))

print(answer)
