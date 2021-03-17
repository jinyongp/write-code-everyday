# https://www.acmicpc.net/problem/1012


"""
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
[0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
[0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
[0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0]
[0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0]
[0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0]
[0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0]
[0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0]
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

방향벡터를 확인할 때, out or range 에러 발생을 방지하기 위해 field에 상하좌우에 한 줄의 패딩을 준다.
"""


def dfs(field, visited, coord):
    """
    1 1  => (1,1) (1,2)
      1           (2,2)

    (1,1)은 visited에 없으므로 검사가 필요하다. stack에 넣는다.
    (1,1)을 visited에 추가하고 방향벡터로 주변을 확인한다.
    1을 발견하면 visited에 없는지 확인하고 없다면 stack에 넣는다.

    (1,2)은 visited에 없으므로 이를 stack에 추가하여 위의 가정을 반복한다.
    (2,2)의 주변을 확인할 때 visited에 있거나 혹은 0이므로 넘어간다.
    stack이 비었으므로 반복을 종료한다.
    """
    dx, dy = [0, 0, -1, 1], [1, -1, 0, 0]
    stack = [coord]
    while stack:
        c = stack.pop()
        if c not in visited:
            visited.add(c)
            row, col = c
            for i in range(4):
                d_row, d_col = row + dx[i], col + dy[i]
                if field[d_row][d_col] == 0 or (d_row, d_col) in visited:
                    continue
                stack.append((d_row, d_col))


def solution():
    """
    M행 N열
    """
    M, N, K = map(int, input().split())
    field = [[0 for _ in range(M+2)] for _ in range(N+2)]
    for _ in range(K):
        col, row = map(int, input().split())
        field[row+1][col+1] = 1
    visited = set()
    count = 0
    for row in range(1, N + 1):
        for col in range(1, M + 1):
            cell = field[row][col]
            if cell == 0 or (row, col) in visited:
                continue
            dfs(field, visited, (row, col))
            count += 1
    return count


T = int(input())
for _ in range(T):
    print(solution())
