# https://www.acmicpc.net/problem/15969
N = int(input())
s = list(map(int, input().split()))
print(max(s) - min(s))
