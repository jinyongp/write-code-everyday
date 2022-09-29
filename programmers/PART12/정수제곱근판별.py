from math import sqrt


def solution(x: int):
    return (sqrt(x) + 1) ** 2 if sqrt(x).is_integer() else -1


print(solution(121))
