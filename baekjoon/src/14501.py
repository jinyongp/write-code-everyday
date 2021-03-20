# https://www.acmicpc.net/problem/14501

"""
N + 1일 날 퇴사하므로 N일까지 일한다.
  0  1  2  3  4  5  6   7
N 1  2  3  4  5  6  7   0
T 3  5  1  5  2  4  2   0
P 10 20 10 20 15 40 200

dp[i] = i일까지 일한 금액의 최댓값
dp[i] =
if i + T[i] <= N: max(dp[i + 1], dp[i + T[i]] + P[i])
else: N = max_val (=dp[i + 1] 후에 받을 수 있는 금액의 최댓값)

> 일 할 수 있는 기간은 i + t가 N보다 작거나 같아야 한다.

    i t p1
7일: 6 2 200 : 8 > N 일을 못한다. 0
6일: 5 4 40  : 9 > N 일을 못한다. 0
5일: 4 2 15  : max(dp[5], dp[6] + 15) = max(0, 15) = 15
4일: 3 5 20  : 8 > N 일을 못한다. 15
3일: 2 1 10  : max(dp[4], dp[4] + 10) = max(15, 25) = 25
2일: 1 5 20  : max(dp[3], dp[6] + 20) = max(25, 20) = 25
1일: 0 3 10  : max(dp[2], dp[3] + 10) = max(25, 25) = 25
"""
N = int(input())
T, P = list(), list()
for _ in range(N):
    Ti, Pi = map(int, input().split())
    T.append(Ti)
    P.append(Pi)


def solution(N, duration, cost):
    dp = [0] * (N + 1)

    def dynamic_programming():
        max_val = 0
        for i in range(N - 1, -1, -1):
            d = duration[i] + i
            if d <= N:
                dp[i] = max(dp[i + 1], dp[d] + cost[i])
                max_val = max(max_val, dp[i])
            else:
                dp[i] = max_val

        return max_val

    result = dynamic_programming()
    return result


print(solution(N, T, P))
