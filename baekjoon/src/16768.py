# https://www.acmicpc.net/problem/16768

"""
0000000000
0000000300
0054000300
1054502230
2211122220
1111111223

visited: 이미 방문한 좌표 set
stack: 검사해야하는 좌표 list
좌표: (row, col)

(0,0)부터 시작하여 0이 아닌 곳까지 순회한다.
0이 아닌 곳을 발견하면 그 수를 저장하고 visited에 넣는다.
저장한 수와 동일한 수가 발견되면 visited에 없는지 확인하고 없다면 위와 동일하게 진행한다.
더 이상 동일한 수가 발견되지 않는다면 visited에 저장된 갯수를 확인하여 K개 이상이라면 isRemoved True로 하고 해당 좌표를 0으로 변경한다.

건초 아래는 0이 존재할 수 없으므로 건초 아래 0이 발견된다면 내리는 과정이 필요하다.

위의 똑같은 과정을 반복한다. (N-1, 9)까지 탐색하면서 제거된 건초가 없는 상태라면 과정을 종료하고 현재 게임판을 출력한다.
"""

N, K = map(int, input().split())
B = [list(map(int, list(input()))) for _ in range(N)]


def out_of_board(row, col):
    return row < 0 or col < 0 or row >= N or col >= 10


def get_cell(row, col):
    return B[row][col]


def set_cell(row, col, value):
    global B
    B[row][col] = value


def burn_haybale(coord, visited):
    """
    K개 이상의 동일한 색상을 지닌 건초를 없애기 위해 방향벡터를 이용한다.
    """
    global B, K
    dr, dc = [0, 0, 1, -1], [1, -1, 0, 0]
    same_color = {coord}
    stack = [coord]
    while stack:
        c = stack.pop()
        if c not in visited:
            visited.add(c)
            hay = get_cell(*c)
            for i in range(4):
                d_c = c[0] + dr[i], c[1] + dc[i]
                if out_of_board(*d_c):
                    continue
                cell = get_cell(*d_c)
                if cell == hay and d_c not in visited:
                    same_color.add(d_c)
                    stack.append(d_c)

    if len(same_color) >= K:
        for row, col in same_color:
            set_cell(row, col, 0)


def fall_haybale():
    """
    떠있는 건초를 바닥으로 내린다.(건초 아래는 0이 있으면 안된다.)
    (0,0)부터 검사하여 0이 아닌 수가 나온다면 수와 좌표를 저장하고 그 아래를 확인한다.
    아래가 0이 아니라면 저장한 수를 복사해서 놓고 저장한 좌표에 0을 넣는다.

    위의 과정을 N-1 줄 까지 반복한다.
    바닥으로 내려간 건초가 있다면 True를 반환한다.
    """
    global B
    isChanged = False
    while True:
        exit = True
        for row in range(N - 1):
            for col in range(10):
                cell = get_cell(row, col)
                under_cell = get_cell(row + 1, col)
                if cell == 0:
                    continue
                if under_cell == 0:
                    isChanged = True
                    exit = False
                    set_cell(row, col, 0)
                    set_cell(row + 1, col, cell)
        if exit:
            break

    return isChanged


def Game():
    visited = set()
    while True:
        exist = True
        for row in range(N):
            for col in range(10):
                if get_cell(row, col) == 0:
                    continue
                burn_haybale((row, col), visited)
        exist = not fall_haybale()
        visited = set()
        if exist:
            return


Game()

for row in B:
    print("".join(map(str, row)))
