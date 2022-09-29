# https://programmers.co.kr/learn/courses/30/lessons/60060
from collections import deque


class Node:
    def __init__(self, key, end=False):
        self.key = key
        self.end = end  # end flag
        self.children = dict()


class Trie:
    def __init__(self):
        self.root = Node(None)

    def insert(self, string):
        node = self.root
        for ch in string:
            if ch not in node.children:
                node.children[ch] = Node(ch)
            node = node.children[ch]
        node.end = True

    def count(self, query):  # query는 ? 가능
        node = self.root
        queue
        result = 0
        for q in query:
            if q == "?":
                queue =
                continue
            if q not in node.children:
                break
        else:
            return result

        return 0


def solution(words, queries):
    """
    Trie 자료구조를 활용한다.

    단어의 길이 별로 Trie
    """
    answer = []
    trie = Trie()
    r_trie = Trie()
    for word in words:
        trie.insert(word)
        r_trie.insert(word[::-1])

    for query in queries:
        if query[0] == "?":
            answer.append(r_trie.count(query[::-1]))
        else:
            answer.append(trie.count(query))

    return answer


words = ["frodo", "front", "frost", "frozen", "frame", "kakao"]
queries = ["fro??", "????o", "fr???", "fro???", "pro?"]
print(solution(words, queries))  # [3, 2, 4, 1, 0]
