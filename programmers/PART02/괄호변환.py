from collections import deque


def valid(p):
    """
    올바른 괄호 문자열인지 판단한다.

    stack 자료구조를 활용한다.
    """
    stack = list()
    flag = {")": "("}
    for i in p:
        if len(stack) and stack[-1] == flag.get(i):
            stack.pop()
        else:
            stack.append(i)
    return not len(stack)


def balance(p):
    """
    균형잡힌 괄호 문자열인지 확인한다.
    """
    count = 0
    for i in p:
        count = count + 1 if i == "(" else count - 1
    return count == 0


def to_str(lst):
    return "".join(lst)


def split(p):
    """
    균형잡힌 괄호 문자열 u와 나머지 v를 반환한다.
    "("와 ")"의 개수가 동일하다면 균형잡힌 괄호 문자열이다.

    p = "))((()"

    stack, queue 자료구조를 활용한다.
    u, v 리스트를 생성해서 v 리스트에 p를 저장하고 값을 하나씩 넣으면서
    """
    u, v = list(), deque(p)
    while len(v):
        u.append(v.popleft())
        if balance(u):
            return to_str(u), to_str(v)
    return to_str(u), to_str(v)


def make_valid(u, m):
    """
    아래의 절차를 수행해 올바른 문자열로 만든다.

    u의 첫 번째와 마지막 문제를 제거하여 괄호의 방향을 전부 뒤집는다.

    "(" + m + ")" + 나머지
    """
    return "(" + m + ")" + to_str(map(lambda x: {"(": ")", ")": "("}[x], u[1:-1]))


def solution(p):
    """
    1. 입력이 빈 문자열인 경우, 빈 문자열을 반환합니다.
    2. 문자열 w를 두 "균형잡힌 괄호 문자열" u, v로 분리합니다. 단, u는 "균형잡힌 괄호 문자열"로 더 이상 분리할 수 없어야 하며, v는 빈 문자열이 될 수 있습니다.
    3. 문자열 u가 "올바른 괄호 문자열" 이라면 문자열 v에 대해 1단계부터 다시 수행합니다.
        3-1. 수행한 결과 문자열을 u에 이어 붙인 후 반환합니다.
    4. 문자열 u가 "올바른 괄호 문자열"이 아니라면 아래 과정을 수행합니다.
        4-1. 빈 문자열에 첫 번째 문자로 '('를 붙입니다.
        4-2. 문자열 v에 대해 1단계부터 재귀적으로 수행한 결과 문자열을 이어 붙입니다.
        4-3. ')'를 다시 붙입니다.
        4-4. u의 첫 번째와 마지막 문자를 제거하고, 나머지 문자열의 괄호 방향을 뒤집어서 뒤에 붙입니다.
        4-5. 생성된 문자열을 반환합니다.
    """
    if valid(p):
        return p
    u, v = split(p)
    if valid(u):
        return u + solution(v)
    else:
        return make_valid(u, solution(v))


p = ""
print(solution(p))  # "(()())()"
p = ")("
print(solution(p))  # "()"
p = "()))((()"
print(solution(p))  # "()(())()"
