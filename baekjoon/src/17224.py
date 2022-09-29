# https://www.acmicpc.net/problem/17224
"""
현정이는 L 만큼의 역량을 가지고 있어 L보다 작거나 같은 난이도의 문제를 풀 수 있다. 또한 현정이는 코딩이 느리기 때문에 대회 시간이 부족해 K개보다 많은 문제는 해결할 수 없다. 어떤 문제에 대해 쉬운 버전을 해결한다면 100점을 얻고, 어려운 버전을 해결한다면 여기에 40점을 더 받아 140점을 얻게 된다. 어려운 버전을 해결하면 쉬운 버전도 같이 풀리게 되므로, 한 문제를 해결한 것으로 계산한다.

첫 줄에 문제의 개수 N, 현정이의 역량 L, 현정이가 대회중에 풀 수 있는 문제의 최대 개수 K가 주어진다.

둘째 줄부터 N개의 줄에 걸쳐 1 ~ N번째 문제의 쉬운 버전의 난이도 sub1, 어려운 버전의 난이도 sub2 가 순서대로 주어진다.

현정이가 APC에 참가했다면 얻었을 점수의 최대값을 출력한다.
"""

N, L, K = map(int, input().split())

scores = []
for _ in range(N):
    sub1, sub2 = map(int, input().split())
    if sub2 <= L:
        scores.append(140)
    elif sub1 <= L:
        scores.append(100)

print(sum(sorted(scores, reverse=True)[:K]))
