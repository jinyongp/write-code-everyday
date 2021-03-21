# https://programmers.co.kr/learn/courses/30/lessons/67258
def solution(gems):
    """
    투 포인터 알고리즘을 활용한 완전 탐색을 해야한다.

    ["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"]

    - gem이 위치하는 진열대를 카운팅하는 dict를 생성한다. 이 dict에서 키는 현재 구간에 있는 보석의 종류를 의미하고 값은 갯수를 의미한다. 갯수가 0이 되면 키를 제거해야 한다.
        (collections.Counter를 사용하면 효율성 테스트에서 실패한다.)
    - start, end 포인터를 0 인덱스에 위치한다. 해당 보석을 checked set에 추가한다.
        DIA를 가리키고 있음, gem_count = {DIA: 1}
    - checked set이 보석의 종류를 모두 가질 때까지 end를 증가한다.
    - 모두 가지게 되면 저장되어 있는 구간과 비교하여 더 짧은 구간이라면 저장한다.
    - start가 가리키고 있는 보석을 1 감소시키고 start를 1 증가시킨다. gem_count에서 개수가 0인 보석을 제거한다.
    - 모든 보석을 포함하는 가장 짧은 구간을 반환한다.
    """
    def shorter(a, b):
        return a if a[1] - a[0] <= b[1] - b[0] else b

    gem_kinds = set(gems)
    gem_count = dict()
    start = end = 0
    result = [1, len(gems)]
    gem_count[gems[0]] = 1
    while True:
        if len(gem_count) == len(gem_kinds):
            result = shorter(result, [start + 1, end + 1])
            gem_count[gems[start]] -= 1
            if gem_count[gems[start]] == 0:
                del gem_count[gems[start]]
            start += 1
            if start == len(gems):
                break
        else:
            end += 1
            if end == len(gems):
                break
            gem_count[gems[end]] = gem_count.get(gems[end], 0) + 1

    return result


# gems = ["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"]
# print(solution(gems))  # [3, 7]

# gems = ["AA", "AB", "AC", "AA", "AC"]
# print(solution(gems))  # [1, 3]

# gems = ["XYZ", "XYZ", "XYZ"]
# print(solution(gems))  # [1, 1]

# gems = ["ZZZ", "YYY", "NNNN", "YYY", "BBB"]
# print(solution(gems))  # [1, 5]

gems = ["A", "A", "B"]
print(solution(gems))  # [2, 3]
