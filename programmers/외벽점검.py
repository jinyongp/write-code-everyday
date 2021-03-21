from itertools import permutations
from collections import deque


def check(w, weak, dist):
    """
    취약지점을 dist 순서대로 방문할 때 최소 몇 명이 필요한지 검사한다.
    모두 투입해도 수리하지 못한다면 -1을 반환한다.

    weak = 10 13 17 18
    dist = 4 1 2 3
    => (10,11,12,13,14), (17,18) => 2

    - weak을 set으로 하여 dist를 증가할 때
    """
    for f, d in enumerate(dist, start=1):
        d += w
        for i in range(w, d + 1):
            if i == weak[0]:
                weak.popleft()
                if len(weak) == 0:
                    return f
                w = weak[0]
    return -1


def solution(n, weak, dist):
    """
    weak[i]에서 출발하는 경우 모두 고려한다.
    dist의 permutations를 통해 필요한 친구의 최소를 구한다.

    1 5 6 10

    (1, 2, 3, 4) (1,) (5,6) (10,11,12) => 3
    (1, 2, 4, 3) (1,) (5,6) (10,11,12,13) => 3
    (1, 3, 2, 4) ...

    10 13 17 18

    ...
    (3, 4, 2, 1) (10,11,12,13) (17,18,19,20,21) => 2
    (4, 1, 2, 3) (10,11,12,13,14) (17,18..) => 2
    (4, 1, 3, 2) ...

    ANSWER) 최소 2명
    """
    weak_q = deque(weak)
    dist.reverse()  # 긴 거리를 이동할 수 있는 친구부터 나열
    FLAG = 12341234
    result = FLAG
    for _ in range(len(weak)):
        for distances in permutations(dist):
            temp = check(weak_q[0], weak_q.copy(), distances)
            if temp != -1:
                result = min(result, temp)
        weak_q.append(weak_q.popleft() + n)
    return -1 if result == FLAG else result


n, weak, dist = 12, [1, 5, 6, 10], [1, 2, 3, 4]
print(solution(n, weak, dist))  # 2


n, weak, dist = 12, [1, 3, 4, 9, 10], [3, 5, 7]
print(solution(n, weak, dist))  # 1
