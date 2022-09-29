# https://programmers.co.kr/learn/courses/30/lessons/42748?language=python3

def solution(array, commands):
    """
    array [start, end, k]

    1. slice from start-1 to end
    2. sort sliced array
    3. pick number to k-1th index
    """
    return [sorted(array[s-1:e])[k-1] for s, e, k in commands]


array = [1, 5, 2, 6, 3, 7, 4]
commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]]
print(solution(array, commands))
