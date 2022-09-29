# https://www.acmicpc.net/problem/17269

N, M = map(int, input().split())
A, B = input().split()

code = (3, 2, 1, 2, 4, 3, 1, 3, 1, 1, 3, 1, 3, 2, 1, 2,
        2, 2, 1, 2, 1, 1, 1, 2, 2, 1)

state = ""
s = min(N, M)
for i in range(s):
    state += A[i] + B[i]
state += A[s:] + B[s:]
state = [code[ord(c) - ord('A')] for c in state]

for i in range(N + M - 2):
    for j in range(N + M - 1 - i):
        state[j] += state[j + 1]

print(f"{state[0]%10*10 + state[1]%10}%")
