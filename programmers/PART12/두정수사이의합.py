def solution(a, b):
    sign = 1 if a < b else -1
    return sum(range(a, b + sign, sign))


print(solution(5, 3))
