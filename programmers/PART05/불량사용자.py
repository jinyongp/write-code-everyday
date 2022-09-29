# https://programmers.co.kr/learn/courses/30/lessons/64064

class Node:
    def __init__(self, key, count=0):


class Trie:


def solution(user_id, banned_id):
    """
    문자열을 비교할 것이므로 trie 자료구조를 활용한다.
    """
    return 0


user_id = ["frodo", "fradi", "crodo", "abc123", "frodoc"]
banned_id = ["fr*d*", "abc1**"]
print(solution(user_id, banned_id))  # 2

user_id = ["frodo", "fradi", "crodo", "abc123", "frodoc"]
banned_id = ["*rodo", "*rodo", "******"]
print(solution(user_id, banned_id))  # 2

user_id = ["frodo", "fradi", "crodo", "abc123", "frodoc"]
banned_id = ["fr*d*", "*rodo", "******", "******"]
print(solution(user_id, banned_id))  # 3
