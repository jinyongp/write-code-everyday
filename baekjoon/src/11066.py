# https://www.acmicpc.net/problem/11066
from sys import stdin

"""
최소 비용을 계산해야하므로 DP를 사용한다.

누적합을 사용하여 구간합을 구하기 용이하게 한다.
S[i] = 0번째부터 i번째까지의 합

i부터 j까지의 구간합 = S[j] - S[i - 1]


Knuth's Optimization
"""


def solution():
    N, K = int(input()), [0] + list(map(int, stdin.readline().strip().split()))
    S = K[:]


for _ in range(int(input())):
    solution()
