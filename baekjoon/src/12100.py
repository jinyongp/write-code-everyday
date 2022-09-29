# https://www.acmicpc.net/problem/12100

N = int(input())
B = [list(map(int, input().split())) for _ in range(N)]

"""
2 2 2
4 4 4
8 8 8

좌측(row, col-1)으로만 움직인 경우를 고려한다. 보드의 상태는 결과에 영향을 미치지 않으므로, 90도, 180도, 270도로 돌려가며 검사하고 최댓값을 비교한다.
"""


def solution(board, count):

    stack = set()
    visited =


print(solution(B, 5))
