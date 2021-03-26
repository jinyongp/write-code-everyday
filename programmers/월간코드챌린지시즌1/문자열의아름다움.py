def substrings(s):
    """
    부분 문자열 추출
    i
    0 b, ba, bab, baby
    1 a, ab, aby
    2 b, by
    3 y

    문자 하나만 있는 것은 제외한다.

    O(N^2)의 경우 테스트를 통과하지 못한다.
    """
    result = []
    for i in range(len(s) + 1):
        for j in range(i + 1, len(s)):
            result.append(s[i:j + 1])
    return result


def beauty(x):
    """
    - x의 모든 문자가 같아면 0을 반환한다.
    - 서로 다른 글자가 위치한 i, j를 골랐을 때 j - i 값 중 최댓값이다.

    맨 앞을 기준으로 혹은 맨 뒤를 기준으로 판단하여 최댓값을 구한다.
    """
    if (set(x)) == 1:
        return 0

    result = 0
    for j in range(len(x) - 1, -1, -1):
        if (x[0] != x[j]):
            result = j
            break

    for j in range(len(x)):
        if (x[-1] != x[j]):
            result = max(result, len(x) - j)
            break

    return result


def solution(s):
    """
    어떤 문자열 x의 "아름다움"을 다음과 같이 정의합니다.

    - 만약 x의 모든 글자가 전부 같다면, 0입니다.
    - 그렇지 않다면, 서로 다른 글자가 위치해 있는 두 인덱스 i, j를 골랐을 때의 j-i 값들 중 최대값입니다.

    "baby"

    부분 문자열

    "b", "a", "b", "y" = 0
    "ba" = 1, "ab" = 1, "by" = 1
    "bab" = 1, "aby" = 2
    "baby" = 3

    아름다움의 총합: 9
    """
    sub = substrings(s)

    return sum(map(beauty, sub))


s = "baby"
print(solution(s))

s = "oo"
print(solution(s))
