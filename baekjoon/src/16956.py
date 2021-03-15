# https://www.acmicpc.net/problem/16956

"""
크기가 R×C인 목장 (1×1 크기의 칸)
각 칸은 비어져 있거나, 양 혹은 늑대가 있다.

양은 이동하지 않는다.
늑대는 인접한 칸을 이동한다. (변을 공유하면 인접한 것이다.)

늑대는 울타리가 있는 칸으로는 이동할 수 없다. 울타리를 설치한다.
"""

R, C = map(int, input().split())
B = [list(input()) for _ in range(R)]

"""
상하좌우만 움직일 수 있다.

0,0 1,0 2,0
0,1 1,1 2,1
0,2 1,2 2,2

1,1을 기준으로 dx, dy는,
상: 0, -1
하: 0, 1
좌: -1, 0
우: 1, 0
"""
dx, dy = [0, 0, -1, 1], [-1, 1, 0, 0]

for row in range(R):
    for col in range(C):
        if B[row][col] == "W":
            for i in range(4):
                try:
                    # 늑대에 양이 인접하면 울타리로 막을 수 없다.
                    r, c = row + dx[i], col + dy[i]
                    if (r < 0 or c < 0) or (r >= R or c >= C):
                        continue
                    if B[r][c] == "S":
                        print(0)
                        exit(0)
                except IndexError:
                    continue

print(1)
for row in range(R):
    for col in range(C):
        if B[row][col] == ".":
            B[row][col] = "D"
        print(B[row][col], end="")
    print()
