from beeprint import pp


def is_available(candidate, current_col):
    current_row = len(candidate)
    for queen_row in range(current_row):
        if candidate[queen_row] == current_col or abs(candidate[queen_row] - current_col) == current_row - queen_row:
            return False
    return True


def DFS(N, final_result, current_row=0, current_candidate=[]):
    if current_row == N:
        final_result.append(current_candidate[:])
        return

    for candidate_col in range(N):
        if is_available(current_candidate, candidate_col):
            current_candidate.append(candidate_col)
            DFS(N, final_result, current_row + 1, current_candidate)
            current_candidate.pop()
            pp(current_candidate)
            draw_board(current_candidate, N)


def solve_n_queens(N):
    final_result = []
    DFS(N, final_result)
    return final_result


def draw_board(data: list[int], N):
    board = [[0 for _ in range(N)] for _ in range(N)]
    for row, col in enumerate(data):
        board[row][col] = 1
    pp(board)


solve_n_queens(4)
