from bisect import insort, bisect_left, bisect_right


def solution(words, queries):
    """
    O(logN)의 성능을 내기 위해 이진탐색을 활용한다.

    - bisect 라이브러리의 insort, bisect_left, bisect_right 함수를 사용한다.
    - 정렬된 상태로 삽입하기 위해 insort를 사용한다. (O(N))
    - bisect_left, bisect_right를 이용하여 정렬된 리스트에서의 특정 범위에 속하는 원소의 개수를 구한다. O(logN)
        => bisect_right(words, "end_string") - bisect_left(words, "start_string")
        => ex) froaa ~ frozz에 속하는 단어 개수

    - 문자열의 길이를 key로 하는 hash_map을 생성하여 동일한 길이의 문자열을 묶는다.
    - query의 경우, ?로 시작하는 경우 정상적으로 동작하지 않으므로 뒤집은 단어의 목록을 따로 만들어서 뒤집은 query로 찾도록 한다.
    """
    word_map = {len(word): [] for word in words}
    r_word_map = {len(word): [] for word in words}
    for word in words:
        insort(word_map[len(word)], word)
        insort(r_word_map[len(word)], word[::-1])

    answer = []
    for query in queries:
        key = len(query)
        try:
            if query[0] == "?":
                r_query = query[::-1]
                answer.append(bisect_right(
                    r_word_map[key], r_query.replace("?", "z")
                ) - bisect_left(
                    r_word_map[key], r_query.replace("?", "a")
                ))
            else:
                answer.append(bisect_right(
                    word_map[key], query.replace("?", "z")
                ) - bisect_left(
                    word_map[key], query.replace("?", "a")
                ))
        except KeyError:
            answer.append(0)

    return answer


words = ["frodo", "front", "frost", "frozen", "frame", "kakao"]
queries = ["fro??", "????o", "fr???", "fro???", "pro?"]
print(solution(words, queries))  # [3, 2, 4, 1, 0]
