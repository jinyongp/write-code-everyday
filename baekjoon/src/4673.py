# https://www.acmicpc.net/problem/4673
N = 10001


def d(n):
    return n + sum(map(int, list(str(n))))


self_numbers = [False for _ in range(N)]
for i in range(1, N):
    index = d(i)
    if index < N:
        self_numbers[index] = True

for i in range(1, N):
    if not self_numbers[i]:
        print(i)
