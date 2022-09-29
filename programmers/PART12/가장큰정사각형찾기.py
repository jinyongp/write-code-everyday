def solution(board):
    """
    dp[i][j] = (j, i) 위치에서 가장 긴 정사각형의 한 변의 길이
    dp[i][j] = 1 + min(dp[i-1][j], dp[i-1][j], dp[i-1][j-1]) (if dp[i][j] == 1)

    i
  j 0 1 2 3 4 5
    1 0 0 0 0 0 -> padding (계산을 편리하게 하기 위해서)
    2 0 0 1 1 1
    3 0 1 1 1 1
    3 0 1 1 1 1
    4 0 1 1 1 1
    5 0 0 0 1 0

    dp[i][j] 위치에서 왼쪽, 위쪽, 왼 대각선 위쪽의 가장 최솟값에 1을 더한 값이다.
    """
    h, w = len(board) + 1, len(board[0]) + 1
    dp = [[0] * w for _ in range(h)]

    for i in range(1, h):
        for j in range(1, w):
            dp[i][j] = board[i - 1][j - 1]

    for i in range(1, h):
        for j in range(1, w):
            if dp[i][j]:
                dp[i][j] = 1 + min(
                    dp[i - 1][j],
                    dp[i][j - 1],
                    dp[i - 1][j - 1]
                )

    return max(max(row) for row in dp) ** 2


board = [
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 0, 1, 0],
    [0, 1, 1, 0],
]
# print(solution(board))

board = [[0, 0, 1, 1], [1, 1, 1, 1]]
print(solution(board))
