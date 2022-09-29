# https://programmers.co.kr/learn/courses/30/lessons/12909

def solution(s):
    """
    stack 자료 구조를 사용한다.

    s = "()()"

    1: ( => [ ( ]: stack의 대치되는 괄호가 없으므로 ( 를 그대로 넣는다.
    2: ) => [ ]: stack의 top에 대치되는 괄호가 있으므로 top을 제거한다.

    stack이 비었으므로 true를 반환한다.
    """

    stack = list()
    paren = {")": "("}

    for c in s:
        if len(stack) and stack[-1] == paren.get(c):
            stack.pop()
        else:
            stack.append(c)
    return not bool(len(stack))


s = "()()"
print(solution(s))  # true
s = "(())()"
print(solution(s))  # true
s = ")()("
print(solution(s))  # false
s = "(()("
print(solution(s))  # false
