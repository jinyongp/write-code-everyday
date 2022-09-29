# https://www.acmicpc.net/problem/9037
"""
입력은 표준입력(standard input)을 통해 받아들인다. 입력의 첫 줄에는 테스트 케이스의 개수 T가 주어진다. 각각의 테스트 케이스의 첫 줄에는 아이의 인원 N (1 ≤ N ≤ 10)이 주어지고 그 다음 줄에는 각 아이들이 초기에 가지고 있는 사탕의 개수 Ci ( 1 ≤ i ≤ N, 1 ≤ Ci ≤ 30)가 주어진다. 분배 시 C1의 오른쪽에는 C2가, C2의 오른쪽에는 C3가…… 같은 식으로 앉게 되며 CN의 오른쪽에는 C1이 앉게 된다.

0 2 4 7 8 9 -> 2 4 8 8 10 (1 2 4 4 5)
1 6 3 6 8 9 -> 6 4 6 8 10 (3 2 3 4 5)
2 8 5 5 7 9 -> 8 6 6 8 10 (4 3 3 4 5)
3 9 7 6 7 9 -> 10 8 6 8 10 (5 4 3 4 5)
4 10 9 7 7 9 -> 10 10 8 8 10 (5 5 4 4 5)
5 10 10 9 8 9 -> 10 10 10 8 10 (5 5 5 4 5)
6 10 10 10 9 9 -> 10 10 10 10 10

"""


def even(c):
    return c + 1 if c % 2 else c


def solution():
    N = int(input())
    C = list(map(even, map(int, input().split())))

    count = 0
    while len(set(C)) != 1:
        C = list(map(lambda x: x//2, C))
        temp = [C[i-1] for i in range(len(C))]
        for i in range(N):
            C[i] += temp[i]
        C = list(map(even, C))
        count += 1

    print(count)


for _ in range(int(input())):
    solution()
