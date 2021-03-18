from itertools import permutations
import re


def calculate(exp, pri):
    """
    연산자의 우선 순위에 따라 계산하여 산출된 결과를 반환한다.
    동일한 연산자가 있을 경우, 앞에 위치하는 연산자를 먼저 계산한다.
    exp = [operand, operator, operand ...]
    pri = ('*', '+', '-')

    exp = ['100', '-', '200', '*', '300', '-', '500', '+', '20']
    pri = ('*', '+', '-')

    * 연산자가 1순위이므로 * 연산자를 찾아내 앞에 위치한 200과 300을 * 연산자한다.
    * 연산자가 더 이상 없을 때까지 반복하고 다음 우선 순위로 넘어간다.
    값이 하나가 나올 때까지 반복한다.
    """
    p_list = list(pri[::-1])

    p = p_list.pop()
    while True:
        try:
            i = exp.index(p)
            exp = exp[:i - 1] + [str(eval(
                exp[i - 1] + exp[i] + exp[i + 1]
            ))] + exp[i + 2:]

        except ValueError:
            if len(p_list) == 0:
                break
            p = p_list.pop()

    return int(exp[0])


def solution(expression):
    """
    expression 내에 존재하는 연산자를 고른다.

    + - * => 총 6가지의 경우의 수가 나오므로 우선 순위를 설정해 모든 경우를 고려하여 절댓값이 가장 큰 값을 탐색한다.

    regex를 이용하여 operand와 operator를 분리한다.
    """
    regex = re.compile(r"\d+|-|\+|\*|")
    exp = regex.findall(expression)[:-1]

    # 연산자 우선 순위 고려
    operators = set(filter(lambda x: x in ["+", "-", "*"], exp))
    priorities = list(permutations(operators))

    result = 0
    for priority in priorities:
        result = max(result, abs(calculate(exp, priority)))

    return result


print(solution("100-200*300-500+20"))  # 60420
print(solution("50*6-3*2"))  # 300
