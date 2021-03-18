# https://programmers.co.kr/learn/courses/30/lessons/60060

import re


def solution(words, queries):
    """
    query의 ?를 .으로 대치하여 regex로 만든다.
    words를 공백으로 구분되는 문자열로 만들고 regex로 선별한다.
    query에 따라 선별된 이름의 갯수를 답안에 추가한다.
    """
    answer = []
    word_list = "\n".join(words)
    for query in queries:
        regex = "^" + query.replace("?", ".") + "$"
        result = re.findall(regex, word_list, re.M)
        answer.append(len(result))

    return answer


# words = ["frodo", "front", "frost", "frozen", "frame", "kakao"]
# queries = ["fro??", "????o", "fr???", "fro???", "pro?"]
# print(solution(words, queries))  # [3, 2, 4, 1, 0]

words = ["aaa", "aaaaa", "aa", "abaab", "abbab", "cab"]
queries = ["???", "a??a?", "a?aa?", "?a?", "a??a?"]
print(solution(words, queries))  # [3, 2, 4, 1, 0]
