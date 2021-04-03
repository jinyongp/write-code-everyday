import re


def solution(dartResult):
    """
    1. 다트 게임은 총 3번의 기회로 구성된다.
    2. 각 기회마다 얻을 수 있는 점수는 0점에서 10점까지이다.
    3. 점수와 함께 Single(S), Double(D), Triple(T) 영역이 존재하고 각 영역 당첨 시 점수에서 1제곱, 2제곱, 3제곱 (점수1 , 점수2 , 점수3 )으로 계산된다.
    4. 옵션으로 스타상(*) , 아차상(#)이 존재하며 스타상(*) 당첨 시 해당 점수와 바로 전에 얻은 점수를 각 2배로 만든다. 아차상(#) 당첨 시 해당 점수는 마이너스된다.
    5. 스타상(*)은 첫 번째 기회에서도 나올 수 있다. 이 경우 첫 번째 스타상(*)의 점수만 2배가 된다. (예제 4번 참고)
    6. 스타상(*)의 효과는 다른 스타상(*)의 효과와 중첩될 수 있다. 이 경우 중첩된 스타상(*) 점수는 4배가 된다. (예제 4번 참고)
    7. 스타상(*)의 효과는 아차상(#)의 효과와 중첩될 수 있다. 이 경우 중첩된 아차상(#)의 점수는 -2배가 된다. (예제 5번 참고)
    8. Single(S), Double(D), Triple(T)은 점수마다 하나씩 존재한다.
    9. 스타상(*), 아차상(#)은 점수마다 둘 중 하나만 존재할 수 있으며, 존재하지 않을 수도 있다.

    1S 2D* 3T => 2D에 스타상이 붙었으므로 1S와 2D를 2배로 해야 한다. 1^1 * 2 + 2^2 * 2 + 3^3
    1D 2S# 10S => 2S에 아차상이 붙었으므로 2S에 -1배를 해야한다.

    문자를 하나씩 순회하면서 스타상이 붙었을 때를 대비하여 결과를 저장해야 한다.

    regex를 이용해서 기회를 분리한다. 그리고 점수, 영역, 상으로 분리한다.

    스타상이 있다면 전의 점수와 현재 점수를 2배로 하여 결과에 추가한다. (전에 추가했던 점수는 다시 빼준다.)
    아차상이 있다면 현재 점수를 -1로 곱한다.
    상이 없다면 현재 결과를 추가한다.
    """
    answer = 0

    token = re.findall(r"(?:[0-9]|10)[SDT][*#]?", dartResult)
    previous = 0
    for t in token:
        score, area, prize = re.findall(r"(?:10|[0-9])|[SDT]|[*#]?", t)[0:3]
        current = int(score) ** (["S", "D", "T"].index(area) + 1)

        if prize == "*":
            answer -= previous
            previous *= 2
            current *= 2
            answer += previous + current
        elif prize == "#":
            current *= -1
            answer += current
        else:
            answer += current

        previous = current

    return answer


dartResult = "1S2D*3T"
print(solution(dartResult))  # 37

dartResult = "1D2S#10S"
print(solution(dartResult))  # 9


dartResult = "1D2S0T"
print(solution(dartResult))  # 3


dartResult = "1S*2T*3S"
print(solution(dartResult))  # 23


dartResult = "1D#2S*3S"
print(solution(dartResult))  # 5


dartResult = "1T2D3D#"
print(solution(dartResult))  # -4

dartResult = "1D2S3T*"
print(solution(dartResult))  # 59
