from sys import stdin

N, K = map(int, input().split(" "))

table = [[0] * (K + 1) for _ in range(N + 1)]

for i in range(1, N + 1):
    W, V = map(int, stdin.readline().strip().split(" "))
    for j in range(1, K + 1):
        if j < W:
            table[i][j] = table[i - 1][j]
        else:
            table[i][j] = max(table[i - 1][j], table[i-1][j - W] + V)

print(table[N][K])
