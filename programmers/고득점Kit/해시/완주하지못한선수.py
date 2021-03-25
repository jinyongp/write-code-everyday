# https://programmers.co.kr/learn/courses/30/lessons/42576?language=python3

from collections import Counter as C


def solution(participant, completion):
    """
    동명이인이 있으므로 dict를 사용하여 인원을 체크하고 남는 한 명을 반환한다.
    """
    return (C(participant) - C(completion)).most_common(1)[0][0]


participant = ["leo", "kiki", "eden"]
completion = ["eden", "kiki"]
print(solution(participant, completion))

participant = ["marina", "josipa", "nikola", "vinko", "filipa"]
completion = ["josipa", "filipa", "marina", "nikola"]
print(solution(participant, completion))

participant = ["mislav", "stanko", "mislav", "ana"]
completion = ["stanko", "ana", "mislav"]
print(solution(participant, completion))
