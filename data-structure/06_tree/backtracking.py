"""
(0,0),(0,1),(0,2),(0,3)
(1,0),(1,1),(1,2),(1,3)
(2,0),(2,1),(2,2),(2,3)
(3,0),(3,1),(3,2),(3,3)

"""


def is_available(cases, row, col):
    """
    현재까지 거쳐온 경우를 통해 수직 및 대각선에서 겹치는 부분이 있는지 확인해야 한다.

    [1,3]
        0     1     2     3
    0 (-,-),(0,1),(-,-),(-,-)
    1 (-,-),(-,-),(-,-),(1,3)
    2 -> current_row

    row: 2
    col: 0
    queen_row 0 1

    """
    for queen_row in range(row):
        is_vertical = cases[queen_row] == col
        is_diagonal = abs(cases[queen_row] - col) == row - queen_row
        if is_vertical or is_diagonal:
            return False
    return True


def DFS(N: int, result: list[list[int]]) -> None:
    """
    고려할 수 있는 모든 경우의 수 (후보군)를 상태공간트리(State Space Tree)를 통해 표현
    상태 공간 트리를 탐색하면서, 제약이 맞지 않으면 해의 후보가 될만한 곳으로 바로 넘어가서 탐색
     - Promising: 해당 루트가 조건에 맞는지를 검사하는 기법
     - Pruning (가지치기): 조건에 맞지 않으면 포기하고 다른 루트로 바로 돌아서서, 탐색의 시간을 절약하는 기법

    첫 번째 줄(row=0)부터 시작하여 각 열(col)마다의 모든 경우를 탐색한다.
    """
    cases = []

    for row in range(N):
        for col in range(N):
            if is_available(cases, row, col):
                cases.append(col)
            else:
                break
        result.append(cases)
        cases = []


def solve_n_queens(N: int) -> list[list[int]]:
    result = []
    DFS(N, result)
    return result


print(solve_n_queens(4))  # [[1, 3, 0, 2], [2, 0, 3, 1]]
