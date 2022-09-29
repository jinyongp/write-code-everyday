"""
Trie 자료구조는 문자열을 효율적으로 검색할 수 있도록 구현할 수 있다.
"""
from collections import deque


class Node:
    def __init__(self, key, string=None):
        self.key = key
        self.string = string  # end flag
        self.children = dict()

    def __str__(self):
        str = f"{self.key} [{', '.join(self.children)}]"
        if self.string:
            str += f" {self.string}"
        return str


class Trie:
    def __init__(self):
        self.root = Node(None)

    def __str__(self):
        return self.__str__()

    def print(self):
        stack = [(self.root, 0)]
        while stack:
            node, depth = stack.pop()
            print("  " * depth, end="")
            print(node)
            for child in node.children.values():
                stack.append((child, depth + 1))

    def insert(self, string):
        node = self.root
        for ch in string:
            if ch not in node.children:
                node.children[ch] = Node(ch)
            node = node.children[ch]
        node.string = string

    def search(self, query):  # query는 ? 가능
        queue = deque()
        queue.append((self.root, query))
        result = []
        while queue:
            node, q = queue.popleft()
            if len(q) == 0:
                if node.string:
                    result.append(node.string)
                    continue
                continue

            if q[0] == "?":
                for child in node.children.values():
                    queue.append((child, q[1:]))
            elif q[0] in node.children:
                queue.append((node.children[q[0]], q[1:]))

        return result


if __name__ == '__main__':
    trie = Trie()
    trie.insert("aaaaa")
    trie.insert("ababa")
    trie.insert("abbba")
    trie.insert("bbbbb")

    print(trie.search("?????"))
    print(trie.search("???aa"))
    print(trie.search("a?a?a"))
    print(trie.search("?b?b?"))
