def solution(a):
    m = min(a)
    return [x for x in a if x != m] or [-1]


print(solution([5, 3, 4, 1, 2, 1, 3, 4, 1]))
