# https://www.acmicpc.net/problem/1932
N = int(input())
T = [[0, 0]] + [[0] + list(map(int, input().split())) + [0] for _ in range(N)]
DP = [[0] * n for n in range(2, N + 3)]


"""
n(1 ≤ n ≤ 500)의 경우를 모두 확인해야 하므로
DP를 사용하지 않으면 2^500번의 연산을 해야 한다.

   0 1 2 3 4 6 7j
 0 0 0
 1 0 7 0
 2 0 3 8 0
 3 0 8 1 0 0
 4 0 2 7 4 4 0
 5 0 4 5 2 6 5 0
 i

T와 DP에 위와 양 옆에 패딩을 줘서 IndexError를 방지한다.

DP[i][j] = 현재 위치까지의 최대 합

DP[i][j] = A[i][j] + max(DP[i-1][j], DP[i-1][j])
"""


for i in range(1, N + 1):
    for j in range(1, i + 1):
        DP[i][j] = T[i][j] + max(DP[i - 1][j - 1], DP[i - 1][j])


print(max(DP[-1]))
