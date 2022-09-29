def solution(s: str) -> bool:
    lower_s = s.lower()
    return lower_s.count('p') == lower_s.count('y')


print(solution("pPoooyY"))
