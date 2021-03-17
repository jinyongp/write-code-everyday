# https://www.acmicpc.net/problem/16768

"""
hash로 해결한다.
{key: value} => {(row, col): haybale}


좌표: (row, col)
0000000000
0000000300
0054000300
1054502230
2211122220
1111111223

visited: 이미 방문한 좌표 set
stack: 검사해야하는 좌표 set()

(0,0)부터 시작하여 0이 아닌 곳까지 순회한다.
0이 아닌 곳을 발견하면 그 수를 저장하고 visited에 넣는다.
저장한 수와 동일한 수가 발견되면 visited에 없는지 확인하고 없다면 위와 동일하게 진행한다.
더 이상 동일한 수가 발견되지 않는다면 visited에 저장된 갯수를 확인하여 K개 이상이라면 isRemoved True로 하고 해당 좌표를 0으로 변경한다.

건초 아래는 0이 존재할 수 없으므로 건초 아래 0이 발견된다면 내리는 과정이 필요하다.

위의 똑같은 과정을 반복한다. (N-1, 9)까지 탐색하면서 제거된 건초가 없는 상태라면 과정을 종료하고 현재 게임판을 출력한다.
"""

N, K = map(int, input().split())
B = [list(map(int, list(input()))) for _ in range(N)]


class GameBoard:
    """
    Mooyo Mooyo Game board를 만든다.
    """

    def __init__(self, board, width, height):
        """
        board는 이차원 배열의 형태이다.
        [
            [0, 0, 0...]
            ...
        ]
        """
        self._board = dict()
        self._width = width
        self._height = height
        for row in range(len(board)):
            for col in range(len(board[0])):
                if board[row][col] != 0:
                    self._board[(row, col)] = board[row][col]

    def __str__(self):
        board = [[0]*self._width for _ in range(self._height)]
        for (row, col), cell in self:
            board[row][col] = cell

        return "\n".join(["".join(map(str, row)) for row in board])

    def __iter__(self):
        for key, value in list(self._board.items()):
            yield key, value

    def out_of_board(self, row, col):
        return (
            row < 0 or row >= self._height or col < 0 or col >= self._width
        )

    def get(self, row, col):
        return self._board.get((row, col), 0)

    def set(self, value, row, col):
        self._board[(row, col)] = value

    def burn(self, row, col):
        del self._board[(row, col)]

    def search_around(self, condition, row, col):
        """
        (row, col)과 condition을 입력받아 주변 좌표를 검사하여 조건에 부합하는 좌표를 set에 담아 반환한다.
        """
        result = set()
        dr, dc = [-1, 1, 0, 0], [0, 0, -1, 1]
        for i in range(4):
            d_coord = row + dr[i], col + dc[i]
            if self.out_of_board(*d_coord):
                continue
            if condition(d_coord):
                result.add(d_coord)
        return result

    def find_equivalent(self, up=0):
        container = list()
        done = set()
        for cell, value in self:
            if cell in done:
                continue
            stack = set()
            stack.add(cell)
            visited = set()
            while stack:
                row, col = stack.pop()
                if (row, col) in visited:
                    continue
                visited.add((row, col))
                result = self.search_around(lambda x: (
                    self.get(*x) == value
                ), row, col)
                stack.update(result)
                done.update(result)
            if len(visited) >= up:
                container.append(visited)
        return container

    def burn_equivalent(self, k=1):
        haybale_list = self.find_equivalent(k)
        for haybale in haybale_list:
            for cell in haybale:
                self.burn(*cell)

    def rearrange(self):
        isChanged = False
        while True:
            exist = True
            for (row, col), value in self:
                under_cell = row + 1, col
                if self.out_of_board(*under_cell):
                    continue
                if under_cell not in self._board:
                    exist = False
                    isChanged = True
                    self.burn(row, col)
                    self.set(value, *under_cell)
            if exist:
                break

        return isChanged


board = GameBoard(B, 10, N)

while True:
    exist = True
    board.burn_equivalent(K)
    exist = not board.rearrange()

    if exist:
        break


print(board)
