# https://programmers.co.kr/learn/courses/30/lessons/42587?language=python3
from collections import deque


def solution(priorities, location):
    """
    1. 인쇄 대기목록의 가장 앞에 있는 문서(J)를 대기목록에서 꺼냅니다.
    2. 나머지 인쇄 대기목록에서 J보다 중요도가 높은 문서가 한 개라도 존재하면 J를 대기목록의 가장 마지막에 넣습니다.
    3. 그렇지 않으면 J를 인쇄합니다.

     0  1  2  3
    [2, 1, 3, 2] 2
                                                     1  2  3  0
    2 [1, 3, 2] -> 3이 더 중요도가 높으므로 2를 뒤로 보낸다. [1, 3, 2, 2]
                                                     2  3  0  1
    1 [3, 2, 2] -> 3이 더 중요도가 높으므로 1을 뒤로 보낸다. [3, 2, 2, 1]

    3 [2, 2, 1] -> 3이 출력된다(1) location과 동일하므로 1을 반환한다.
    """
    documents = deque((i, priority) for i, priority in enumerate(priorities))
    result = 0

    while documents:
        index, priority = documents.popleft()
        if any(priority < p for _, p in documents):
            documents.append((index, priority))
            continue
        result += 1
        if location == index:
            return result

    return result


priorities, location = [2, 1, 3, 2], 2
print(solution(priorities, location))

priorities, location = [1, 1, 9, 1, 1, 1], 0
print(solution(priorities, location))

priorities, location = [1, 1, 1], 0
print(solution(priorities, location))

priorities, location = [1, 1, 1], 1
print(solution(priorities, location))

priorities, location = [1, 1, 1], 2
print(solution(priorities, location))
