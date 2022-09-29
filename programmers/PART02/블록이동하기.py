# https://programmers.co.kr/learn/courses/30/lessons/60063
from collections import deque


def solution(board):
    """
    최소 시간을 탐색해야 하므로 bfs로 해결할 수 있다.

    - 로봇은 2x1 크기로 (1,1), (1,2)에 위치하고 있다.
    - 로봇이 이동할 수 있는 모든 경로를 탐색하여 더 이상 이동하지 못한다면 queue에 추가하지 않는다.
    - 이동 가능한 경로 중에서 (n, n)에 먼저 도달한 횟수를 반환한다.

    로봇의 이동 횟수가 tree의 높이가 된다.
    로봇의 이동 경로가 tree의 너비가 된다.
    """

    queue = deque()
    visited = set()


board = [[0, 0, 0, 1, 1], [0, 0, 0, 1, 0], [
    0, 1, 0, 1, 1], [1, 1, 0, 0, 1], [0, 0, 0, 0, 0]]
print(solution(board))
