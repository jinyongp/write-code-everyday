def convert(n, c):
    if n == 0:
        return ''
    d, r = divmod(n, c)
    return convert(d, c) + str(r)


def solution(n):
    result = convert(n, 3)
    return int(result[::-1], 3)


print(solution(45))
print(solution(125))
