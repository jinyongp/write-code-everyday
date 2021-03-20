# https://www.acmicpc.net/problem/1915
N, M = map(int, input().split())
S = [[0] * (N + 1)]
DP = [[0 for _ in range(M + 1)] for _ in range(N + 1)]

for i in range(1, N + 1):
    S.append([0] + list(map(int, list(input()))))

"""
DP[i][j] = i, j 점에서 정사각형이 되는 한 변의 길이
DP[i][j] = 1 + min(DP[i-1][j], DP[i][j-1], DP[i-1][j-1]) (if A[i][j] == 1)

S =
  0 1 2 3 4 j
0 0 0 0 0 0 => padding
1 0 0 1 0 0
3 0 0 1 1 1
4 0 1 1 1 1
5 0 0 1 1 1
i

DP =
  0 1 2 3 4 j
0 0 0 0 0 0 => padding
1 0 0 1 0 0
2 0 0 1 1 1
3 0 1 1 2 2
4 0 0 1 2 3
i

[i][j] 위치에서 왼쪽([i][j-1]), 위쪽([i-1][j]), 대각선([i-1][j-1]) 중 최솟값에 +1을 한다.
"""

for i in range(1, N + 1):
    for j in range(1, N + 1):
        if S[i][j]:
            DP[i][j] = 1 + min(DP[i - 1][j], DP[i][j - 1], DP[i - 1][j - 1])

for dp in DP:
    print(dp)

print(max([max(dp) for dp in DP]) ** 2)
