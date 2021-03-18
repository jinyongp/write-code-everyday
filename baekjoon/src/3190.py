# https://www.acmicpc.net/problem/3190

from collections import deque
from os import system
from time import sleep

N, K = int(input()), int(input())
A = {tuple(map(lambda x: int(x) - 1, input().split())) for _ in range(K)}
L = int(input())
XC = [tuple(input().split()) for _ in range(L)]
XC = {int(x): c for x, c in XC}

"""
사과의 위치 (3,4) (2,5) (5,3)
뱀의 방향 전환 (3,D)(15,L) (17,D)

  1 2 3 4 5 6
1 0 0 0 0 0 0
2 0 0 0 0 0 0
3 0 0 0 0 A 0
4 0 0 A 0 0 0
5 0 A 0 0 0 0
6 0 0 0 0 0 0

뱀의 이동규칙
  1. 매 초마다 머리가 앞으로 전진한다.
  2. 이동경로에 사과가 있으면 꼬리는 움직이지 않는다.
  3. 없다면, 맨 끝의 꼬리가 사라진다.

사과의 위치를 담은 set과 뱀의 이동경로를 담을 board 리스트를 생성한다.

뱀의 시작 지점인 board[0][0]을 True로 한다.

뱀은 queue로 구현된다. 머리는 snake[-1]에 위치하고 꼬리는 snake[0]에 위치한다.
뱀은 머리 위치를 가지고 있어 머리의 위치가 board를 벗어나거나 board의 True 값에 위치하면 전진을 멈춘다.

뱀은 매 초 머리가 향하는 방향으로 움직인다. 이동하기 전에 주어진 방향으로 회전한 후 진행한다.
사과가 위치하는 좌표를 지날 때면 꼬리는 함께 움직이지 않는다.
"""


class SnakeBoard:
    def __init__(self, size, apples):
        self.size = size
        self.board = [[False for _ in range(size)] for _ in range(size)]
        self.board[0][0] = True
        self.apples = apples
        self.snake = deque()
        self.snake.append((0, 0))
        self.move_count = 0
        self._dr, self._dc = [0, 1, 0, -1], [1, 0, -1, 0]
        self._i = 0

    def __str__(self):
        board = ""
        for row in range(self.size):
            for col in range(self.size):
                if (row, col) in self.apples:
                    board += "\033[1;31mA \033[0m"
                elif (col, row) == self.snake[-1]:
                    board += "\033[1;35mH \033[0m"
                elif self.board[row][col]:
                    board += "\033[1;34ms \033[0m"
                else:
                    board += "· "

            board += "\n"

        board += "Time: %2d" % self.move_count
        board += f"\nDirection: {('RIGHT', 'DOWN', 'LEFT', 'UP')[self._i]}"
        return board

    def out_of_board(self, x, y):
        return x < 0 or y < 0 or x >= self.size or y >= self.size

    def check_collision(self, x, y):
        return self.board[y][x]

    def forward(self):
        col, row = self.snake[-1]
        dr, dc = self._dr[self._i], self._dc[self._i]
        nr, nc = row + dr, col + dc
        self.move_count += 1

        if self.out_of_board(nc, nr) or self.check_collision(nc, nr):
            return False

        if (nr, nc) not in self.apples:
            c, r = self.snake.popleft()
            self.board[r][c] = False
        else:
            self.apples.remove((nr, nc))

        self.snake.append((nc, nr))
        self.board[nr][nc] = True
        return True

    def turn(self, direction):
        if direction == "D":
            self._i += 1
        elif direction == "L":
            self._i -= 1
        self._i %= 4


snake = SnakeBoard(N, A)
while True:
    system("clear")
    if not snake.forward():
        break

    if snake.move_count in XC:
        snake.turn(XC.get(snake.move_count))

    print(snake)
    sleep(0.1)

# print(snake.move_count)
print(snake)
print("Press ^C to End")
try:
    sleep(999)
except KeyboardInterrupt:
    exit(0)
