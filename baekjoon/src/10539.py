# https://www.acmicpc.net/problem/10539
N, B = int(input()), list(map(int, input().split()))

"""
A 3 1 5 11

B[0] = 3/1 = 3
B[1] = (3+1)/2 = 2
B[2] = (3+1+5)/3 = 3
B[3] = (3+1+5+11)/4 = 5
B[i] = (A[0]+A[1]+...+A[i])/(i+1)

B[i]*(i+1) = (A[0]+A[1]+...+A[i-1])+A[i]

=> A[i] = B[i]*(i+1) - (A[0]+A[1]+...+A[i-1])

i=1 : B[1] = (A[0]+A[1])/(1+1)
      B[1]*(1+1) - A[0] = A[1]
i=2 : B[2] = (A[0]+A[1]+A[2])/(2+1)
      B[2]*(2+1) -
"""

A = [B[0]]

for i in range(1, N):
    A.append(B[i] * (i + 1) - sum(A[:i]))

print(" ".join(map(str, A)))
