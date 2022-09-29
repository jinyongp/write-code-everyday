# https://www.acmicpc.net/problem/11055
N, A = int(input()), list(map(int, input().split()))

# DP[i] = i번째에서의 증가 부분 수열의 최대 합
# i: 현재 위치, j: i번째 이전의 모든 위치
# DP[i] = max(DP[i], A[i] + DP[j])
DP = A[:]

for i in range(1, N):
    for j in range(i):
        if A[i] > A[j]:  # 증가 부분 수열이므로
            DP[i] = max(DP[i], A[i] + DP[j])

print(DP)
print(max(DP))
