# https://www.acmicpc.net/problem/1260

from collections import deque

# N: 정점의 개수
# M: 간선의 개수
#
N, M, V = list(map(int, input().split(" ")))
adj = [[] for _ in range(N + 1)]

for _ in range(M):
    x, y = list(map(int, input().split(" ")))
    adj[x].append(y)
    adj[y].append(x)

for e in adj:
    e.sort(reverse=True)


def DFS():
    stack = deque([V])
    visited = set()
    result = list()
    while stack:
        n = stack.pop()
        if n not in visited:
            visited.add(n)
            result.append(n)
            stack.extend(adj[n])
    return result


visited = [False for _ in range(N + 1)]

for e in adj:
    e.sort()


def BFS():
    queue = deque([V])
    visited = set()
    result = list()
    while queue:
        n = queue.popleft()
        if n not in visited:
            visited.add(n)
            result.append(n)
            queue.extend(adj[n])
    return result


print(" ".join(map(str, DFS())))
print(" ".join(map(str, BFS())))
