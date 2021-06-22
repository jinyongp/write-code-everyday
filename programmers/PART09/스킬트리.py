# https://programmers.co.kr/learn/courses/30/lessons/49993?language=python3

def solution(skill, skill_trees):
    """
    "CBD" ["BACDE", "CBADF", "AECB", "BDA"]

    스킬트리에서 주어진 스킬에 해당하는 것만 뽑아냄
    스킬의 부분문자열로 시작하는지 확인한다.

    BACDE => BCD
    CBADF => CBD
    AECB  => CB
    BDA   => BD

    부분문자열인지 구하는 방법: python의 in 키워드 사용
    """
    answer = 0

    # 주어진 스킬만 추출하여 ext로 시작하는지 확인한다.
    for tree in skill_trees:
        answer += skill.startswith(
            "".join(s for s in tree if s in skill)
        )

    return answer


skill, skill_trees = "CBD", ["BACDE", "CBADF", "AECB", "BDA"]
print(solution(skill, skill_trees))
