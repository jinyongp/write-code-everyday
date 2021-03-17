# @before-stub-for-debug-begin
from typing import List
from collections import deque
from string import ascii_lowercase
# @before-stub-for-debug-end

#
# @lc app=leetcode id=127 lang=python3
#
# [127] Word Ladder
#

# @lc code=start


class Solution:
    def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:
        """
        중복을 없애고 데이터를 조회하는데 빠른 속도를 얻기 위해서 wordSet으로 변환
        wordSet에 endWord가 없다면 변환이 불가능하므로 0을 반환

        ? => [a-z]
        주어진 단어로부터 [a-z]로 바꿔가면서 wordSet에 존재하는지 확인하고 이를 set 형태로 반환

        viewed = {} 이미 조회한 내용을 또 조회하지 않기 위해 추가
        hit => ?it h?t hi? => {hot} (2)
        hot => ?ot ho? => {lot dot} (h?t의 경우, 위에서 이미 조회했으므로 건너뜀) (3)
        dot => d?t do? => {dog} (4)
        dog => ?og d?g => {log, cog} => cog가 존재하므로 종료 (5)
        """
        wordSet = set(wordList)
        if endWord not in wordSet:
            return 0
        if beginWord in wordSet:
            wordSet.remove(beginWord)

        viewed = set()  # 조회한 query를 담는 곳

        def replace(word, i, ch):
            return word[:i] + ch + word[i+1:]

        def search(word):
            """
            주어진 word를 한 문자마다 [a-z]로 순회하며 wordSet에 존재하는지 조회한다.
            여러 개의 결과가 나올 수 있으므로 set 형태로 반환한다.

            wordSet = ["hot","dot","dog","lot","log","cog"]
            input = "hit"
            output = {"hot"}
            """
            result = set()
            for i in range(len(word)):
                query = replace(word, i, "?")
                if query not in viewed:
                    viewed.add(query)
                    for c in ascii_lowercase:
                        key = replace(word, i, c)
                        if key in wordSet:
                            result.add(key)
            return result

        stack = deque()
        stack.append((1, beginWord))

        while stack:
            count, word = stack.popleft()
            count += 1
            searched = search(word)
            if endWord in searched:
                return count
            for s in searched:
                stack.append((count, s))
                wordSet.remove(s)

        return 0

# @lc code=end
