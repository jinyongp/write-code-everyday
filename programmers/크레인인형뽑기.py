def solution(board, moves):
    """
    [
        [0,0,0,0,0],
        [0,0,1,0,3],
        [0,2,5,0,1],
        [4,2,4,4,2],
        [3,5,1,3,1]
    ]    1 2 3 4 5

    [1,5,3,5,1,2,1,4]

    [
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,5,0,0],
        [0,2,4,0,2],
        [0,5,1,3,1]
    ]    1 2 3 4 5

    [1] [5]   [3]     [5]   [1] [2]   [1]   [4]
    [4] [4,3] [4,3,1] [4,3] [4] [4,2] [4,2] [4,2,4]
    0   0     0       2     4   4     4     4

    basket의 경우 stack으로 한다.
    만약, top과 동일한 값을 넣으려고 할 때 넣지 않음과 동시에 top 또한 pop한다.
    사라진 인형의 갯수를 2 증가한다.

    col만 주어지므로 해당 col의 row를 탐색해서 0이 아닌 수가 나올 때까지 순회한다.
    0이 아닌 수를 만나면 해당 수를 basket에 넣고 그 자리를 0으로 채운다.
    만약, row를 모두 순회할 때까지 만나지 못한다면 별도 처리 없이 다음으로 넘어간다.
    """
    basket = list()
    count = 0

    size = len(board)
    moves = list(map(lambda x: x - 1, moves))
    for col in moves:
        for row in range(size):
            doll = board[row][col]
            if doll:
                if len(basket) and basket[-1] == doll:
                    basket.pop()
                    count += 2
                else:
                    basket.append(doll)
                board[row][col] = 0
                break

    return count


board = [[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [
    0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]]
moves = [1, 5, 3, 5, 1, 2, 1, 4]
print(solution(board, moves))
