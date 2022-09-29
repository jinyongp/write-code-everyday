from collections import deque


def solution(n, weak, dist):
    """
    bfs 탐색을 이용하여 트리의 높이가 가장 낮은 곳에 위치한 결과가 정답이다.
    끝까지 탐색했음에도 정답에 도달하지 못했을 경우, -1을 반환한다.

    bfs 탐색을 해야 하므로 deque를 이용한 queue를 생성한다.
    dist의 경우, 가장 먼 거리를 이동할 수 있는 친구가 더 많은 수리를 할 수 있으므로 거리에 따라 내림차순으로 정렬한다.
    가장 먼 거리를 이동할 수 있는 친구 부분에서 정답이 결정되므로 내림차순으로 정렬된 dist의 반복으로 충분하다.

    1st item: [1, 3, 4, 9, 10], [7, 5, 3]

    left = 1
    right = (1 + 7) % n = 8

    중간에 위치하는 모든 weak 구간을 제거한다. (filter 함수 사용)

    조건: # 구간을 선택해야 한다.
    left < right일 경우, 중간 범위 선택
    left > right일 경우, 외부 범위 선택

    ####|---------------|#
    ----------------------
     1   3 4         9 10
    --------|#######|-----

    dist는 tree의 높이 역할을, weak은 tree의 너비가 된다.
    weak을 순회할 동안 답이 구해진다면 bfs이므로 최솟값이 된다.

    마지막까지 계산되지 않는다면 -1을 반환한다.
    """
    queue = deque()
    dist.sort(reverse=True)
    queue.append(tuple(weak))
    visited = set()   # 동일한 연산에 대해서는 수행하지 않는다.
    for num, distance in enumerate(dist, start=1):  # tree의 높이
        for _ in range(len(queue)):  # tree의 너비
            weak_q = queue.popleft()
            if weak_q not in visited:
                visited.add(weak_q)
                for w in weak_q:
                    left, right = w, (w + distance) % n
                    if left < right:
                        completed = tuple(filter(
                            lambda x: x < left or x > right,
                            weak_q
                        ))
                    else:
                        completed = tuple(filter(
                            lambda x: x < left and x > right,
                            weak_q
                        ))
                    if not len(completed):
                        return num
                    queue.append((completed))
    return -1


n, weak, dist = 12, [1, 5, 6, 10], [1, 2, 3, 4]
print(solution(n, weak, dist))  # 2


n, weak, dist = 12, [1, 3, 4, 9, 10], [3, 5, 7]
print(solution(n, weak, dist))  # 1
