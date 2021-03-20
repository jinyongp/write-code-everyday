# https://www.acmicpc.net/problem/16676

"""
0 1 2 3 4 5 6 7 8 9 : 하나의 스티커 팩 구성

스티커팩으로 0 ~ N까지 전부 표현해야 하므로

하나의 팩으로 표현할 수 있는 수는 10까지이다. (11부터는 두 개 필요)

N < 11: 1
N < 111: 2
N < 1111: 3

증가: num * 10 + 1
"""

num = 11
N = int(input())

for i in range(1, 10):
    if N < num:
        print(i)
        break
    num = num * 10 + 1
