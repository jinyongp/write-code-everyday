from sys import stdin

SIZE = 10001
N = int(input())
f = [0] * SIZE
for _ in range(N):
    n = int(stdin.readline().rstrip())
    f[n] += 1

for i, t in enumerate(f):
    if t != 0:
        for _ in range(t):
            print(i)
