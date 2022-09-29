def solution(s: str) -> bool:
    return len(s) in (4, 6) and s.isnumeric()


print(solution('a234'))
