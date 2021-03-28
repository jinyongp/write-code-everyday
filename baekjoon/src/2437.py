# https://www.acmicpc.net/problem/2437
N, S = int(input()), sorted(list(map(int, input().split())))
"""
주어진 추로 만들 수 없는 무게의 최솟값
3 1 6 2 7 30 1

sort => 1 1 2 3 6 7 30

answer = 0
1     (0 + 1 >= 1)   O => answer = 1
1 + 1 (1 + 1 >= 1)   O => answer = 2
2     (2 + 1 >= 2)   O => answer = 4
3     (4 + 1 >= 3)   O => answer = 7
6     (7 + 1 >= 6)   O => answer = 13
7     (13 + 1 >= 7)  O => answer = 20
30    (21 + 1 >= 30) X => answer = 21

풀이 과정: https://aerocode.net/392

1 2 4 7 13

1
2 2+1(3)
4 4+1(5) 4+2(6)
7 7+1(8) 7+2(9) 7+1+2(10) 7+4(11)
12(X) => 최솟값
13
"""

answer = 0
for s in S:
    if answer + 1 < s:
        break
    answer += s

print(answer + 1)
