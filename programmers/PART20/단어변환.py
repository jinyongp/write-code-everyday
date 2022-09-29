# https://programmers.co.kr/learn/courses/30/lessons/43163?language=python3
from collections import deque
import re


def search(word, wordset, visited):
    results = set()
    for w in word:
        query = word.replace(w, ".")
        if query not in visited:
            visited.add(query)
            results.update(
                re.findall("^" + query + "$", "\n".join(wordset), re.M)
            )

    return results


def solution(begin, target, words):
    """
    가장 짧은 변환 과정을 찾아야 하므로 bfs를 사용한다.

    tree의 높이는 words의 갯수이다.

    "hit"   "cog"   ["hot", "dot", "dog", "lot", "log", "cog"]

    hit에서 모든 문자에 대해 [a-z]로 대치하여 words 내 존재하는지 확인한다.
    (visited set에 추가된 query는 다시 검사하지 않는다.)
    .it, h.t, hi. => [hot] target word가 있는지 검사한다.
    .ot, ho. => [dot, lot]
    ...
    """
    wordset = set(words)
    if begin in words:
        words.remove(begin)
    queue = deque()
    queue.append((0, begin))
    visited = set()
    while queue:
        count, word = queue.popleft()
        count += 1
        results = search(word, wordset, visited)
        if target in results:
            return count
        for result in results:
            queue.append((count, result))
            wordset.remove(result)

    return 0


begin, target, words = "hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]
print(solution(begin, target, words))
